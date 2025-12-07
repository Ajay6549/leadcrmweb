const LandingHero = () => {
  return (
    <section
      className="relative w-full pt-40 pb-28 overflow-hidden"
      style={{
        width: "1920px",
        height: "676px",
        opacity: 0.97,
        top: "0px",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-60 -z-10" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm border text-gray-600 text-sm font-medium">
          ⭐ Thousands of Professionals Using CallOps
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          LinkedIn CRM Integration
          <br />
          Capture, Sync and Enrich in{" "}
          <span className="text-blue-600">Both Ways</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Automatically sync LinkedIn prospects to your CRM and overlay existing CRM
          contacts on LinkedIn profiles. Full bi-directional integration with
          HubSpot, Salesforce, and Pipedrive.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition">
            Get a Free Trial Now!
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
            Chrome Extension
          </button>
        </div>

      </div>
    </section>
  );
};

export default LandingHero;
