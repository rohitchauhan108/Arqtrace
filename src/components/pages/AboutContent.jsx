"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Users, Award } from "lucide-react";

const AboutContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] lg:min-h-[650px] w-full overflow-hidden flex items-center select-none"
        style={{ 
          backgroundImage: "url('/home/5.webp')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/50" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 ">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">About Us</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15] tracking-tight max-w-4xl mx-auto">
              Discover the Arqtrace Difference
            </h1>
            
            <p className="text-white/70 text-sm md:text-base mb-0 max-w-2xl mx-auto leading-relaxed font-sans">
              Arqtrace is an all-in-one solution for premium aluminum and uPVC windows, doors, partitions, and outdoor furniture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Story Block Section */}
      <section className="relative py-24 lg:py-32 bg-white select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Multi-Grid Frame */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
              <div className="col-span-6 flex flex-col gap-4">
                <div className="aspect-[4/5] overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                  <img src="/about-section/1.jpg" alt="Arqtrace premium aluminium window" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                  <img src="/about-section/2.jpg" alt="Arqtrace premium door and partition" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-6">
                <div className="h-full min-h-[400px] overflow-hidden shadow-lg border border-stone-100 bg-stone-50">
                  <img src="/about-section/3.jpg" alt="Arqtrace installation expertise" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Right Story Text Column Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] whitespace-nowrap">Our Story</span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  Arqtrace: In Brief
                </h2>
              </div>

              <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xl font-sans">
                Arqtrace is an all-in-one solution for premium aluminum and uPVC windows, doors, partitions, and outdoor furniture. We strive to bring you nothing but the best quality of products for your everlasting home or your upcoming project.
              </p>

              {/* 2x2 Feature Core Matrices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl border-t border-stone-100 pt-8">
                {[
                  { Icon: CheckCircle, title: "Unmatched Quality", desc: "Premium aluminum windows, doors, uPVC solutions, and outdoor furniture built for durability and elegance." },
                  { Icon: Users, title: "Trusted Premium Brands", desc: "Official dealer of Lumani, SCHUCO, Winda, and Gebe with deep industry experience." },
                  { Icon: Shield, title: "Expert Guidance", desc: "Professional consultation and seamless installation for a hassle-free experience." },
                  { Icon: Award, title: "Reliable Warranties", desc: "Up to 21 years of warranty on select products for lasting peace of mind." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-stone-50 border border-stone-200/60 flex items-center justify-center text-[#bd845c] shrink-0">
                      <item.Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[#2d1e18] font-serif font-bold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-stone-400 text-xs leading-normal font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-all duration-300 group shadow-md hover:shadow-lg">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Work Process Section */}
