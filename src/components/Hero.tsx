import React from "react";
import { ArrowRight, Star } from "lucide-react";
import hubspot from "../../public/hubspot.png";
import pipedrive from "../../public/pept.png";
import salesforce from "../../public/salesforce.png";
import chrome from "../../public/crome.png";

import rocketiocn from "../../public/Images/rocket.png";

interface HeroProps {
  onSignInClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignInClick }) => {
  return (
    <div className="relative pt-[154px] min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
        {/* Pill Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border-[1px] border-[#9ACCFF] rounded-full shadow-sm">
            <img src={rocketiocn} alt="Rocket Icon" className="w-4 h-4 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base text-gray-700 font-medium">Thousands of Professional using LeadCRM </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl   lg:text-5xl font-bold text-gray-900 leading-tight">
            LinkedIn CRM Integration Capture, Sync and Enrich in {' '}
            <span className="relative inline-block">
              <span className="relative z-10">Both Ways</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 -rotate-1 "></span>
            </span>
            
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-lg font-bold sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          LeadCRM embeds your CRM directly into LinkedIn, automating prospect syncing and data enrichment in one click.
        </p>
<div className="flex justify-center ">
  <div className="crm-animation-wrapper">
    <span className="crm-text">Works with</span>
    <div className="crm-animate-container" aria-label="Supported CRMs">
      <div className="crm-list">
        {/* Original items */}
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/hubspot.png" alt="HubSpot" />
          </div>
          <span className="crm-name">HubSpot</span>
        </div>
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/salesforce.png" alt="Salesforce" />
          </div>
          <span className="crm-name">Salesforce</span>
        </div>
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/pipedrive.png" alt="Pipedrive" />
          </div>
          <span className="crm-name">Pipedrive</span>
        </div>
      
  

        {/* Duplicated items for seamless scroll */}
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/hubspot.png" alt="HubSpot" />
          </div>
          <span className="crm-name">HubSpot</span>
        </div>
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/salesforce.png" alt="Salesforce" />
          </div>
          <span className="crm-name">Salesforce</span>
        </div>
        <div className="crm-item">
          <div className="crm-logo">
            <img src="/Images/pipedrive.png" alt="Pipedrive" />
          </div>
          <span className="crm-name">Pipedrive</span>
        </div>
      </div>
    </div>
    <span className="crm-text">& more</span>
  </div>
</div>
        {/* Rating Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 lg:space-x-16 mb-8 sm:mb-12 px-4">
          {/* Google Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <div className="w-20 h-20">
                <img src="/Images/cromenew.png" alt="Google Logo" className="w-full h-full " />
              </div>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2 h-2 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-medium  text-gray-900 text-sm sm:text-sm">5/5</span>
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20">


               <div className="w-20 h-20">
                <img src="/Images/send.png" alt="Google Logo" className="w-full h-full " />
              </div>

            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-2 h-2 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
             <span className="font-medium  text-gray-900 text-sm sm:text-sm">5/5</span>
          </div>
        </div>

        {/* CTA Buttons */}
     <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
  <button className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base">
    <span className="flex flex-col ">Available in</span>
    <div className="flex  items-center space-x-2">
      <img
        src="/Images/crome.png"
        alt="Chrome Web Store"
        className="w-5 h-5"
      />
      <span>Chrome Web Store</span>
    </div>
  </button>
  <button
    onClick={onSignInClick}
    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-400 to-green-500 text-gray-900 rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transition-all font-bold text-sm sm:text-base"
  >
    Get Your Account Now!
  </button>
</div>

      </div>
    </div>
  );
};
export default Hero;
