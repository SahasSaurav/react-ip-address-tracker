import React from "react";
import SearchBar from "./SearchBar";
import pattern from '../assets/images/pattern-bg.png';

const Header = ({searchQuery}) => {
  return (
    <header style={{
      backgroundImage:`url(${pattern})`,
      backgroundSize:"cover",
      backgroundPosition:"top left",
      backgroundRepeat:"no-repeat",
      height:"30%",
      overflow:"hidden"
    }}>
      <div className="container mx-auto p-4 flex flex-col justify-center  items-center ">
        <h1 className="text-center text-4xl font-bold capitalize text-gray-100 mb-8">
          IP Address Tracker
        </h1>
        <SearchBar searchQuery={searchQuery} />
      </div>
    </header>
  );
};

export default Header;
