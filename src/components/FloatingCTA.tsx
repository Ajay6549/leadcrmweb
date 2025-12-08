import React from 'react';

interface FloatingCTAProps {
  onSignInClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onSignInClick }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 max-w-5xl w-full px-4">
      <div className="bg-[#FFF8FE] rounded-xl shadow-2xl p-6 border border-gray-100">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side - Text and Avatars */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-blue-600"
                ></div>
              ))}
            </div>
            
            {/* Text */}
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 font-poppins mb-2">
                Join with our Thousands of professionals Now !
              </h3>
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 font-poppins">
                    No Credit Card Required
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 font-poppins">
                    14 Days Free Trial
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <button
            onClick={onSignInClick}
            className="bg-[#B3FE6A] hover:bg-[#A5EF5C] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg font-exo shadow-lg transition-all duration-200 transform hover:scale-105 whitespace-nowrap"
          >
            Get a Free Trial Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;

