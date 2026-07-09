"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const GebeContent = () => {
  const ADVANTAGES = [
    { title: "Premium Quality", desc: "High-grade weather-resistant materials ensure lasting durability" },
    { title: "Customizable Solutions", desc: "Tailored designs to fit unique outdoor settings" },
    { title: "Eco-Friendly Commitment", desc: "Sustainable materials and manufacturing reduce environmental impact" },
    { title: "Seamless Integration", desc: "Designs complement various architectural and landscaping styles" },
  ];

  const APPLICATIONS = [
    {
      title: "Residential Spaces",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop",
      desc: "Transform your outdoor spaces with premium furniture that perfectly blends comfort and elegance — whether lounging, dining, or entertaining, with outdoor patio furniture sets and stylish garden tables and chairs.",
    },
    {
      title: "Commercial Properties",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2073&auto=format&fit=crop",
      desc: "Hotels, resorts, and restaurants rely on Gebe for high-quality outdoor furniture that combines style, comfort, and durability, enhancing guest experiences.",
    },
    {
      title: "Event Spaces",
      image: "https://images.unsplash.com/photo-1494526585095-c4174bb9d643?q=80&w=2070&auto=format&fit=crop",
      desc: "Gebe outdoor furniture adds sophistication to events including weddings, corporate functions, and social gatherings, designed for both aesthetics and functionality.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:h-[600px] w-full bg-[#fbf9f4] overflow-hidden flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Gebe</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Premium Outdoor Furniture
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              With 15 years of experience, Gebe is known as the best outdoor furniture company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-20 lg:py-24 bg-white select-none">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
              <div className="col-span-6 flex flex-col gap-4">
                <div className="aspect-[4/5] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop" alt="Gebe patio furniture" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2073&auto=format&fit=crop" alt="Gebe garden furniture" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-6">
                <div className="h-full min-h-[450px] lg:min-h-[550px] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1494526585095-c4174bb9d643?q=80&w=2070&auto=format&fit=crop" alt="Gebe outdoor furniture" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center gap-2 pt-1.5 shrink-0 [writing-mode:vertical-lr] rotate-180">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd845c]">Outdoor</span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <div>
                  <p className="text-[#bd845c] font-semibold text-sm mb-2 font-sans tracking-wide">Best Outdoor Furniture</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">Why Choose Gebe?</h2>
                </div>
              </div>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                Gebe offers premium outdoor pieces built for durability, style, and everyday functionality, specializing in outdoor patio furniture sets, garden tables and chairs, and lawn furniture.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Superior Craftsmanship & Durability",
                  "Stylish & Ergonomic Designs",
                  "5-Year Warranty & Trusted Expertise",
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#fbf9f4] flex items-center justify-center shrink-0 border border-stone-100">
                        <CheckCircle className="w-5 h-5 text-[#bd845c]" />
                      </div>
                      <div>
                        <h4 className="text-[#2d1e18] font-serif font-bold text-sm">{item}</h4>
                      </div>
                    </div>
                ))}
              </div>
              <div>
                <Link href="/contact">
                  <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 lg:py-24 bg-[#fbf9f4]">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Applications</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">Where to Use Gebe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {APPLICATIONS.map((app, index) => (
                <div key={app.title} className="group">
                  <div className="aspect-[4/3] overflow-hidden mb-6 shadow-sm">
                    <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2d1e18] mb-3">{app.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{app.desc}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Advantages</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">The Gebe Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="bg-[#fbf9f4] p-8 rounded-lg border border-stone-100">
                <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-2">{adv.title}</h4>
                <p className="text-stone-500 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-[#2d1e18] to-[#3a2920]">
        <div className="container mx-auto px-4 lg:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Contact Us</span>
            <span className="w-3 h-3 bg-[#bd845c] inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-[1.15]">
            Get Gebe for Your Outdoor Space
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your spaces with Gebe's exclusive range of outdoor patio furniture sets, outdoor lawn furniture, and garden furniture tables and chairs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-[#bd845c]" />
              <span className="text-sm">Call us to explore our collection</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <CheckCircle className="w-5 h-5 text-[#bd845c]" />
              <span className="text-sm">Request a free quote</span>
            </div>
          </div>
          <Link href="/contact">
            <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-10 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm mx-auto">
              Get In Touch
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default GebeContent;
