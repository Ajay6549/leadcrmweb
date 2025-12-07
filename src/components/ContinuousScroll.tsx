import React from 'react';

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
  const duplicatedItems = [...items, ...items]; // infinite loop effect

  return (
    <div className="w-full py-14 bg-white">
      <div className="relative overflow-hidden">
   
        {/* Scroll Row */}
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-xl shadow-sm mx-4 px-6 "
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
                <img src={item.icon} alt={item.text} className="w-6 h-6 object-contain" />
              </div>
              <span className="ml-4 text-gray-800 font-semibold text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinuousScroll;