<section 
  className="relative py-24 mb-20 lg:py-32 overflow-hidden select-none bg-stone-50"
  style={{ 
    backgroundImage: "url('/about-section/1.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  }}
>
  <div className="container mx-auto px-6 lg:px-16 relative z-10">
    
    {/* Section Heading */}
    <div className="flex flex-col items-center text-center space-y-4 mb-20">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#bd845c]" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
          Work Process
        </span>
        <span className="w-1.5 h-1.5 bg-[#bd845c]" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight max-w-2xl">
        Why Choose ARQTRACE?
      </h2>
    </div>

    {/* Grid Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
      
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center group relative">
        <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full p-2 bg-white shadow-xl border border-stone-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 z-10">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-[#2d1e18]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src="/about-section/2.jpg" 
              alt="Consultation & Design" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#bd845c] text-white px-4 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md border border-white/20">
            Step 01
          </div>
        </div>
        <div className="mt-8 space-y-2 max-w-[240px]">
          <h3 className="text-lg font-serif font-bold text-[#2d1e18] transition-colors duration-300 group-hover:text-[#bd845c]">
            Unmatched Product Quality
          </h3>
          <p className="text-stone-500 text-xs font-sans leading-relaxed">
            We bring you the highest-quality aluminum windows, doors, uPVC solutions, and outdoor furniture for lasting performance and refined aesthetics.
          </p>
        </div>
        <div className="hidden lg:block absolute top-24 -right-1/4 w-1/2 h-[1px] border-t border-dashed border-stone-300/80 pointer-events-none z-0" />
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center group relative lg:translate-y-12">
        <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full p-2 bg-white shadow-xl border border-stone-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 z-10">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-[#2d1e18]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src="/hero-slider/2.jpg" 
              alt="Material Selection" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#bd845c] text-white px-4 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md border border-white/20">
            Step 02
          </div>
        </div>
        <div className="mt-8 space-y-2 max-w-[240px]">
          <h3 className="text-lg font-serif font-bold text-[#2d1e18] transition-colors duration-300 group-hover:text-[#bd845c]">
            Trusted Dealer of Premium Brands
          </h3>
          <p className="text-stone-500 text-xs font-sans leading-relaxed">
            Arqtrace is the official dealer of Lumani, SCHUCO, Winda, and Gebe, delivering premium products backed by innovation and experience.
          </p>
        </div>
        <div className="hidden lg:block absolute top-24 -right-1/4 w-1/2 h-[1px] border-t border-dashed border-stone-300/80 pointer-events-none z-0" />
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center group relative">
        <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full p-2 bg-white shadow-xl border border-stone-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 z-10">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-[#2d1e18]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src="/hero-slider/3.jpg" 
              alt="Precision Engineering" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#bd845c] text-white px-4 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md border border-white/20">
            Step 03
          </div>
        </div>
        <div className="mt-8 space-y-2 max-w-[240px]">
          <h3 className="text-lg font-serif font-bold text-[#2d1e18] transition-colors duration-300 group-hover:text-[#bd845c]">
            Expert Guidance & Installation
          </h3>
          <p className="text-stone-500 text-xs font-sans leading-relaxed">
            Our team offers expert consultation and seamless installation, ensuring a smooth experience from selection to finishing.
          </p>
        </div>
        <div className="hidden lg:block absolute top-24 -right-1/4 w-1/2 h-[1px] border-t border-dashed border-stone-300/80 pointer-events-none z-0" />
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center text-center group relative lg:translate-y-12">
        <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full p-2 bg-white shadow-xl border border-stone-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 z-10">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-[#2d1e18]/20 group-hover:bg-transparent transition-all duration-500 z-10" />
            <img 
              src="/home/1.webp" 
              alt="Expert Installation" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#bd845c] text-white px-4 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest shadow-md border border-white/20">
            Step 04
          </div>
        </div>
        <div className="mt-8 space-y-2 max-w-[240px]">
          <h3 className="text-lg font-serif font-bold text-[#2d1e18] transition-colors duration-300 group-hover:text-[#bd845c]">
            Long-Term Reliability
          </h3>
          <p className="text-stone-500 text-xs font-sans leading-relaxed">
            With up to 21 years of warranty on select products, we guarantee solutions that stand the test of time.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Stats, Solutions & Metrics Block Section */}
      <section className="py-24 lg:py-32  select-none border-t border-stone-100" style={{background  : 'url(/bg-pattern.png)'}}>
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Collage Images Panel with Floating Box */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-4 items-center">
              <div className="col-span-8 relative z-10">
                <div className=" overflow-hidden shadow-xl border border-stone-200/20 bg-stone-100">
                  <img src="/home/1.webp" alt="Modern clean luxury home architecture interior layout" className="w-full h-[300px] object-cover" />
                </div>
              </div>
              
              <div className="col-span-6 absolute -right-4 bottom-8 z-0">
                <div className=" overflow-hidden shadow-lg border border-stone-200/30 bg-stone-100">
                  <img src="/home/5.webp" alt="Premium custom minimalist window profiles frame installation" className="w-full h-full object-cover grayscale-[15%]" />
                </div>
              </div>

              {/* Years Experience Geometric Overlay Card Box */}
              <div className="absolute bottom-16 -left-6 bg-[#bd845c] p-6 text-white shadow-2xl flex items-center gap-4 border border-white/10 z-20 transition-transform duration-500 hover:scale-105">
                <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none border-r border-white/20 pr-4">
                  13+
                </h2>
                <div className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] leading-tight max-w-[85px] text-white/90">
                  Years Of Combined Experience
                </div>
              </div>
            </div>

            {/* Right Side Content Matrix Details */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 lg:pl-4">
              <div className="flex items-start gap-5">
                <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] whitespace-nowrap">Why Choose Us</span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  We Provide Reliable Solutions
                </h2>
              </div>

              <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xl font-sans">
                ARQTRACE PVT LTD takes pride in its unwavering commitment to customer satisfaction. Our experienced team is here to guide you through the selection process, ensuring that you find the perfect windows, doors, and outdoor furniture to meet your specific needs.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-stone-200/60 pt-8 max-w-md">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#bd845c]">
                    <Users className="w-4 h-4 stroke-[2]" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400">Brand Partners</span>
                  </div>
                  <div className="text-4xl font-serif font-bold text-[#2d1e18] tracking-tight">
                    4+
                  </div>
                </div>

                <div>
                  <span className="block text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-4">
                    Warranty
                  </span>
                  <div className="text-4xl font-serif font-bold text-[#2d1e18] tracking-tight">
                    21Y
                  </div>
                </div>
              </div>

              <div className="rounded-none border border-stone-200 bg-stone-50 p-6 text-sm text-stone-600 shadow-sm">
                <p className="font-serif font-semibold text-[#2d1e18] mb-2">ARQTRACE PVT. LTD.</p>
                <p>First Floor, Durga Tower, GMS Road, Dehradun-248001, Uttarakhand</p>
                <p className="mt-2">+91 7888864955</p>
                <p>info@arqtrace.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
     {/* Partner Logos Marquee Section */}
<section className="py-20 lg:py-24 bg-[#fbf9f4] relative overflow-hidden select-none">
  <div className="absolute inset-0 bg-[url('/bg-pattern.png')] opacity-30 pointer-events-none" />
  
  <div className="container mx-auto px-6 lg:px-16 relative z-10">
    {/* Section Heading */}
    <div className="flex flex-col items-center text-center space-y-4 mb-16">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#bd845c]" />
        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
          Our Partners
        </span>
        <span className="w-1.5 h-1.5 bg-[#bd845c]" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2d1e18] tracking-tight">
        Trusted by Leading Brands
      </h2>
    </div>
  </div>

  {/* CSS Infinite Loop Marquee container */}
  <div className="w-full relative flex overflow-x-hidden border-y border-stone-200/50 bg-white/0 py-8 backdrop-blur-xs">
    {/* Gradient Fades for Smooth Side Edges */}
    <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#fbf9f4] to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#fbf9f4] to-transparent z-10 pointer-events-none" />

    {/* Marquee Track 1 */}
    <div className="flex gap-12 items-center shrink-0 animate-[marquee_25s_linear_infinite] whitespace-nowrap px-6">
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
        <div 
          key={`track1-${idx}`} 
          className="w-56 lg:w-64 h-24 flex items-center justify-center p-4 opacity-100 hover:opacity-100 transition-all duration-300 mx-6"
        >
          <img
            src={`/about-section/logo${num}.png`}
            alt={`Partner Logo ${num}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>

    {/* Marquee Track 2 (Cloned for gapless continuation) */}
    <div className="flex gap-12 items-center shrink-0 animate-[marquee_25s_linear_infinite] whitespace-nowrap px-6" aria-hidden="true">
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
        <div 
          key={`track2-${idx}`} 
          className="w-56 lg:w-64 h-24 flex items-center justify-center p-4 opacity-90 hover:opacity-100 transition-all duration-300 mx-6"
        >
          <img
            src={`/about-section/logo${num}.png`}
            alt={`Partner Logo Cloned ${num}`}
            className="max-w-full max-h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Description Text Footer */}
  <div className="container mx-auto px-6 lg:px-16 relative z-10 mt-16 text-center">
    <p className="text-stone-500 text-sm font-sans leading-relaxed max-w-2xl mx-auto">
      Innovation with a combined experience of 13 years, Arqtrace exclusively provides Lumani Schüco, Winda and Gebe products tailor made with innovation for ultimate customer satisfaction.
    </p>
  </div>

  {/* Optional: Standard CSS Keyframes Injection (Add to your global CSS or keep inline like this if needed) */}
  <style jsx global>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}</style>
</section>
    </>
  );
};

export default AboutContent;