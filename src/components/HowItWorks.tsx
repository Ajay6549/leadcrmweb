import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-[#F0F7FF] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">
            How it Works
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            From setup to success in 4 simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Wavy Line */}
          <div className="hidden lg:block absolute top-0 left-0 right-0 h-1">
            <svg className="w-full h-full" viewBox="0 0 1200 10" preserveAspectRatio="none">
              <path
                d="M 0 5 Q 150 2, 300 5 T 600 5 T 900 5 T 1200 5"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 font-poppins">1</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Install the Extension</h3>
                <p className="text-gray-600 mb-6 font-poppins">
                  Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-400 via-yellow-400 to-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-3/4"></div>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">LeadCRM | Integrate Leads</span>
                      <button className="bg-blue-600 text-white px-4 py-1 rounded text-xs font-semibold">
                        Add to Chrome
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 font-poppins">2</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Browse LinkedIn</h3>
                <p className="text-gray-600 mb-6 font-poppins">
                  Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-xs">in</span>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                    <div className="flex gap-2 mb-3">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs">People</button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs">1st</button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs">2nd</button>
                      <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs">3rd+</button>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-sm">Marry Fernandez</p>
                            <p className="text-xs text-gray-600">Co-Founder at Abc llc</p>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Connect</button>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-sm">George</p>
                            <p className="text-xs text-gray-600">Co-Founder at Abc llc</p>
                          </div>
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Connect</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 font-poppins">3</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Get Enriched Data</h3>
                <p className="text-gray-600 mb-6 font-poppins">
                  Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.
                </p>
                <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-2">David Steinhoff</h4>
                      <div className="flex gap-2 mb-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Connect</button>
                        <button className="border border-gray-300 px-3 py-1 rounded text-xs">Message</button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">E Mail</span>
                      <span className="text-xs font-semibold">davidsteinhoff@gmail.com</span>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-600">Phone</span>
                      <span className="text-xs font-semibold">+1 90000xxxxxx</span>
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600 font-poppins">4</span>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">Sync to CRM Instantly</h3>
                <p className="text-gray-600 mb-6 font-poppins">
                  Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                      <span>Sync with CRM</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                      <span>Sync with CRM</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-green-100 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                      <span>Sync with CRM</span>
                    </button>
                  </div>
                  <div className="text-center mt-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors cursor-pointer">
                      Sync with CRM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#7fda44] hover:bg-[#6fc93a] text-gray-900 px-8 py-4 rounded-xl font-bold text-lg font-exo shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <span>Try LeadCRM Now</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

