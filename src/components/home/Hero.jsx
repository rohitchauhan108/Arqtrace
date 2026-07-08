"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Facebook, Twitter, Instagram, ArrowRight, Play, ArrowLeft } from "lucide-react";

const SLIDES_DATA = [
  {
    subtitle: "Premium Aluminum & uPVC Solutions",
    title: "Windows, Doors & Partitions Crafted for Modern Living",
    description:
      "Arqtrace brings premium aluminum and uPVC windows, doors, partitions, and outdoor furniture to homes and projects with design-forward quality and enduring performance.",
    mainImage: "/hero-slider/1.jpg",
  },
  {
    subtitle: "Trusted Premium Brands",
    title: "Luxury Products Backed by Expert Guidance",
    description:
      "We are the trusted dealer of Lumani, SCHUCO, Winda, and Gebe solutions, offering innovation that elevates comfort, style, and durability.",
    mainImage: "/hero-slider/2.jpg",
  },
  {
    subtitle: "Seamless Installation",
    title: "Professional Delivery From Consultation to Completion",
    description:
      "From the first consultation to flawless installation, our team ensures every project is completed with precision and care.",
    mainImage: "/hero-slider/3.jpg",
  },
  {
  subtitle: "Architectural Glass & Facades",
  title: "Elegant Glass Systems That Transform Every Space",
  description:
    "Create brighter, more sophisticated interiors with premium glass facades, office partitions, railings, and structural glazing solutions engineered for strength, aesthetics, and lasting performance.",
  mainImage: "/about-section/1.jpg",
},
{
  subtitle: "Outdoor Living Collection",
  title: "Premium Pergolas & Outdoor Furniture for Timeless Comfort",
  description:
    "Enhance terraces, gardens, balconies, and commercial spaces with stylish pergolas, outdoor furniture, and weather-resistant architectural solutions designed to blend luxury with functionality.",
  mainImage: "/home/5.webp",
},
];

const Hero = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const currentSlide = SLIDES_DATA[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % SLIDES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  return (
    <section className="relative min-h-[750px] lg:h-[850px] w-full bg-[#fbf9f4] overflow-hidden flex items-center bg-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute left-6 bottom-1/3 z-20 hidden md:flex flex-col gap-6 text-[#7c695c]">
        <a href="https://www.facebook.com/profile.php?id=61553583790346" target="_blank" rel="noreferrer" className="hover:text-amber-700 transition-colors"><Facebook className="w-4 h-4" /></a>
        <a href="https://twitter.com/arqtrace" target="_blank" rel="noreferrer" className="hover:text-amber-700 transition-colors"><Twitter className="w-4 h-4" /></a>
        <a href="https://www.instagram.com/arqtrace/" target="_blank" rel="noreferrer" className="hover:text-amber-700 transition-colors"><Instagram className="w-4 h-4" /></a>
        <span className="w-[1px] h-12 bg-[#7c695c]/30 mx-auto mt-2" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-16 lg:py-0">
        <div className="lg:col-span-6 flex flex-col justify-center min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-[#b07d57] inline-block" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#b07d57]">
                  {currentSlide.subtitle}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2d1e18] mb-6 leading-[1.15]">
                {currentSlide.title.split("<br />").map((text, i) => (
                  <span key={i}>{text}</span>
                ))}
              </h1>

              <p className="text-[#685950] text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                {currentSlide.description}
              </p>

              <div>
                <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-6 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-all group">
                  Explore Arqtrace
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4 relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full max-w-[420px] aspect-[4/5] border border-stone-300 p-3 bg-white shadow-xl"
            >
              <div
                className="absolute -bottom-8 -left-8 w-1/2 h-1/3 bg-cover bg-center -z-10 shadow-lg border border-white opacity-40"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
              />

              <div className="relative w-full h-full overflow-hidden bg-stone-100 flex items-center justify-center">
                <img src={currentSlide.mainImage} alt="Arqtrace premium product showcase" className="w-full h-full object-cover" />
                
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-2 hidden lg:flex flex-col gap-3 h-[480px] justify-between pl-4">
          {SLIDES_DATA.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentIdx(index)}
              className={`w-full h-[23%] overflow-hidden border transition-all duration-300 relative group text-left ${
                currentIdx === index
                  ? "border-[#bd845c] ring-2 ring-[#bd845c]/20 scale-[1.02] opacity-100"
                  : "border-stone-200 opacity-60 hover:opacity-90"
              }`}
            >
              <img src={slide.mainImage} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={`Select slide ${index + 1}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20 hidden lg:block">
        <div className="container mx-auto px-16 flex justify-between items-end pb-12">
          <div className="flex gap-1 ml-[48%] transform -translate-x-1/2">
            <button onClick={handlePrev} className="bg-white hover:bg-[#bd845c] text-[#2d1e18] hover:text-white px-8 py-4 font-bold uppercase tracking-wider text-xs border border-stone-200/60 shadow-sm transition-all flex items-center gap-2">
              <ArrowLeft className="w-3 h-3" /> Prev
            </button>
            <button onClick={handleNext} className="bg-white hover:bg-[#bd845c] text-[#2d1e18] hover:text-white px-8 py-4 font-bold uppercase tracking-wider text-xs border border-stone-200/60 shadow-sm transition-all flex items-center gap-2">
              Next <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="flex items-baseline gap-2 font-serif text-[#2d1e18]">
            <span className="text-stone-400 text-sm font-sans tracking-widest">0{SLIDES_DATA.length}</span>
            <span className="text-4xl font-bold text-[#b07d57]">0{currentIdx + 1}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;