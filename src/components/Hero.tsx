import React from "react";
import { ArrowRight, Star } from "lucide-react";
import hubspot from "../../public/hubspot.png";
import pipedrive from "../../public/pept.png";
import salesforce from "../../public/salesforce.png";
import chrome from "../../public/crome.png";

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 sm:pb-24">
        {/* Pill Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 border-gray-200 rounded-full shadow-sm">
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm sm:text-base text-gray-700 font-medium">Stop Juggling Tabs. Start Closing Deals.</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            LinkedIn Leads, Instantly{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Synced</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-3 sm:h-4 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 -rotate-1"></span>
            </span>
            .
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
          LeadCRM embeds your CRM directly into LinkedIn, automating prospect syncing and data enrichment in one click.
        </p>

        {/* Works With Section */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg space-y-2 sm:space-y-0">
            <span className="text-white font-semibold sm:mr-4">Works with</span>
            <div className="flex items-center space-x-3 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">P</span>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">Pipedrive</span>
            </div>
            <span className="text-white font-semibold sm:ml-3">& more</span>
          </div>
        </div>

        {/* Rating Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 lg:space-x-16 mb-8 sm:mb-12 px-4">
          {/* Google Rating */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 rounded-full"></div>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">5/5</span>
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cyan-500 rounded shadow flex items-center justify-center">
              <svg className="w-5 h-5 fill-white text-white" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">5/5</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 px-4">
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base">
            <span>Available in</span>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.8l-5.894-3.6-5.894 3.6V7.2l5.894 3.6 5.894-3.6v9.6z"/>
              </svg>
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
