"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "Luxury Aluminum Sliding Doors",
    category: "Premium Entryways",
    image: "/project/p1/7.webp",
  },
  {
    title: "Contemporary uPVC Window Systems",
    category: "Energy-Efficient Living",
    image: "/project/p2/6.webp",
  },
  {
    title: "Glass Partitions for Modern Offices",
    category: "Interior Glazing",
    image: "/images/10.webp",
  },
  {
    title: "Outdoor Furniture Collections",
    category: "Exterior Comfort",
    image: "/home/5.webp",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-stone-50 overflow-hidden select-none">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bd845c]">Projects</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight mb-4">
                Featured Installations <br /> for Modern Spaces
              </h2>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xl">
                From luxury doors to partition systems and outdoor furniture, Arqtrace designs and delivers premium solutions that stand out.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full bg-white border border-stone-200 text-[#2d1e18] hover:bg-[#bd845c] hover:text-white hover:border-[#bd845c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm" aria-label="Previous Project">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-white border border-stone-200 text-[#2d1e18] hover:bg-[#bd845c] hover:text-white hover:border-[#bd845c] flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm" aria-label="Next Project">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <Button className="border border-stone-300 hover:border-[#bd845c] text-[#2d1e18] hover:text-[#bd845c] bg-transparent hover:bg-transparent rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 group">
              View All
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div ref={sliderRef} className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory pb-4" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
          {projects.map((project, index) => (
            <div key={index} className="relative group shrink-0 w-[85vw] sm:w-[55vw] lg:w-[32vw] aspect-[4/3] bg-stone-100 overflow-hidden snap-start shadow-sm hover:shadow-xl transition-all duration-500">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />

              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#bd845c] text-white flex items-center justify-center transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out shadow-lg">
                  <Plus className="w-6 h-6" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-white px-5 py-4 shadow-lg transition-all duration-500 group-hover:bg-[#2d1e18] z-10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#bd845c] mb-1 !group-hover:text-white transition-colors duration-500">
                  {project.category}
                </span>
                <p className="text-sm md:text-base font-serif font-bold text-[#2d1e18] truncate transition-colors duration-500 group-hover:text-white">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
