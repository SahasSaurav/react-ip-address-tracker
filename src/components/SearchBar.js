import React, { useState } from "react";

const SearchBar = ({searchQuery,loader}) => {
  const [text,setText]=useState('');

  return (
    <form
      className="flex justify-center items-center rounded-md overflow-hidden bg-red-200 mb-10"
      style={{
        maxWidth: "34rem",
        width: "100%",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        searchQuery(text);
        loader(true);
      }}
    >
      <input
        type="text"
        name="ipdomain"
        id="ipdomain"
        placeholder="Search for any IP address or domain"
        aria-label="Search for any IP address or domain"
        className="max-w-lg w-full h-12
         focus:outline-none px-4 py-2 text-lg"
         onChange={e=>setText(e.target.value.toLowerCase())}
      />
      <button className="flex justify-center items-center w-16 h-12 bg-black transition-colors duration-200 ease-linear hover:bg-dark-gray " aria-label="search">
        <svg
          className=" text-white fill-current h-8 w-8"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
