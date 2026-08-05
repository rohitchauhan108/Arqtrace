"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Vineet Tyagi",
    role: "healthcare sector",
    text: "Hello, I'm Dr. Vineet Tyagi, Director of Saanvi Imaging & Orthocare Centre. When I started this centre, I needed a good, well-known brand for my windows, I was searching for a very trusted name. The Arqtrace Lumani Schuco team contacted me, I was really happy with the professional approach they had. The time commitment was excellent and in the end, the material delivered and installations done were perfectly up to the mark.",
    image:
      "/testimonial/vineet-tyagi.webp",
  },
  {
    id: 2,
    name: "Ar. D.K. Singh",
    role: "Residence of Mr. D.K. Singh",
    text: "My special thanks to Mr. Puneet & Mr. Shashi, they have always been very helpful to me and they have supervised very well. My experience with them turned out to be very satisfactory because of their professional attitude. I've never faced any problems working with them while constructing my house and even after shifting my house.",
    image:
      "/testimonial/dk-singh.webp",
  },
  {
    id: 3,
    name: "Mr. Puneet Sharma",
    role: "Lemon Tree Hotel",
    text: "Inki pehli humaari dealing hui thi Lemontree ke liye. Uske baad inhone humaare ghar ka bhe kiya hai kaam, even humaare schools ka bhe kar rahe hain. First time hum uPVC se switchover kare Schüco main, Schüco ka experience hume accha laga. Expensive hai par hume samajh main aaya ki jo expense humne kiya hai woh worthful hai.",
    image:
      "/testimonial/puneet-sharma.webp",
  },
  {
    id: 4,
    name: "Mr. Naman Gupta",
    role: "Residence of Mr. Naman Gupta",
    text: "I am Naman Gupta and I work as a hotelier in Dehradun. The Solitaire is my main property here. This is my house and I installed the Schuco Arqtrace Lumani windows here. It's been a wonderful experience working with Puneet Bhagat ji and Shashi ji. Their products are quite good and aesthetically it's very pleasing.",
    image:
      "/testimonial/naman-gupta.webp",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      style={{ backgroundImage: "url('/projects-bg.png')" }}
      className="relative py-24 bg-stone-50/50 bg-blend-overlay overflow-hidden select-none"
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bd845c]">
                Client Care
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#bd845c]" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                What Customers Value <br /> About Arqtrace
              </h2>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          {/* Featured Image Showcase with Smooth Transition */}
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] w-full max-w-[560px] mx-auto overflow-hidden rounded-2xl shadow-2xl bg-stone-200 relative group">
              <img
                key={current.id}
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105 opacity-0 animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Testimonial Content Card with Smooth Content Transition */}
          <div className="lg:col-span-6 lg:-ml-16 relative z-10">
            <div className="bg-white rounded-2xl border border-stone-200/80 p-8 md:p-12 shadow-2xl transition-all duration-500 backdrop-blur-sm relative">
              <div className="flex justify-between items-center mb-6">
                <Quote className="w-12 h-12 text-[#bd845c]/25 stroke-[1.2]" />
                <div className="flex gap-1 text-[#bd845c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-[0]" />
                  ))}
                </div>
              </div>

              <div className="min-h-[140px] md:min-h-[160px] flex items-center transition-all duration-500">
                <p
                  key={current.id}
                  className="text-stone-700 text-base md:text-lg leading-relaxed italic font-sans transition-opacity duration-500 opacity-0 animate-fade-in"
                >
                  “{current.text}”
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-stone-100">
                <div
                  key={`author-${current.id}`}
                  className="flex items-center gap-4 transition-opacity duration-500 opacity-0 animate-fade-in"
                >
                  <div>
                    <h4 className="text-sm font-serif font-bold text-[#2d1e18] uppercase tracking-wide">
                      {current.name}
                    </h4>
                    <p className="text-[#bd845c] text-xs font-semibold uppercase tracking-wider mt-0.5">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Numbering Indicator at the bottom right */}
                <div className="text-2xl font-serif font-bold text-[#bd845c]/40 tracking-widest">
                  0{activeIndex + 1}
                </div>
              </div>
            </div>
            {/* Vertical Numbering Selector Fixed/Aligned to the Right */}
            <div className="lg:col-span-12 flex justify-center lg:justify-end mt-4 lg:mt-5">
              <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm border border-stone-200/60">
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-10 h-10 rounded-full font-serif font-bold text-sm transition-all duration-300 outline-none flex items-center justify-center ${
                      idx === activeIndex
                        ? "bg-[#bd845c] text-white shadow-md scale-105"
                        : "hover:bg-stone-100 text-stone-600"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline style for smooth fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
