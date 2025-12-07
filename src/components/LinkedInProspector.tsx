
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
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">

        {/* LEFT CARD */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 shadow-md border border-gray-200">

          <div className="flex">
            <img src="/Sales-Navigator.png" className="w-1/2 rounded-xl mb-4" alt="" />
            <img src="/search-hubspot.png" className="w-1/2 rounded-xl mb-4" alt="" />
          </div>

          <h3 className="text-red-500 text-2xl font-semibold mb-4">Without LeadCRM</h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">✖</span>
              <span>
                Manual Data Entry
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  3+ Hours wasted daily
                </span>
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">✖</span>
              <span>
                Incomplete Data
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  60% Data Incomplete
                </span>
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">✖</span>
              <span>
                No CRM Visibility
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  Zero context available
                </span>
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">✖</span>
              <span>
                Limited Productivity
                <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                  No smart assistance
                </span>
              </span>
            </li>
          </ul>
        </div>


        {/* RIGHT CARD */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 shadow-md border border-gray-200">

          <img src="/your-image-right.png" className="w-full rounded-xl mb-4" alt="" />

          <h3 className="text-green-600 text-2xl font-semibold mb-4">With LeadCRM</h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✔</span>
              <span>Complete Bi-Directional Sync</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✔</span>
              <span>700M+ Contacts + Enrichment</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✔</span>
              <span>CRM Overlay on LinkedIn</span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-1">✔</span>
              <span>AI Response + Templates + Bulk Exports</span>
            </li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default LinkedInProspector;