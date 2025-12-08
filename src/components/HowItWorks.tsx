import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-[#EAEFFA]">
        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#0A1D4A] text-start ml-10">
          How it Works
        </h2>
        <p className="text-start text-gray-600 mt-2 text-lg ml-10">
          From setup to success in <span className="font-semibold">4 simple steps</span>
        </p>
        <div className="max-w-0xl mx-auto px-6">

          {/* 4 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-14">

            {/* CARD 1 */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <img src="/1.png" className="w-14 mx-auto" alt="1" />

              <h3 className="text-2xl font-bold text-center text-[#0A1D4A] mt-4">
                Install the Extension
              </h3>

              <p className="text-center text-gray-600 mt-3">
                Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.
              </p>

              <img
                src="/group-1.png"
                className="w-full mt-6 rounded-xl"
                alt=""
              />
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <img src="/2.png" className="w-14 mx-auto" alt="2" />
              <h3 className="text-2xl font-bold text-center text-[#0A1D4A] mt-4">
                Browse LinkedIn
              </h3>
              <p className="text-center text-gray-600 mt-3">
                Use LinkedIn normally, our extension auto-captures data and reveals CRM
                contacts instantly.
              </p>
              <img
                src="/Group-2.png"
                className="w-full mt-6 rounded-xl"
                alt=""
              />
            </div>

            {/* CARD 3 */}

            <div className="bg-white rounded-3xl shadow-xl p-8">
              <img src="/3.png" className="w-14 mx-auto" alt="3" />

              <h3 className="text-2xl font-bold text-center text-[#0A1D4A] mt-4">
                Get Enriched Data
              </h3>

              <p className="text-center text-gray-600 mt-3">
                Enrich profiles with verified emails, phones & company data with 95%+ accuracy guaranteed.
              </p>

              {/* IMAGE CONTAINER */}
              <div className="relative mt-10 flex justify-center">

                {/* BACK IMAGE */}
                <img
                  src="/Group-3.png"
                  className="rounded-2xl"
                  alt="back"
                />

                {/* FRONT CARD IMAGE (OVERLAY) */}
                <img
                  src="/Group-3-1.png"
                  className="w-[40%] absolute ml-40 rounded-2xl"
                  alt="front"
                />
              </div>
            </div>

            {/* CARD 4 */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <img src="/4.png" className="w-14 mx-auto" alt="4" />
              <h3 className="text-2xl font-bold text-center text-[#0A1D4A] mt-4">
                Sync to CRM Instantly
              </h3>
              <p className="text-center text-gray-600 mt-3">
                Prospect data syncs instantly with tracking & AI powered insights.
              </p>
              <img
                src="/Group-4.png"
                className="w-full mt-6 rounded-xl"
                alt=""
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-14">
            <button className="bg-[#B3FC6A] px-16 py-4 rounded-xl text-black font-semibold text-lg shadow-lg hover:opacity-90 transition flex items-center gap-3">
              {/* TEXT FIRST */}
              Try LeadCRM Now
              {/* ICON AFTER TEXT */}
              <img src="/Vector.png" alt="arrow" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-end mt-[-80px] mr-4">
        <img src="/Ball.png" alt="ball" className="w-32" />
      </div>
    </>
  );
};

export default HowItWorks;
