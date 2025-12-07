import React from 'react'

import icon1 from "../../public/Images/icon1.png";
import icon2 from "../../public/Images/icon2.png";
import icon3 from "../../public/Images/icon3.png";
import icon4 from "../../public/Images/icon4.png";


const items = [
  { icon: icon1, text: "+ to Access to 700M+ Contacts" },
  { icon: icon2, text: "One click push to CRM" },
  { icon: icon3, text: "Custom Field Mapping" },
  { icon: icon4, text: "Advanced Waterfall Enrichment" },
];



const ContinuousScroll = () => {
  return (
      <div className=''>
         <div className="overflow-hidden relative w-full">
      <div className="flex animate-scroll whitespace-nowrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 px-6 "
          >
            <img src={item.icon} alt={item.text} className="w-6 h-6" />
            <span className="text-gray-800 font-medium">{item.text}</span>
          </div>
        ))}
    
      </div>
    </div> 
      </div> 
  )
}

export default ContinuousScroll
