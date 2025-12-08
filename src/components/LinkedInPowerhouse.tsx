import React from 'react';

interface LinkedInPowerhouseProps {
  onSignInClick: () => void;
}

const LinkedInPowerhouse: React.FC<LinkedInPowerhouseProps> = ({ onSignInClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badge */}
        <div className="text-center mb-8">
          <p className="text-white text-lg font-semibold font-poppins">
            Join Thousands of Professionals Using LeadCRM
          </p>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
            Your LinkedIn Powerhouse for Smarter Lead Management
          </h2>

          {/* CRM Integration Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">sf</span>
              </div>
              <span>salesforce</span>
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-5a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" />
                </svg>
              </div>
              <span>HubSpot</span>
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg transition-all">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <span>pipedrive</span>
            </button>
          </div>

          {/* Review Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-gray-700 font-semibold">Capterra</span>
              <span className="text-xl font-bold text-yellow-500">4.8</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-gray-700 font-semibold">Top-rated Product</span>
              <span className="text-xl font-bold text-yellow-500">4.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-bold">G</span>
            </div>
          </div>
        </div>

        {/* Feature Windows Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {/* Navigator Window */}
          <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-[-2deg] hover:rotate-0 transition-transform">
            <div className="font-semibold text-gray-900 mb-3 text-sm">AVIGATOR</div>
            <div className="text-xs text-gray-600 mb-3">42 Results</div>
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center gap-2 p-2 border border-gray-200 rounded">
                  <input type="checkbox" className="w-4 h-4" />
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold">Marry Fernandez</p>
                    <p className="text-xs text-gray-500">Co-Founder at Abc llc</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Message</button>
                    <button className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Save</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-3 bg-green-500 text-white py-2 rounded text-xs font-semibold">
              Bulk Export to HubSpot (42 Profiles)
            </button>
          </div>

          {/* Templates Window */}
          <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-[1deg] hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-3">
              <button className="text-xs text-gray-600">&lt;</button>
              <span className="font-semibold text-gray-900 text-sm">Templates</span>
            </div>
            <input
              type="text"
              placeholder="Search Templates"
              className="w-full px-3 py-2 border border-gray-300 rounded text-xs mb-3"
            />
            <div className="space-y-2">
              <div className="p-2 border border-gray-200 rounded">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold">Business Strategy Meeting</span>
                  <button className="text-gray-400">✏️</button>
                </div>
                <div className="flex gap-2 text-xs text-gray-600">
                  <span>10% Time Used</span>
                  <span>60% Reply Rate</span>
                </div>
                <div className="flex gap-1 mt-1">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Category 5</span>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">Shortcut Name</span>
                </div>
              </div>
              <div className="p-2 border border-gray-200 rounded">
                <div className="flex justify-between items-start mb-1">
                  <span className="text-xs font-semibold">Book a brief call</span>
                  <button className="text-gray-400">✏️</button>
                </div>
              </div>
            </div>
          </div>

          {/* Messaging Window */}
          <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-[-1deg] hover:rotate-0 transition-transform">
            <div className="mb-3">
              <p className="font-semibold text-sm text-gray-900">David Steinhoff</p>
              <p className="text-xs text-gray-600">Recruitment Specialist @ Microsoft</p>
            </div>
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Write a message or"
                className="w-full px-3 py-2 border border-gray-300 rounded text-xs pr-20"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded text-xs">
                AI Response
              </button>
            </div>
            <div className="flex gap-2 mb-3">
              <button className="text-gray-400">📎</button>
              <button className="text-gray-400">🖼️</button>
              <button className="text-gray-400">GIF</button>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded text-xs font-semibold">
              Send
            </button>
          </div>

          {/* Contact Enrichment Window */}
          <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-[1.5deg] hover:rotate-0 transition-transform">
            <div className="font-semibold text-gray-900 mb-3 text-sm">Finding contact details</div>
            <label className="flex items-center gap-2 mb-4 text-xs">
              <input type="checkbox" className="w-4 h-4" />
              <span>Search for mobile 1 extra credit</span>
            </label>
            <div className="text-xs font-semibold mb-2">Searching for Email and mobile</div>
            <div className="space-y-2">
              {['Snov', 'Skarpp', 'Lead IQ', 'Skarpp', 'Snov'].map((source, i) => (
                <label key={i} className="flex items-center gap-2 text-xs">
                  <input type="checkbox" className="w-4 h-4" />
                  <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                    <span className="text-purple-700 font-bold text-xs">{source[0]}</span>
                  </div>
                  <span>{source}</span>
                </label>
              ))}
            </div>
          </div>

          {/* LinkedIn Post Window */}
          <div className="bg-white rounded-lg shadow-2xl p-4 transform rotate-[-1.5deg] hover:rotate-0 transition-transform">
            <div className="mb-3">
              <p className="font-semibold text-sm text-gray-900">Jimmy Anderson</p>
              <p className="text-xs text-gray-600">Head of Sales and Marketing</p>
            </div>
            <p className="text-xs text-gray-700 mb-3">
              Dream Big and Focus on Your Goals! In a world of possibilities, the only limits we have are the ones...more
            </p>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-xs font-semibold">David Steinhoff</p>
                  <p className="text-xs text-gray-600">Hey there. Its an fantastic article which is majorly focused on dreaming big to achieve the goals.</p>
                </div>
              </div>
              <div className="flex gap-2 text-xs text-gray-600 mb-3">
                <button>Like</button>
                <button>Reply</button>
              </div>
              <div className="flex gap-2 mb-2">
                <button className="flex-1 bg-purple-600 text-white px-3 py-1 rounded text-xs">AI Comment</button>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <button className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Thanks for sharing, James</button>
                <button className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Definitely worth reading</button>
              </div>
              <input
                type="text"
                placeholder="Add a Comment"
                className="w-full px-3 py-2 border border-gray-300 rounded text-xs"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onSignInClick}
            className="bg-[#7fda44] hover:bg-[#6fc93a] text-gray-900 px-12 py-5 rounded-xl font-bold text-xl font-exo shadow-2xl transition-all duration-200 transform hover:scale-105 flex items-center gap-3 mx-auto"
          >
            <span>Get Started Today</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LinkedInPowerhouse;

