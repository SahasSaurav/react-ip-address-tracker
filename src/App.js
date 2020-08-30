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
  const [ipData, setIPData] = useState({});
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    fetchIP();
  },[term]);

  const fetchIP = async () => {
    try {
      let url;
      url = `http://ip-api.com/json/${term}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`;
      const res = await fetch(url);
      const {
        query: ip,
        city,
        country,
        countryCode,
        zip,
        lat,
        lon,
        offset: utcTimezone,
        isp,
      } = await res.json();
      setIPData({
        ip,
        city,
        country,
        countryCode,
        zip,
        lat,
        lon,
        timezone: (parseFloat(utcTimezone) / 3600).toFixed(2),
        isp,
      });
      setLocation({
        lat,
        lon,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" h-screen overflow-hidden ">
      <Header searchQuery={(text)=>setTerm(text)} />
      <div className="container flex justify-center items-center mx-auto">
        <Stats data={ipData} />
      </div>
      <MapContainer location={location}>
        <Map
          center={[location.lat, location.lon]}
          zoom={13}
          style={{
            height: "100%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[location.lat, location.lon]}
            icon={icon}
          />
        </Map>
      </MapContainer>
    </div>
  );
}

export default App;
