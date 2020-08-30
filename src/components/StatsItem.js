import React from 'react';

const StatsItem=({label,value})=>{
  return(
    <li className="pl-6 h-full border-l-2 border-light-gray" style={{
      maxWidth:"320px",
      width:"100%"
    }}>
      <p className="text-light-gray mb-2 text-lg font-medium ">
        {label}
      </p>
      <p className="text-dark-gray text-2xl font-medium" style={{
        maxWidth:"150px",
        lineHeight:"1.2"
      }}>
        {value}
      </p>
    </li>
  )
}

export default StatsItem;