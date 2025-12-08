import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "David Fincher",
      source: "On Capterra",
      avatar: "👨"
    },
    {
      text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
      name: "Lillian Williams",
      source: "On Capterra",
      avatar: "👩"
    },
    {
      text: "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
      name: "Michael",
      source: "On Capterra",
      avatar: "👨"
    }
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] font-poppins">
            What people are saying about LeadCRM
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-2 border-[#1E3A8A] flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center hover:bg-[#1E40AF] transition-colors"
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
              className="bg-[#F5F0FF] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-gray-700 mb-6 leading-relaxed font-poppins">
                {testimonial.text}
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#1E3A8A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#1E3A8A] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-poppins">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-poppins">{testimonial.source}</p>
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

