
const LinkedInProspector = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Every LinkedIn Prospector faces these daily challenges
          </h1>
        </div>
      </div>
      <div className="bg-[#f7f9fc] py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

          {/* LEFT CARD */}
          <div className="relative w-full md:w-1/2 bg-[#FFF7F8] rounded-2xl p-8 shadow-lg border border-gray-200">

            <div className="relative w-full h-[220px]">

              <img
                src="/Sales-Navigator.png"
                className="absolute top-0 left-0 w-[85%] rounded-xl shadow-md"
                alt=""
              />


              <img
                src="/search-hubspot.png"
                className="absolute right-0 w-[65%] h-[83%] rounded-xl shadow-lg"
                alt=""
              />
            </div>



            <div>

              <h2 className="text-[#E04F5F] text-2xl font-semibold mb-4">
                Without LeadCRM
              </h2>

              {/* POINT 1 */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-500 text-xl">✖</span>
                <div>
                  <p className="font-semibold">
                    Manual Data Entry
                    <span className="bg-red-100 text-[#FF4C51] text-xs px-2 py-1 rounded-full ml-2">
                      3+ Hours wasted daily
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Copying LinkedIn contacts to CRM manually plus losing conversation history
                  </p>
                </div>
              </div>

              {/* POINT 2 */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-500 text-xl">✖</span>
                <div>
                  <p className="font-semibold">
                    Incomplete Data
                    <span className="bg-red-100 text-[#FF4C51] text-xs px-2 py-1 rounded-full ml-2">
                      60% Data Incomplete
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    LinkedIn profiles missing Email and Phones from 700M+ Database
                  </p>
                </div>
              </div>

              {/* POINT 3 */}
              <div className="flex items-start gap-3 mb-4">
                <span className="text-red-500 text-xl">✖</span>
                <div>
                  <p className="font-semibold">
                    No CRM Visibility
                    <span className="bg-red-100 text-[#FF4C51] text-xs px-2 py-1 rounded-full ml-2">
                      Zero context available
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Can’t see existing CRM contacts when browsing LinkedIn profiles
                  </p>
                </div>
              </div>

              {/* POINT 4 */}
              <div className="flex items-start gap-3">
                <span className="text-red-500 text-xl">✖</span>
                <div>
                  <p className="font-semibold">
                    Limited Productivity
                    <span className="bg-red-100 text-[#FF4C51] text-xs px-2 py-1 rounded-full ml-2">
                      No smart assistance
                    </span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Writing messages manually plus no AI assistant for reply, invite or comments.
                  </p>
                </div>
              </div>

            </div>

            {/* your list items continue here */}
          </div>



          {/* RIGHT CARD */}
          <div className="w-full md:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">

            {/* TOP IMAGE */}
            <img src="/With-LeadCRM.png" className="rounded-xl mb-6" />

            {/* TITLE + GREEN BADGE */}
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-green-600 text-2xl font-semibold">
                With LeadCRM
              </h3>

              <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                4+ Hours/day Saved
              </span>
            </div>

            {/* DESCRIPTION LIST */}
            <ul className="space-y-6">

              <li className="flex items-start gap-3">
                <img src="/With LeadCRM_01.png" className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-900 font-semibold">Complete Bi-Directional Sync</p>
                  <p className="text-gray-600 text-sm">
                    Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real-time.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img src="/With-LeadCRM-02.png" className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-900 font-semibold">700M+ Contacts + Enrichment</p>
                  <p className="text-gray-600 text-sm">
                    Get verified emails and phone numbers from a vast global database.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img src="/With-LeadCRM-03.png" className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-900 font-semibold">CRM Overlay on LinkedIn</p>
                  <p className="text-gray-600 text-sm">
                    See full CRM insights directly on LinkedIn profiles without switching tabs.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <img src="/With-LeadCRM-04.png" className="w-6 h-6 mt-1" />
                <div>
                  <p className="text-gray-900 font-semibold">AI Response + Templates + Bulk Exports</p>
                  <p className="text-gray-600 text-sm">
                    Save time with AI-crafted replies, templates, and one-click data exports.
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* BUTTON & GREEN HANDWRITTEN TEXT */}
        <div className="text-center mt-12">
          <button className="bg-[#7fda44] text-black font-semibold px-8 py-3 rounded-full shadow-md hover:opacity-90 transition">
            Start Using LeadCRM Now
          </button>

          <p className="text-green-600 text-lg mt-4 italic font-handwritten">
            Save 40+ hours every Month
          </p>
        </div>
      </div>


    </section>
  )
}

export default LinkedInProspector;