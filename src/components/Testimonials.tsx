import React, { useState } from "react";
import icon1 from "/Images/user1.png";
import icon2 from "/Images/user2.png";
import icon3 from "/Images/user3.png";
import crmicon from "/Images/crmicon1.png";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "David Fincher",
      source: "On Capterra",
      avatar: icon1,
    },
    {
      text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
      name: "Lillian Williams",
      source: "On Capterra",
      avatar: icon2,
    },
    {
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "Michael",
      source: "On Capterra",
      avatar: icon3,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#090F4E] font-poppins">
            What people are saying about LeadCRM
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-[1px] border-[#090F4E] flex items-center justify-center hover:bg-[#090F4E] hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#090F4E] text-white flex items-center justify-center hover:bg-[#090F4E] transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F5F0FF] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              {/* Text */}
              <p className="text-gray-700 font-poppins leading-relaxed">
                {testimonial.text}
              </p>

              {/* CRM Icon + Stars — positioned right after paragraph */}
              <div className="flex items-center justify-start ">
                <img src={crmicon} className="w-16 h-16 object-contain" alt="crm" />

                <div className="flex ">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#090F4E] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Reviewer Section */}
              <div className="flex items-center gap-3 border-t pt-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="leading-tight">
                  <p className="font-semibold text-gray-900 font-poppins">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 font-poppins">
                    {testimonial.source}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
