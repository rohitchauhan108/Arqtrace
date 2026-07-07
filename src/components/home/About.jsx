"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-20 lg:py-24 bg-white select-none">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-6 flex flex-col gap-4">
              <div className="aspect-[4/5] overflow-hidden shadow-sm">
                <img src="/about-section/1.jpg" alt="Arqtrace premium aluminium window" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] overflow-hidden shadow-sm">
                <img src="/about-section/2.jpg" alt="Arqtrace premium door and partition" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="col-span-6">
              <div className="h-full min-h-[450px] lg:min-h-[550px] overflow-hidden shadow-sm">
                <img src="/about-section/3.jpg" alt="Arqtrace installation expertise" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex items-center gap-2 pt-1.5 shrink-0 [writing-mode:vertical-lr] rotate-180">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd845c]">About Us</span>
                <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                Arqtrace: In Brief
              </h2>
            </div>

            <p className="text-[#bd845c] font-semibold text-sm mb-4 font-sans tracking-wide">
              Premium aluminum and uPVC solutions for homes, projects, and outdoor spaces.
            </p>

            <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Arqtrace is an all-in-one solution for premium aluminum and UPVC windows, doors, partitions, and outdoor furniture. We strive to bring you nothing but the best quality of products for your everlasting home or your upcoming project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fbf9f4] flex items-center justify-center shrink-0 border border-stone-100">
                  <svg className="w-5 h-5 text-[#bd845c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 3h16v2H4V3zm2 4h12v3c0 2.21-1.79 4-4 4h-4c-2.21 0-4-1.79-4-4V7zm2 11h8v3H8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#2d1e18] font-serif font-bold text-sm mb-0.5">Aluminum & uPVC</h4>
                  <p className="text-stone-400 text-xs">Modern windows, doors, and partitions</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#fbf9f4] flex items-center justify-center shrink-0 border border-stone-100">
                  <svg className="w-5 h-5 text-[#bd845c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#2d1e18] font-serif font-bold text-sm mb-0.5">Outdoor Furniture</h4>
                  <p className="text-stone-400 text-xs">Stylish and durable for every exterior</p>
                </div>
              </div>
            </div>

            <div>
              <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm">
                Get In Touch
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;