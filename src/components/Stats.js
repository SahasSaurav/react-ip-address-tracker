import React from 'react';
import StatsItem from './StatsItem';

const Stats=({data:{ip,isp},location:{city,region,country,zip,timezone}})=>{
  // console.log(props)
  return (
    <ul className="flex flex-row  justify-between items-start max-w-screen-xl w-full bg-white rounded-md px-6 py-8 border-box shadow-md" id="stats" style={{
      height:"160px",
      transform:"translateY(-50%)",
      zIndex:"100",
    }}>
      <StatsItem label="IP Address" value={ip} />
      <StatsItem label="Location" value={`${region},${country} ${zip}`}/>
      <StatsItem label="Timezone" value={`UTC ${timezone}`} />
      <StatsItem label="ISP" value={isp} />
    </ul>
  )
}

export default Stats;