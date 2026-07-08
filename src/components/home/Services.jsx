"use client";

import { ArrowRight, DoorOpen, Layout, ShieldAlert, Sofa } from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: <DoorOpen className="w-10 h-10 stroke-[1.2]" />,
    title: "Aluminum Windows",
    description: "Premium aluminum window systems designed for durability, refined aesthetics, and lasting performance in both modern homes and commercial spaces.",
    image: "/home/1.webp",
  },
  {
    icon: <Layout className="w-10 h-10 stroke-[1.2]" />,
    title: "UPVC Windows & Doors",
    description: "Energy-efficient and low-maintenance products that bring comfort, insulation, and elegance to every project.",
    image: "/home/4.webp",
  },
  {
    icon: <ShieldAlert className="w-10 h-10 stroke-[1.2]" />,
    title: "Partitions & Glazing",
    description: "Contemporary partition solutions and glass systems tailored to create bright, open, and functional interiors.",
    image: "/about-section/3.jpg",
  },
  {
    icon: <Sofa className="w-10 h-10 stroke-[1.2]" />,
    title: "Outdoor Furniture",
    description: "Premium outdoor furniture pieces that merge comfort and craftsmanship for elegant terrace, garden, and hospitality spaces.",
    image: "/home/5.webp",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/services-bg.png')" }}>
      <div className="absolute inset-0 bg-stone-50/90 z-0" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bd845c]">Services</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
              Premium Products for Every<br /> Window, Door & Space
            </h2>
          </div>

          <div>
            <Button className="border border-stone-300 hover:border-[#bd845c] text-[#2d1e18] hover:text-[#bd845c] bg-transparent hover:bg-transparent rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 group">
              Explore More
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-none p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:bg-[#bd845c] transition-all duration-500 ease-out flex flex-col justify-between h-full min-h-[460px] border border-stone-200/40 relative">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-stone-50">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute top-3 right-3 text-[#bd845c]/20 group-hover:text-white/40 transition-colors">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#2d1e18] mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-stone-100 group-hover:border-white/20 transition-colors">
                <a href="#" className="inline-flex items-center justify-between w-full font-sans font-bold text-xs uppercase tracking-widest text-stone-400 group-hover:text-white transition-colors duration-300">
                  <span>Discover More</span>
                  <div className="w-8 h-8 rounded-full border border-stone-200 group-hover:border-white group-hover:bg-white group-hover:text-[#bd845c] flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;