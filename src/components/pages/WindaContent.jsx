"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

const WindaContent = () => {
  const ADVANTAGES = [
    { title: "13 Years of Expertise", desc: "In delivering high-performance uPVC solutions." },
    { title: "21-Year Warranty", desc: "Ensures unmatched reliability and durability." },
    { title: "Energy-Efficient Designs", desc: "Reduce heating and cooling costs." },
    { title: "Eco-Friendly Materials", desc: "Contribute to sustainable living." },
    { title: "Advanced Manufacturing Technology", desc: "Guarantees precision and longevity." },
  ];

  const APPLICATIONS = [
    {
      title: "Residential Spaces",
      image: "https://images.unsplash.com/photo-1600585152220-56d1d8cf4f1f?q=80&w=2070&auto=format&fit=crop",
      desc: "Transform your home with energy-efficient uPVC windows and sliding doors that provide excellent insulation and reduce outside noise, creating a more peaceful and comfortable space. As one of the leading uPVC doors and windows suppliers, Winda combines smart functionality with modern design to enhance both the look and feel of your living environment.",
    },
    {
      title: "Commercial Properties",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      desc: "From modern office spaces to vibrant retail outlets, Winda delivers durable and stylish uPVC Windows and Doors designed to meet the unique needs of commercial spaces. Our sleek sliding doors help maximize natural light, creating bright and welcoming environments. As trusted uPVC doors and windows suppliers, we focus on blending performance with aesthetics to bring your commercial vision to life.",
    },
    {
      title: "Large-Scale Projects",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
      desc: "Architects and developers trust Winda for large-scale projects ranging from luxury villas to hotels and apartment complexes. Our comprehensive range of uPVC Windows and Doors ensures a perfect balance of quality, performance, and design. With solutions like the uPVC windows sliding door, we help bring in natural light while maintaining a sleek, modern aesthetic across every build.",
    },
  ];

  const WHY_ARQTRACE = [
    { title: "Expert Consultation", desc: "To help choose the perfect windows and doors.", icon: Users },
    { title: "Professional Installation", desc: "Ensures flawless integration into any space.", icon: Clock },
    { title: "Dedicated After-Sales Support", desc: "For long-term customer satisfaction.", icon: ShieldCheck },
  ];

  const PRODUCTS = [
    { 
      title: "Precision-Engineered uPVC Windows", 
      desc: "As a leading uPVC window manufacturer Winda delivers superior-quality windows designed to enhance indoor comfort. Thermal insulation ensures energy efficiency by maintaining optimal indoor temperatures. Advanced noise reduction creates a peaceful environment. Low-maintenance materials guarantee long-lasting durability.",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d68bf97?q=80&w=2073&auto=format&fit=crop" 
    },
    { 
      title: "Premium uPVC Doors and Windows", 
      desc: "Winda offers a diverse range of uPVC doors and windows combining functionality with sophisticated design. Weather-resistant materials ensure performance in all climates. Secure multi-point locking systems provide enhanced safety. Customizable designs suit various architectural styles.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1974&auto=format&fit=crop" 
    },
    { 
      title: "uPVC Sliding Doors for Modern Spaces", 
      desc: "Our uPVC sliding doors are designed for seamless indoor-outdoor transitions offering a contemporary touch to any space. Effortless sliding mechanisms for smooth operation. Space-saving design ideal for compact areas. Double-glazed options for superior energy efficiency.",
      image: "https://images.unsplash.com/photo-1600566753086-002672e4c993?q=80&w=2070&auto=format&fit=crop" 
    },
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
              Winda Excellence in uPVC Windows and Doors
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
                With over 13 years of experience, Winda has earned its place as one of the most trusted uPVC doors and windows suppliers in the industry. We specialize in crafting high-quality, stylish, and energy-efficient uPVC solutions designed to elevate modern living spaces. Whether it’s for a cozy home or a large-scale commercial project, our doors and windows are built to last — backed by an impressive 21-year warranty. As reliable uPVC doors and windows suppliers, Winda is committed to delivering products that combine durability, aesthetics, and long-term performance.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Precision-Engineered uPVC Windows",
                  "Premium uPVC Doors and Windows",
                  "uPVC Sliding Doors for Modern Spaces",
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

      {/* Products Section */}
      <section className="py-20 lg:py-24 bg-[#fbf9f4]">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Products</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">Why Choose Winda for uPVC Windows and Doors</h2>
          </div>
          <div className="space-y-16">
            {PRODUCTS.map((product, index) => (
              <div key={product.title} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:col-span-6">
                  <div className="aspect-[4/3] overflow-hidden shadow-sm">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2d1e18] mb-4">{product.title}</h3>
                  <p className="text-stone-500 text-sm md:text-base leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Applications</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">Applications of Winda uPVC Solutions</h2>
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
      <section className="py-20 lg:py-24 bg-[#fbf9f4]">
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
              <div key={idx} className="bg-white p-8 rounded-lg border border-stone-100">
                <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-2">{adv.title}</h4>
                <p className="text-stone-500 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Arqtrace Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Why Arqtrace</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18]">Why Choose Arqtrace Pvt. Ltd. for Winda Solutions?</h2>
            <p className="text-stone-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Arqtrace Pvt. Ltd. is committed to delivering excellence in uPVC solutions offering end-to-end services from selection to installation.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {WHY_ARQTRACE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#fbf9f4] p-8 rounded-lg border border-stone-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#bd845c]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#bd845c]" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              );
            })}
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
            Elevate Your Space with Winda uPVC Windows and Doors
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of innovation, durability, and style with Winda. Whether you're upgrading a home or designing a commercial space, our high-quality uPVC Windows and Doors offer lasting performance and modern appeal. From sleek uPVC windows sliding door options to elegant window designs, we help bring your vision to life. Get in touch with Arqtrace Pvt. Ltd. today and discover the difference in premium uPVC solutions.
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
