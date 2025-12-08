import React from 'react';

const CompleteSolutions: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] font-poppins">
                Complete LinkedIn Sales Solutions
              </h2>
              <p className="text-lg text-gray-600 mt-2 font-poppins">
                Everything you need for professional LinkedIn prospecting.
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-4 mt-6 border-b-2 border-gray-200">
            <button className="px-6 py-3 border-b-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold flex items-center gap-2 font-poppins">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              CRM Data Enrichment
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-[#1E3A8A] font-semibold flex items-center gap-2 font-poppins">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              CRM Data Sync
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-[#1E3A8A] font-semibold flex items-center gap-2 font-poppins">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              Bulk Export & Enrichment
            </button>
            <button className="px-6 py-3 text-gray-600 hover:text-[#1E3A8A] font-semibold flex items-center gap-2 font-poppins">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Productivity
            </button>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="mb-8">
          <p className="text-gray-700 font-poppins">
            It's hard to find the accurate contact data for every prospects by{' '}
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
              Incomplete Data
            </span>
          </p>
        </div>

        {/* Solution Heading */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
            Here is how LeadCRM tackles that situation.
          </h3>
          <a href="#" className="text-green-600 hover:text-green-700 font-semibold text-lg font-exo inline-flex items-center gap-2">
            Try LeadCRM Data Enrichment
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Card 1: Verified Email & Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins flex items-center gap-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verified Email & Phone
            </h4>
            
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <div className="absolute top-0 right-1/4">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">Valid</div>
              </div>
              <div className="absolute top-0 left-1/4">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-bold">Valid</div>
              </div>
            </div>

            <h5 className="font-semibold text-center mb-4 font-poppins">David Steinhoff</h5>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">davidsteinhoff@gmail.com</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">S</span>
                Found via snov.io
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">+1 932 xxx XXX</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded">S</span>
                Found via snov.io
              </div>
            </div>

            <button className="w-full mt-4 bg-[#1E3A8A] text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Contacts Found
            </button>
          </div>

          {/* Card 2: 40+ Search Filters */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">40+ Search Filters</h4>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Above 40+</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Bio Tech</span>
              <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold hover:bg-gray-50">
                + Add Filter
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 bg-gray-100">
                <div className="px-4 py-2 font-semibold text-sm border-r border-gray-200">Email</div>
                <div className="px-4 py-2 font-semibold text-sm">Phone</div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 text-sm border-r border-gray-200">aiden.brooks@gmail.com</div>
                  <div className="px-4 py-2 text-sm">+1 073xxxxxxx</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 text-sm border-r border-gray-200">jimmyanderson@gmail.com</div>
                  <div className="px-4 py-2 text-sm">+1 233xxxxxxx</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 text-sm border-r border-gray-200">philips@gmail.</div>
                  <div className="px-4 py-2 text-sm">+1 023xxxxxxx</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Advanced Waterfall Enrichment */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-700 mb-4 font-poppins">
              If it does not works for you ! try our{' '}
              <a href="#" className="text-green-600 hover:text-green-700 font-semibold">
                Advanced Waterfall Enrichment
              </a>
              {' '}
              <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </p>

            <div className="space-y-4">
              {/* Vendor 1 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-700 font-bold">d</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">DropContact</p>
                  <p className="text-xs text-red-600">X Contacts Not Found</p>
                </div>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Vendor 2 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold">d</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Datagma</p>
                  <p className="text-xs text-red-600">X Contacts Not Found</p>
                </div>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Vendor 3 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xs">🚀</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Rocket Reach</p>
                  <p className="text-xs text-red-600">X Contacts Not Found</p>
                </div>
              </div>
              <div className="text-center">
                <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Vendor 4 - Success */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-xs">SH</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">Signal Hire</p>
                  <div className="flex gap-2 mt-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSolutions;

