import React, { useState, useEffect } from "react";
import {Icon } from 'leaflet';
import { Map, TileLayer, Marker } from "react-leaflet";
import Header from "./components/Header";
import MapContainer from "./components/MapContainer";
import Stats from "./components/Stats";
import locationIcon from './assets/images/icon-location.svg';

export const icon=new Icon({
  iconUrl:locationIcon,
  iconSize:[50,50],
})

function App() {
  const [ipData, setIPData] = useState({ip:'',isp:''});
  const [term, setTerm] = useState("");
  const [locationDetail, setLocationDetail] = useState({city:'',country:'',region:'',lat:'',lon:'',timeone:'',pin:''});

  useEffect(() => {
    fetchIP();
  },[term]);

  const fetchIP = async () => {
    try {
      const url=`https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_API_KEY}&ipAddress=${term}`
      const res = await fetch(url);
    //  const data= await res.json();
     const {ip,isp,location:{city,region,country,lat,lng:lon,postalCode:zip,timezone}}=await res.json();
      setIPData({ip,isp});
      setLocationDetail({city,country,region,lat,lon,zip,timezone});
    } catch (err) {
      console.log(err);
    }
  };
    
  return (
    <div className=" h-screen overflow-hidden ">
      <Header searchQuery={(text)=>setTerm(text)} />
      <div className="container flex justify-center items-center mx-auto">
        <Stats data={ipData} location={locationDetail} />
      </div>
      <MapContainer >
        <Map
          center={[locationDetail.lat, locationDetail.lon]}
          zoom={12}
          className="h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[locationDetail.lat, locationDetail.lon]}
            icon={icon}
          />
        </Map>
      </MapContainer>
    </div>
  );
}

export default App;
