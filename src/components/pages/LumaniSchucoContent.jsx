"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, ShieldCheck, Sliders, Layers, Eye } from "lucide-react";
import Link from "next/link";

const LumaniSchucoContent = () => {
  // State to handle the newly added Interactive Spec Viewer for Products
  const [activeSpecTab, setActiveSpecTab] = useState({});

  const ADVANTAGES = [
    { title: "German Engineering Excellence", desc: "Ensures precision and superior quality" },
    { title: "Customizable Solutions", desc: "To fit modern and traditional designs" },
    { title: "Sustainable and Energy-Efficient", desc: "Materials reduce carbon footprint and utility costs" },
    { title: "Unmatched Durability", desc: "With corrosion-resistant aluminum that withstands extreme weather" },
    { title: "10-Year Warranty", desc: "On all hardware and accessories for long-term reliability" },
    { title: "Customer Support", desc: "24/7 available to assist with any questions or issues" },
  ];

  const APPLICATIONS = [
    { title: "Residential Spaces", image: "/project/p1/2.webp", desc: "Upgrade your home with Lumani Schüco’s beautifully crafted Aluminum and glass windows and doors, designed to combine lasting durability with stunning aesthetics. Their energy-efficient features not only help regulate indoor temperatures but also reduce outside noise for a peaceful living space. As trusted Aluminum Door manufacturers, Lumani Schüco ensures each product enhances both security and style, creating a comfortable and safe environment for you and your family." },
    { title: "Commercial Buildings", image: "/project/p1/3.webp", desc: "For commercial projects, Lumani Schüco delivers strong and stylish solutions that perfectly balance design with durability. As leading Aluminum window manufacturers and Aluminum Door manufacturers, they provide products ideal for offices, retail spaces, and hotels. These windows and doors not only boost energy efficiency but also add a sleek, modern touch to any commercial building." },
    { title: "Luxury Projects", image: "/images/3.webp", desc: "Lumani Schüco is the go-to choice for upscale residences, villas, and luxury resorts. Renowned among top Aluminum window manufacturers and Aluminum Door manufacturers, their premium aluminum and glass solutions beautifully enhance architectural design while delivering outstanding performance. These products effortlessly combine luxury with durability to meet the highest standards in both style and functionality." },
  ];

  const WHY_ARQTRACE = [
    { title: "Expert Guidance", desc: "To help you select the best windows and doors for your needs", icon: Users },
    { title: "Timely Delivery", desc: "To keep your projects on schedule", icon: Clock },
    { title: "Unwavering Quality Assurance", desc: "As the exclusive provider of Lumani Schüco in India", icon: ShieldCheck },
  ];

  const PRODUCTS = [
    { 
      id: "win-perf",
      title: "High-Performance Aluminum Windows", 
      desc: "Lumani Schüco brings you Aluminum Windows and Doors that are thoughtfully designed for energy efficiency, strength, and long-lasting performance. With advanced insulation technology, they help maintain a comfortable indoor climate year-round. The sleek, slim profiles of these Aluminum and glass windows let in more natural light, creating bright, open spaces while offering excellent resistance to harsh weather conditions.", 
      image: "/project/p1/7.webp",
      specs: { profile: "75mm Depth", insulation: "Uf up to 0.92 W/(m²K)", glass: "Up to 52mm Triple Glazing", resistance: "Class 4 (EN 12207)" }
    },
    { 
      id: "door-prem",
      title: "Premium Aluminum Doors", 
      desc: "Lumani Schüco doors are the perfect blend of strength, style, and security—crafted to complement both modern and traditional spaces. As part of our premium range of Aluminum Windows and Doors, they offer exceptional durability and a sleek finish. Trusted among leading Aluminum Door manufacturers, Lumani Schüco designs feature robust construction and advanced locking systems, with customization options to suit any architectural vision.", 
      image: "/project/p2/1.webp",
      specs: { profile: "90mm Depth", insulation: "Ud up to 0.80 W/(m²K)", glass: "Integrated Smart Security", resistance: "RC2 / RC3 Certified" }
    },
    { 
      id: "glass-comb",
      title: "Aluminum and Glass Windows", 
      desc: "Lumani Schüco’s sleek Aluminum Windows and Doors bring a perfect mix of elegance and functionality to any setting. With double and triple glazing options, they offer excellent insulation to help lower energy bills. The UV-resistant glass protects interiors from sun damage while keeping spaces comfortable year-round. Recognized among top Aluminum window manufacturers, Lumani Schüco delivers contemporary designs that enhance both residential and commercial environments.", 
      image: "/images/2.webp",
      specs: { profile: "65mm Slimline", insulation: "Uf up to 1.1 W/(m²K)", glass: "UV-Shield Acoustic Laminate", resistance: "Class E900 Water Tightness" }
    },
  ];

  const toggleSpecTab = (productId, tab) => {
    setActiveSpecTab(prev => ({ ...prev, [productId]: tab }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[550px] lg:h-[650px] w-full bg-[#2d1e18] overflow-hidden flex items-center select-none">
        <div 
          className="absolute inset-0 opacity-100 scale-100 motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
          style={{ 
            backgroundImage: "url('/home/5.webp')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2d1e18] via-[#2d1e18]/50 to-transparent" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-2 mb-6 mt-40">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Lumani Schüco</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15] max-w-4xl mx-auto tracking-tight">
              Excellence in Aluminum <br className="hidden sm:inline" /> Windows & Doors
            </h1>
            <p className="text-stone-300 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed font-sans font-light">
              Lumani Schüco stands for exceptional craftsmanship and innovation in Aluminum Windows and Doors.
            </p>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#bd845c] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-24 lg:py-32 bg-white select-none border-b border-stone-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
            
            {/* Single Image */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-[#fbf9f4] -z-10 transform -rotate-1 translate-x-2" />
              <div className=" overflow-hidden border border-stone-100 shadow-xs group">
                <img src="/lumani.webp" alt="Lumani Schüco window" className="w-full h-full object-cover transform  transition-transform duration-500" />
              </div>
            </div>

            {/* Typography Right Deck */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] block">Premium Aluminum Solutions</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                  Why Choose Lumani Schüco?
                </h2>
              </div>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed font-sans">
                Lumani Schüco stands for exceptional craftsmanship and innovation in Aluminum Windows and Doors. As the exclusive provider, Arqtrace Pvt. Ltd. brings you premium solutions that combine durability, security, and timeless design. Engineered with precision and backed by cutting-edge German technology, Lumani Schüco's Aluminum Windows and Doors are crafted to elevate modern architecture with unmatched quality and elegance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-stone-100">
                {[
                  "High-Performance Aluminum Windows",
                  "Premium Aluminum Doors",
                  "Aluminum & Glass Windows",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#bd845c] shrink-0" />
                    <span className="text-[#2d1e18] font-sans font-medium text-xs tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-6 rounded-none text-xs font-sans font-bold tracking-widest uppercase flex items-center gap-4 transition-all duration-300 group shadow-md hover:-translate-y-0.5">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Layout (Enhanced with Technical Specs Switcher) */}
      <section className="py-24 lg:py-32 bg-[#fbf9f6] select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Products Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight leading-tight">
              Why Choose Lumani Schüco Aluminum Windows and Doors
            </h2>
          </div>

          <div className="space-y-32">
            {PRODUCTS.map((product, index) => {
              const currentTab = activeSpecTab[product.id] || "overview";
              return (
                <div 
                  key={product.id} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
                >
                  {/* Media Frame Window */}
                  <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''} sticky top-6`}>
                    <div className="aspect-[16/11] sm:aspect-[4/3] overflow-hidden border border-stone-200 p-2 bg-white shadow-md group">
                      <div className="w-full h-full overflow-hidden relative">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className={`w-full h-full object-cover transform transition-all duration-700 ease-out ${currentTab === 'specs' ? 'scale-102 blur-xs brightness-90' : 'group-hover:scale-104'}`} 
                        />
                        {/* Dynamic Layered Specs Overlay when clicked */}
                        {currentTab === "specs" && (
                          <div className="absolute inset-0 bg-[#2d1e18]/80 flex flex-col justify-center p-8 text-white backdrop-blur-xs animate-fadeIn">
                            <span className="text-[10px] uppercase font-sans tracking-widest text-[#bd845c] font-bold mb-4">// System Engineering Diagnostics</span>
                            <div className="grid grid-cols-2 gap-6 text-left">
                              <div>
                                <p className="text-stone-400 text-[10px] uppercase tracking-wider font-sans">Profile Build</p>
                                <p className="font-serif text-sm font-semibold text-stone-100">{product.specs.profile}</p>
                              </div>
                              <div>
                                <p className="text-stone-400 text-[10px] uppercase tracking-wider font-sans">Thermal Insulation</p>
                                <p className="font-serif text-sm font-semibold text-stone-100">{product.specs.insulation}</p>
                              </div>
                              <div>
                                <p className="text-stone-400 text-[10px] uppercase tracking-wider font-sans">Glazing Bounds</p>
                                <p className="font-serif text-sm font-semibold text-stone-100">{product.specs.glass}</p>
                              </div>
                              <div>
                                <p className="text-stone-400 text-[10px] uppercase tracking-wider font-sans">Structural Load Rating</p>
                                <p className="font-serif text-sm font-semibold text-stone-100">{product.specs.resistance}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Copy Deck content with dynamic interactive tabs */}
                  <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                      <span className="text-[11px] font-sans font-bold tracking-widest text-[#bd845c] uppercase">System 0{index + 1}</span>
                      
                      {/* Technical Interaction Controls */}
                      <div className="flex gap-2 bg-stone-200/50 p-1 border border-stone-200/40 rounded-none">
                        <button 
                          onClick={() => toggleSpecTab(product.id, "overview")}
                          className={`px-3 py-1 text-[10px] uppercase font-sans font-bold tracking-wider transition-all flex items-center gap-1.5 ${currentTab === 'overview' ? 'bg-[#bd845c] text-white shadow-xs' : 'text-stone-600 hover:text-[#2d1e18]'}`}
                        >
                          <Eye className="w-3 h-3" /> Overview
                        </button>
                        <button 
                          onClick={() => toggleSpecTab(product.id, "specs")}
                          className={`px-3 py-1 text-[10px] uppercase font-sans font-bold tracking-wider transition-all flex items-center gap-1.5 ${currentTab === 'specs' ? 'bg-[#bd845c] text-white shadow-xs' : 'text-stone-600 hover:text-[#2d1e18]'}`}
                        >
                          <Sliders className="w-3 h-3" /> Technical Datasheet
                        </button>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2d1e18] tracking-tight">{product.title}</h3>
                    
                    {currentTab === "overview" ? (
                      <p className="text-stone-500 text-sm md:text-base font-sans leading-relaxed transition-all duration-300">
                        {product.desc}
                      </p>
                    ) : (
                      <div className="space-y-4 pt-2 transition-all duration-300">
                        <p className="text-stone-500 text-sm font-sans italic">Showing precise performance measurements certified under architectural glass & profile safety norms.</p>
                        <div className="bg-white border border-stone-200/80 p-4 space-y-2 font-sans text-xs text-[#2d1e18]">
                          <div className="flex justify-between py-1.5 border-b border-stone-50">
                            <span className="text-stone-400 font-medium">System Dimension Frame</span>
                            <span className="font-bold">{product.specs.profile}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-stone-50">
                            <span className="text-stone-400 font-medium">Thermal Performance Metric</span>
                            <span className="font-bold">{product.specs.insulation}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-stone-50">
                            <span className="text-stone-400 font-medium">Max Glass Capacity</span>
                            <span className="font-bold">{product.specs.glass}</span>
                          </div>
                          <div className="flex justify-between py-1.5">
                            <span className="text-stone-400 font-medium">Wind/Water Structural Class</span>
                            <span className="font-bold">{product.specs.resistance}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 lg:py-32 bg-white select-none border-t border-stone-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Applications</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight">
              Applications of Lumani Schüco Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {APPLICATIONS.map((app) => (
              <div key={app.title} className="group bg-white flex flex-col h-full border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-stone-100 relative">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#2d1e18]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif font-bold text-[#2d1e18] group-hover:text-[#bd845c] transition-colors duration-300">
                      {app.title}
                    </h3>
                    <p className="text-stone-500 text-xs font-sans leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-500">
                      {app.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Structural Grid Layout */}
      <section className="py-24 lg:py-32 bg-[#fbf9f6] select-none border-y border-stone-200/40">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Advantages</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight">
              The Lumani Schüco Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm overflow-hidden">
            {ADVANTAGES.map((adv, idx) => (
              <div 
                key={idx} 
                className="bg-white p-10 flex flex-col justify-between min-h-[200px] hover:bg-[#fbf9f4]/50 transition-colors duration-300 relative group"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-sans font-bold tracking-wider text-stone-400 block uppercase">Feature // 0{idx + 1}</span>
                  <h4 className="text-lg font-serif font-bold text-[#2d1e18] group-hover:text-[#bd845c] transition-colors duration-300">
                    {adv.title}
                  </h4>
                  <p className="text-stone-500 text-xs font-sans leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
};

export default LumaniSchucoContent;