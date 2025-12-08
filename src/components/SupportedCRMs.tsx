import React from 'react';

const SupportedCRMs: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4 font-poppins">
            Our Supported LeadCRM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don't want you to miss any revenue opportunity on the internet!
          </p>
        </div>

        {/* Main Layout */}
        <div className="relative">
          {/* LinkedIn Sources (Left) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Column - LinkedIn Data */}
            <div className="space-y-8">
              {/* Conversation */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2 font-poppins">in Conversation</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Conversations
                    </span>
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2 font-poppins">in Contacts</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      First Name
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Last Name
                    </span>
                  </div>
                </div>
              </div>

              {/* Companies */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center relative">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-2 font-poppins">in Companies</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Company Employees
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Website
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - LeadCRM Hub */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg relative">
                <span className="text-3xl font-bold text-blue-600">LS</span>
              </div>
              <p className="mt-4 font-bold text-gray-900 font-poppins">LeadCRM</p>
              
              {/* Data Flow Indicators */}
              <div className="mt-8 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Employeer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Website</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-600 rounded-full"></div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Conversations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">Last Na</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">First Name</span>
                </div>
              </div>
            </div>

            {/* Right Column - CRM Logos */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold text-xs">H</span>
                </div>
              </div>
              <p className="text-center text-sm font-semibold text-gray-700 font-poppins">HubSpot</p>

              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-md">
                <span className="text-white font-bold text-xl">p</span>
              </div>
              <p className="text-center text-sm font-semibold text-gray-700 font-poppins">Pipedrive</p>

              <div className="w-16 h-16 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                <span className="text-blue-600 font-bold text-xs">salesforce</span>
              </div>
              <p className="text-center text-sm font-semibold text-gray-700 font-poppins">Salesforce</p>

              <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-3 h-3 bg-red-500"></div>
                  <div className="w-3 h-3 bg-yellow-500"></div>
                  <div className="w-3 h-3 bg-green-500"></div>
                  <div className="w-3 h-3 bg-blue-500"></div>
                </div>
              </div>
              <p className="text-center text-sm font-semibold text-gray-700 font-poppins">Zoho CRM</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#7fda44] hover:bg-[#6fc93a] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg font-exo shadow-lg transition-all duration-200 transform hover:scale-105">
            Lets Integrate your CRM Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedCRMs;

