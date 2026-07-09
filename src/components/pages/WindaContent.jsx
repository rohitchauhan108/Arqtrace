"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

const WindaContent = () => {
  const ADVANTAGES = [
    { title: "13 Years of Expertise", desc: "Delivering high-performance uPVC solutions" },
    { title: "21-Year Warranty", desc: "Unmatched reliability and durability" },
    { title: "Energy-Efficient Designs", desc: "Reducing heating and cooling costs" },
    { title: "Eco-Friendly Materials", desc: "Contributing to sustainable living" },
    { title: "Advanced Manufacturing", desc: "Technology ensures precision and longevity" },
  ];

  const APPLICATIONS = [
    {
      title: "Residential Spaces",
      image: "https://images.unsplash.com/photo-1600585152220-56d1d8cf4f1f?q=80&w=2070&auto=format&fit=crop",
      desc: "Transform your home with energy-efficient uPVC windows and sliding doors that provide excellent insulation, reduce outside noise, and combine smart functionality with modern design.",
    },
    {
      title: "Commercial Buildings",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      desc: "Durable and stylish uPVC Windows & Doors perfect for offices, retail, and hotels, maximizing natural light and creating bright, welcoming environments.",
    },
    {
      title: "Large-Scale Projects",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      desc: "Trusted by architects and developers for luxury villas, hotels, and apartment complexes, balancing quality, performance, and sleek modern design.",
    },
  ];

  const FEATURES = [
    { title: "Precision-Engineered uPVC Windows", points: ["Thermal insulation", "Advanced noise reduction", "Low-maintenance materials"] },
    { title: "Premium uPVC Doors & Windows", points: ["Weather-resistant", "Secure multi-point locking", "Customizable designs"] },
    { title: "uPVC Sliding Doors", points: ["Effortless sliding", "Space-saving design", "Double-glazed options"] },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:h-[600px] w-full bg-[#fbf9f4] overflow-hidden flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753086-002672e4c993?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Winda</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Excellence in uPVC Windows & Doors
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              With over 13 years of experience, Winda has earned its place as one of the most trusted uPVC doors and windows suppliers.
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
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop" alt="Winda window" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[4/3] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1600585152220-56d1d8cf4f1f?q=80&w=2070&auto=format&fit=crop" alt="Winda door" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-6">
                <div className="h-full min-h-[450px] lg:min-h-[550px] overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1600566753086-002672e4c993?q=80&w=2070&auto=format&fit=crop" alt="Winda installation" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center gap-2 pt-1.5 shrink-0 [writing-mode:vertical-lr] rotate-180">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd845c]">Trusted</span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <div>
                  <p className="text-[#bd845c] font-semibold text-sm mb-2 font-sans tracking-wide">Trusted uPVC Solutions</p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">Why Choose Winda?</h2>
                </div>
              </div>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                We specialize in crafting high-quality, stylish, and energy-efficient uPVC solutions designed to elevate modern living spaces, backed by an impressive 21-year warranty.
              </p>
              <div className="space-y-6 mb-10">
                {FEATURES.map((feature, idx) => (
                    <div key={idx} className="p-6 bg-[#fbf9f4] border border-stone-100 rounded-lg">
                      <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-4">{feature.title}</h4>
                      <div className="space-y-3">
                        {feature.points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-[#bd845c] flex-shrink-0" />
                              <span className="text-sm text-stone-600">{point}</span>
                            </div>
                        ))}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">Where to Use Winda</h2>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">The Winda Advantage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Get Winda for Your Project
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of innovation, durability, and style with Winda.
          </p>
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

export default WindaContent;
