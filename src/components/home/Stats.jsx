"use client";

import { Users, Briefcase, Trophy, ShieldCheck } from "lucide-react";

const statItems = [
  {
    icon: <Users className="w-6 h-6 stroke-[1.5]" />,
    count: "13+",
    label: "Years of Combined Expertise",
    bgWatermark: "Expertise",
  },
  {
    icon: <Briefcase className="w-6 h-6 stroke-[1.5]" />,
    count: "100+",
    label: "Projects Delivered",
    bgWatermark: "Projects",
  },
  {
    icon: <Trophy className="w-6 h-6 stroke-[1.5]" />,
    count: "21Y",
    label: "Warranty on Select Products",
    bgWatermark: "Warranty",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 stroke-[1.5]" />,
    count: "4",
    label: "Premium Brands Partnered",
    bgWatermark: "Brands",
  },
];

const Stats = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden select-none bg-[#221510]">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-center text-center">
          {statItems.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center group cursor-default py-4">
              
              {/* Background Watermark */}
              <span className="absolute text-7xl md:text-8xl font-black font-sans uppercase tracking-widest text-white/[0.02] scale-110 pointer-events-none select-none transition-all duration-700 group-hover:text-[#bd845c]/[0.04] group-hover:translate-y-[-10px]">
                {item.bgWatermark}
              </span>

              {/* Circle Icon Wrapper */}
              <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#bd845c] mb-6 transition-all duration-500 ease-out group-hover:bg-[#bd845c] group-hover:text-white group-hover:border-[#bd845c] group-hover:scale-110 shadow-xl relative z-10">
                {item.icon}
              </div>

              {/* Count Header (Maintained pure white color tracking on hover states) */}
              <p className="text-3xl md:text-4xl font-serif font-black  text-white tracking-tight mb-2 relative z-50 transition-colors duration-300">
                {item.count}
              </p>

              {/* Label Text Description Info */}
              <p className="text-stone-400 text-xs font-sans font-bold uppercase tracking-[0.2em] relative z-10 group-hover:text-stone-200 transition-colors duration-300">
                {item.label}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;