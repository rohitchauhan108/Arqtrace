"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Users, Award } from "lucide-react";

const AboutContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] lg:min-h-[650px] w-full overflow-hidden flex items-center select-none"
        style={{
          backgroundImage: "url('/images/10.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
                About Us
              </span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15] tracking-tight max-w-4xl mx-auto">
              Discover the Arqtrace Difference
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Story Block Section */}
      <section className="relative py-24 lg:py-32 bg-white select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Image Multi-Grid Frame (2x2 Layout) */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 auto-rows-fr">
              <div className="aspect-[4/5] sm:aspect-square overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                <img
                  src="/images/6.webp"
                  alt="Arqtrace premium aluminium window"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] sm:aspect-square overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                <img
                  src="/images/8.webp"
                  alt="Arqtrace installation expertise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] sm:aspect-square overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                <img
                  src="/images/7.webp"
                  alt="Arqtrace premium door and partition"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] sm:aspect-square overflow-hidden shadow-md border border-stone-100 bg-stone-50">
                {/* Placeholder or 4th image to balance the 2x2 grid */}
                <img
                  src="/images/9.webp"
                  alt="Arqtrace outdoor furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Story Text Column Content */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] whitespace-nowrap">
                    Our Story
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  Our Story, Our Vision
                </h2>
              </div>

              <div className="space-y-4 max-w-xl">
                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-sans">
                  Arqtrace is a growing design-and-build partner for premium
                  architectural solutions, bringing together expertise in
                  aluminium, uPVC, partitions, and outdoor living. Our journey
                  is shaped by a simple belief: every space deserves products
                  that are beautiful, durable, and thoughtfully crafted.
                </p>

                <p className="text-stone-500 text-sm md:text-base leading-relaxed font-sans">
                  We are proud to bring together three specialized identities
                  under one vision — Lumani Schuco for aluminium doors and
                  windows, Winda for uPVC solutions, and Gebe for outdoor
                  furniture. Together, they allow us to offer complete solutions
                  for modern homes, villas, offices, and hospitality spaces with
                  quality, innovation, and long-term value.
                </p>

                <ul className="space-y-2 text-sm md:text-base text-stone-500 leading-relaxed font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#bd845c] mt-1">•</span>
                    <span>
                      Premium aluminium and uPVC windows, doors, and partitions
                      for contemporary spaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bd845c] mt-1">•</span>
                    <span>
                      Elegant outdoor furniture designed for comfort,
                      durability, and lifestyle living.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#bd845c] mt-1">•</span>
                    <span>
                      Expert guidance and professional installation backed by
                      dependable quality standards.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Link href="/contact">
                  <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-all duration-300 group shadow-md hover:shadow-lg">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
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
          backgroundBlendMode: "overlay",
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
              How Arqtrace Works
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
                    src="/images/4.webp"
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
                  We bring you the highest-quality aluminum windows, doors, uPVC
                  solutions, and outdoor furniture for lasting performance and
                  refined aesthetics.
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
                    src="/images/3.webp"
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
                  Proven Expertise & Heritage
                </h3>
                <p className="text-stone-500 text-xs font-sans leading-relaxed">
                  13+ years of combined experience, 600+ projects delivered.
                  Arqtrace operates Lumani Schuco, Winda, and Gebe—complete
                  solutions across aluminium, uPVC, partitions, and outdoor
                  spaces.
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
                    src="/images/1.webp"
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
                  Our team offers expert consultation and seamless installation,
                  ensuring a smooth experience from selection to finishing.
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
                    src="/images/5.webp"
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
                  With up to 10 years of warranty on select products, we
                  guarantee solutions that stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats, Solutions & Metrics Block Section */}
      <section
        className="py-24 lg:py-32  select-none border-t border-stone-100"
        style={{ background: "url(/bg-pattern.png)" }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Collage Images Panel with Floating Box */}
            <div className="lg:col-span-6 relative grid grid-cols-12 gap-4 items-center">
              <div className="col-span-8 relative z-10">
                <div className=" overflow-hidden shadow-xl border border-stone-200/20 bg-stone-100">
                  <img
                    src="/project/p1/3.webp"
                    alt="Modern clean luxury home architecture interior layout"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              <div className="col-span-6 absolute -right-4 bottom-8 z-0">
                <div className=" overflow-hidden shadow-lg border border-stone-200/30 bg-stone-100">
                  <img
                    src="/project/p1/2.webp"
                    alt="Premium custom minimalist window profiles frame installation"
                    className="w-full h-full object-cover grayscale-[15%]"
                  />
                </div>
              </div>

              {/* Years Experience Geometric Overlay Card Box */}
              <div className="absolute bottom-16 -left-6 bg-[#bd845c] p-6 text-white shadow-2xl flex items-center gap-4 border border-white/10 z-20 transition-transform duration-500 hover:scale-105">
                <h2 className="text-4xl md:text-5xl font-serif font-black tracking-tight leading-none border-r border-white/20 pr-4">
                  14+
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
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] whitespace-nowrap">
                    Why Choose Us
                  </span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  We Provide Reliable Solutions
                </h2>
              </div>

              <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xl font-sans">
                ARQTRACE PVT LTD takes pride in its unwavering commitment to
                customer satisfaction. Our experienced team is here to guide you
                through the selection process, ensuring that you find the
                perfect windows, doors, and outdoor furniture to meet your
                specific needs.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-stone-200/60 pt-8 max-w-md">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#bd845c]">
                    <Users className="w-4 h-4 stroke-[2]" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400">
                      Brand Partners
                    </span>
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
                    10Y
                  </div>
                </div>
              </div>

              <div className="rounded-none border border-stone-200 bg-stone-50 p-6 text-sm text-stone-600 shadow-sm">
                <p className="font-serif font-semibold text-[#2d1e18] mb-2">
                  ARQTRACE PVT. LTD.
                </p>
                <p>
                  First Floor, Durga Tower, GMS Road, Dehradun-248001,
                  Uttarakhand
                </p>
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
                Our Projects
              </span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#2d1e18] tracking-tight">
              Trusted by Leading Clients
            </h2>
            <p className="text-stone-500 text-base font-sans max-w-2xl mt-2">
              From hospitality to commercial spaces, Arqtrace delivers premium
              solutions for India's most trusted brands.
            </p>
          </div>
        </div>

        {/* CSS Infinite Loop Marquee container */}
        <div className="w-full relative flex overflow-x-hidden border-y border-stone-200/50 bg-white/0 py-8 backdrop-blur-xs">
          {/* Gradient Fades for Smooth Side Edges */}
          <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-[#fbf9f4] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-[#fbf9f4] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track 1 */}
          <div
            className="flex gap-16 items-center shrink-0 whitespace-nowrap px-6"
            style={{ animation: "marquee 25s linear infinite", willChange: "transform" }}
          >
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
              <div
                key={`track1-${idx}`}
                className="w-72 lg:w-80 h-36 flex items-center justify-center p-6 mx-6 bg-white rounded-lg shadow-md border border-stone-100"
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
          <div
            className="flex gap-16 items-center shrink-0 whitespace-nowrap px-6"
            style={{ animation: "marquee 25s linear infinite", willChange: "transform" }}
            aria-hidden="true"
          >
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((num, idx) => (
              <div
                key={`track2-${idx}`}
                className="w-72 lg:w-80 h-36 flex items-center justify-center p-6 mx-6 bg-white rounded-lg shadow-md border border-stone-100"
              >
                <img
                  src={`/about-section/logo${num}.png`}
                  alt={`Partner Logo Cloned ${num}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description Text Footer */}
        <div className="container mx-auto px-6 lg:px-16 relative z-10 mt-16 text-center">
          <p className="text-stone-600 text-base font-sans leading-relaxed max-w-3xl mx-auto">
            With proven expertise across luxury hospitality, commercial spaces,
            and residential projects, Arqtrace partners with prestigious brands
            to bring premium architecture to life.
          </p>
        </div>

        {/* Optional: Standard CSS Keyframes Injection (Add to your global CSS or keep inline like this if needed) */}
        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutContent;
