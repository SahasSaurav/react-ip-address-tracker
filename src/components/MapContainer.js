import React from "react";

const MapContainer = (props) => {
  return (
    <div
      id="mymap"
      className=" bg-gray-300"
      style={{
        height: "70%",
        transform: "translateY(-160px)",
      }}
    >
      {props.children}
    </div>
  );
};

export default MapContainer;
