"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Truck, ShieldCheck } from "lucide-react";
import Link from "next/link";

const GebeContent = () => {
  const WHY_CHOOSE_GEBE = [
    {
      title: "Superior Craftsmanship & Durability",
      desc: "GEBE outdoor furniture is built to stand the test of time. Crafted from high-quality, weather-resistant materials, each piece is designed to withstand UV rays, water damage, and tough outdoor conditions. As the best outdoor furniture company, we take pride in offering durable and stylish outdoor lawn furniture that keeps your space looking great season after season.",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Stylish & Ergonomic Designs",
      desc: "Our collections are thoughtfully crafted to suit every taste, featuring modern, classic, and customized styles. Designed with ergonomics in mind, our pieces promise maximum comfort, making every outdoor space warm, inviting, and effortlessly stylish. As the best outdoor furniture company, we take pride in offering premium outdoor patio furniture sets that transform your backyard into a true retreat.",
      image: "/project/p2/3.webp",
    },
    {
      title: "5-Year Warranty & Trusted Expertise",
      desc: "With 15 years of industry experience and a solid 5-year warranty, GEBE stands behind every piece of furniture we create. As the best outdoor furniture company, we are dedicated to delivering products that are not only stylish but also built to last. Whether it is our elegant garden furniture table and chairs or other outdoor essentials, you can trust GEBE to bring durability and timeless appeal to your outdoor space.",
      image: "/project/p1/4.webp",
    },
  ];

  const APPLICATIONS = [
    {
      title: "Residential Spaces",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2073&auto=format&fit=crop",
      desc: "Transform your outdoor spaces with premium furniture that perfectly blends comfort and elegance. Whether you are lounging, dining, or entertaining, GEBE offers outdoor patio furniture sets and stylish garden furniture table and chairs that bring timeless charm to your home. Designed to elevate your outdoor aesthetic, every piece is crafted to make your space as welcoming as it is beautiful.",
    },
    {
      title: "Commercial Properties",
      image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop",
      desc: "Hotels, resorts, and restaurants rely on GEBE for high-quality outdoor furniture that combines style, comfort, and durability. Our elegant outdoor patio furniture sets and sturdy outdoor lawn furniture are designed to enhance guest experiences by creating inviting spaces where comfort meets sophistication.",
    },
    {
      title: "Event Spaces",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
      desc: "GEBE outdoor furniture adds sophistication to events including weddings, corporate functions and social gatherings. Designed for both aesthetics and functionality, our outdoor furniture transforms any venue.",
    },
  ];

  const ADVANTAGES = [
    { title: "Premium Quality", desc: "High-grade weather-resistant materials ensure lasting durability." },
    { title: "Customizable Solutions", desc: "Tailored designs to suit unique outdoor settings." },
    { title: "Eco-Friendly Commitment", desc: "Sustainable materials and manufacturing processes reduce environmental impact." },
    { title: "Seamless Integration", desc: "Designs that complement various architectural and landscaping styles." },
  ];

  const WHY_ARQTRACE = [
    { title: "Expert Guidance", desc: "Our professionals assist in selecting the best furniture solutions.", icon: Users },
    { title: "Reliable Delivery", desc: "Timely efficient delivery and professional installation ensure hassle-free service.", icon: Truck },
    { title: "Exceptional Support", desc: "Dedicated after-sales service for complete customer satisfaction.", icon: ShieldCheck },
  ];

  return (
    <main>
      <section
        className="relative min-h-screen lg:min-h-162.5 w-full overflow-hidden flex items-center bg-[#2d1e18] select-none"
        style={{
          backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mk3yjJGoMeSGWZ6J/lumani-schuco-commercial-modern-indian-palace-Y4L8pOWxvNhBBx63.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-2 mb-5 mt-24 lg:mt-32">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">GEBE</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1] max-w-4xl mx-auto tracking-tight">
              Excellence in Outdoor Furniture Solutions
            </h1>
            <p className="text-stone-200 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed font-sans">
              GEBE is known as the best outdoor furniture company, offering premium outdoor pieces built for durability, style, and everyday functionality.
            </p>
            <div className="w-px h-12 bg-linear-to-b from-[#bd845c] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-white border-b border-stone-100 select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] block">Best Outdoor Furniture Company</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.1] tracking-tight">
                  Premium Outdoor Patio Furniture Sets for Every Space
                </h2>
              </div>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed font-sans max-w-xl">
                With 15 years of experience, we specialize in outdoor patio furniture sets, garden tables and chairs, and lawn furniture that stand strong against all weather conditions while elevating the beauty of your outdoor space. As the best outdoor furniture company, every item we create reflects innovation, expert craftsmanship, and lasting quality you can trust.
              </p>
              <div className="space-y-4 pt-2 pb-2 border-y border-stone-100">
                {[
                  "Superior Craftsmanship & Durability",
                  "Stylish & Ergonomic Designs",
                  "5-Year Warranty & Trusted Expertise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1 py-2">
                    <div className="w-10 h-10 rounded-full bg-[#fbf9f4] flex items-center justify-center shrink-0 border border-stone-100">
                      <CheckCircle className="w-5 h-5 text-[#bd845c]" />
                    </div>
                    <h3 className="text-[#2d1e18] font-serif font-bold text-sm md:text-base">{item}</h3>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex">
                <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <div className="lg:col-span-6 lg:order-1 relative">
              <div className="absolute -inset-4 bg-[#fbf9f4] -z-10 transform -rotate-1 translate-x-2" />
              <div className="overflow-hidden border border-stone-100 shadow-sm group bg-white">
                <img
                  src="/project/p1/2.webp"
                  alt="GEBE outdoor furniture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#fbf9f4] select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">GEBE</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight leading-tight">
              Why Choose GEBE for Outdoor Furniture?
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-28">
            {WHY_CHOOSE_GEBE.map((item, index) => (
              <div key={item.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-4/3 overflow-hidden border border-stone-200 bg-white shadow-md">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-[#bd845c] uppercase">Feature 0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2d1e18] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm md:text-base font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white select-none border-t border-stone-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Applications</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight">
              Applications of GEBE Outdoor Furniture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {APPLICATIONS.map((app) => (
              <div key={app.title} className="group bg-white flex flex-col h-full border border-stone-100 hover:border-stone-200 hover:shadow-xl transition-all duration-500">
                <div className="aspect-4/3 overflow-hidden bg-stone-100 relative">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#2d1e18]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-lg font-serif font-bold text-[#2d1e18] group-hover:text-[#bd845c] transition-colors duration-300">
                      {app.title}
                    </h3>
                    <p className="text-stone-500 text-xs font-sans leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#fbf9f6] select-none border-y border-stone-200/40">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Advantages</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight">
              The GEBE Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 shadow-sm overflow-hidden">
            {ADVANTAGES.map((adv, idx) => (
              <div key={adv.title} className="bg-white p-8 min-h-50 hover:bg-[#fbf9f4]/60 transition-colors duration-300">
                <span className="text-[10px] font-sans font-bold tracking-wider text-stone-400 block uppercase mb-4">Advantage // 0{idx + 1}</span>
                <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-3">{adv.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-24 lg:py-32 bg-linear-to-r from-[#2d1e18] to-[#3a2920] select-none">
        <div className="container mx-auto px-6 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Contact Us</span>
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-[1.15] max-w-4xl mx-auto">
            Contact Us for Premium Outdoor Furniture
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
            Transform your outdoor spaces with GEBE's exclusive range of outdoor patio furniture sets, outdoor lawn furniture and garden furniture tables and chairs.
          </p>
          <div className="flex flex-col gap-3 mb-10 text-white/90 text-sm md:text-base max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#bd845c]" />
              <span>Call us today to explore our collection and discuss your requirements.</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="w-5 h-5 text-[#bd845c]" />
              <span>Request a free quote and let us help you design the perfect outdoor setting.</span>
            </div>
          </div>
          <Link href="/contact" className="inline-flex">
            <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-10 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm mx-auto">
              Get In Touch
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default GebeContent;