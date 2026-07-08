"use client";

import { useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Arqtrace Client",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    text: "We strive to bring you nothing but the best quality of products for your everlasting home or your upcoming project.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Arqtrace Client",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    text: "Our experienced team is here to guide you through the selection process, ensuring you find the perfect windows, doors, and outdoor furniture for your specific needs.",
    image: "/home/2.webp",
  },
  {
    id: 3,
    name: "Arqtrace Client",
    role: "Developer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80",
    text: "Our team provides expert consultation to help you choose the right products and ensures seamless installation for a hassle-free experience.",
    image: "/home/5.webp",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" style={{ backgroundImage: "url('/projects-bg.png')" }} className="relative py-24 bg-white overflow-hidden select-none">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
          <div className="lg:col-span-6 relative z-0">
            <div className="aspect-[4/5] w-full max-w-[520px] overflow-hidden shadow-lg bg-stone-100">
              <img src={current.image} alt="Arqtrace project showcase" className="w-full h-full object-cover transition-all duration-700 ease-in-out transform scale-100" />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8 pt-4 z-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bd845c]">Client Care</span>
                <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  What Customers Value <br /> About Arqtrace
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-12 pl-2">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-300 p-0.5 outline-none ${idx === activeIndex ? "border-[#bd845c] scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"}`}
                  aria-label={`View testimonial from ${item.name}`}
                >
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:absolute lg:bottom-0 lg:right-0 lg:w-[58%] bg-stone-50 border border-stone-200/60 p-8 md:p-12 shadow-xl z-20 transition-all duration-500">
            <div className="flex justify-between items-center mb-6">
              <Quote className="w-12 h-12 text-[#bd845c]/20 stroke-[1.2]" />
              <div className="flex gap-1 text-[#bd845c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-[0]" />
                ))}
              </div>
            </div>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-8 italic font-sans">“{current.text}”</p>

            <div className="flex items-center gap-4 pt-6 border-t border-stone-200/80">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-stone-200 shrink-0">
                <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#2d1e18] uppercase tracking-wide">{current.name}</h4>
                <p className="text-stone-400 text-xs uppercase font-bold tracking-widest mt-0.5">{current.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;