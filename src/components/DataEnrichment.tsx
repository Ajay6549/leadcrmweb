import React from 'react';

const DataEnrichment: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-green-600 text-lg font-semibold font-exo">
              Try LeadCRM Data Enrichment
            </span>
            <svg className="w-3 h-3 text-green-600 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Here is how LeadCRM tackles that situation.
          </h2>
        </div>

        {/* Main Content Frame */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 mb-8">
          {/* Header with Icon */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-gray-200">
              <svg className="w-6 h-6 text-[#090F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#090F47] font-poppins">
              Verified Email & Phone
            </h3>
          </div>

          {/* Data Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Contact Card 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow-md">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm font-montserrat">Found via snov.io</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-3 bg-[#1D483F] rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#1D483F] font-montserrat">Valid</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600 font-rubik">Found via snov.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600 font-rubik">Found via snov.io</span>
                </div>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full border border-gray-300 flex items-center justify-center shadow-md">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm font-montserrat">Found via snov.io</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-3 h-3 bg-[#1D483F] rounded-full flex items-center justify-center">
                        <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs font-bold text-[#1D483F] font-montserrat">Valid</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600 font-rubik">Found via snov.io</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600 font-rubik">Found via snov.io</span>
                </div>
              </div>
            </div>

            {/* Contacts Found Badge */}
            <div className="bg-[#333333] rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-white font-semibold font-montserrat">Contacts Found</span>
            </div>
          </div>

          {/* Bottom Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-[#EEFFB4] rounded-lg border border-[#1D483F]">
              <svg className="w-5 h-5 text-[#1D483F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-[#1D483F] font-montserrat">Valid</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-sm font-rubik">Contacts Not Found</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#EEFFB4] rounded-lg">
              <svg className="w-5 h-5 text-[#1D483F]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-[#1D483F] font-montserrat">Valid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEnrichment;

