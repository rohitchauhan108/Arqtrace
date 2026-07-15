"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

const WindaContent = () => {
  const PRODUCT_SECTIONS = [
    {
      title: "Precision-Engineered uPVC Windows",
      desc: "As a leading uPVC window manufacturer, Winda delivers superior-quality windows designed to enhance indoor comfort.",
      points: [
        "Thermal insulation ensures energy efficiency by maintaining optimal indoor temperatures.",
        "Advanced noise reduction creates a peaceful environment.",
        "Low-maintenance materials guarantee long-lasting durability.",
      ],
      image: "/project/p1/4.webp",
    },
    {
      title: "Premium uPVC Doors and Windows",
      desc: "Winda offers a diverse range of uPVC doors and windows combining functionality with sophisticated design.",
      points: [
        "Weather-resistant materials ensure performance in all climates.",
        "Secure multi-point locking systems provide enhanced safety.",
        "Customizable designs suit various architectural styles.",
      ],
      image: "/project/p1/5.webp",
    },
    {
      title: "uPVC Sliding Doors for Modern Spaces",
      desc: "Our uPVC sliding doors are designed for seamless indoor-outdoor transitions, offering a contemporary touch to any space.",
      points: [
        "Effortless sliding mechanisms for smooth operation.",
        "Space-saving design ideal for compact areas.",
        "Double-glazed options for superior energy efficiency.",
      ],
      image: "/images/1.webp",
    },
  ];

  const APPLICATIONS = [
    { title: "Residential Spaces", image: "/project/p1/2.webp", desc: "Upgrade your home with Lumani Schüco’s beautifully crafted Aluminum and glass windows and doors, designed to combine lasting durability with stunning aesthetics. Their energy-efficient features not only help regulate indoor temperatures but also reduce outside noise for a peaceful living space. As trusted Aluminum Door manufacturers, Lumani Schüco ensures each product enhances both security and style, creating a comfortable and safe environment for you and your family." },
    { title: "Commercial Buildings", image: "/project/p1/3.webp", desc: "For commercial projects, Lumani Schüco delivers strong and stylish solutions that perfectly balance design with durability. As leading Aluminum window manufacturers and Aluminum Door manufacturers, they provide products ideal for offices, retail spaces, and hotels. These windows and doors not only boost energy efficiency but also add a sleek, modern touch to any commercial building." },
    { title: "Luxury Projects", image: "/images/3.webp", desc: "Lumani Schüco is the go-to choice for upscale residences, villas, and luxury resorts. Renowned among top Aluminum window manufacturers and Aluminum Door manufacturers, their premium aluminum and glass solutions beautifully enhance architectural design while delivering outstanding performance. These products effortlessly combine luxury with durability to meet the highest standards in both style and functionality." },
  ];


  const ADVANTAGES = [
    { title: "13 Years of Expertise", desc: "In delivering high-performance uPVC solutions." },
    { title: "21-Year Warranty", desc: "Ensures unmatched reliability and durability." },
    { title: "Energy-Efficient Designs", desc: "Reduce heating and cooling costs." },
    { title: "Eco-Friendly Materials", desc: "Contribute to sustainable living." },
    { title: "Advanced Manufacturing Technology", desc: "Guarantees precision and longevity." },
  ];

  const WHY_ARQTRACE = [
    { title: "Expert Consultation", desc: "To help choose the perfect windows and doors.", icon: Users },
    { title: "Professional Installation", desc: "Ensures flawless integration into any space.", icon: Clock },
    { title: "Dedicated After-Sales Support", desc: "For long-term customer satisfaction.", icon: ShieldCheck },
  ];

  return (
    <main>
      <section
        className="relative min-h-screen lg:min-h-162.5 w-full overflow-hidden flex items-center bg-[#2d1e18] select-none"
        style={{
          backgroundImage: "url('/images/4.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/65" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-2 mb-5 mt-24 lg:mt-32">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Winda</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.1] max-w-4xl mx-auto tracking-tight">
              Excellence in uPVC Windows & Doors
            </h1>
            <p className="text-stone-200 text-sm md:text-base mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
              Winda Excellence in uPVC Windows and Doors
            </p>
            <div className="w-px h-12 bg-linear-to-b from-[#bd845c] to-transparent mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-white border-b border-stone-100 select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] block">Trusted uPVC Solutions</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.1] tracking-tight">
                  Premium uPVC Windows and Doors for Modern Living
                </h2>
              </div>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed font-sans max-w-xl">
                With over 13 years of experience, Winda has earned its place as one of the most trusted uPVC doors and windows suppliers in the industry. We specialize in crafting high-quality, stylish, and energy-efficient uPVC solutions designed to elevate modern living spaces. Whether it’s for a cozy home or a large-scale commercial project, our doors and windows are built to last, backed by an impressive 21-year warranty. As reliable uPVC doors and windows suppliers, Winda is committed to delivering products that combine durability, aesthetics, and long-term performance.
              </p>

              <div className="space-y-4 pt-2 pb-2 border-y border-stone-100">
                {[
                  "Precision-Engineered uPVC Windows",
                  "Premium uPVC Doors and Windows",
                  "uPVC Sliding Doors for Modern Spaces",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 py-2">
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

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 bg-[#fbf9f4] -z-10 transform -rotate-1 translate-x-2" />
              <div className="overflow-hidden border border-stone-100 shadow-sm group bg-white">
                <img
                  src="/winda.webp"
                  alt="Winda uPVC Windows and Doors"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#fbf9f4] select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Products</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight leading-tight">
              Why Choose Winda for uPVC Windows and Doors
            </h2>
          </div>

          <div className="space-y-24 lg:space-y-28">
            {PRODUCT_SECTIONS.map((product, index) => (
              <div key={product.title} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-4/3 overflow-hidden border border-stone-200 bg-white shadow-md">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-sans font-bold tracking-[0.4em] text-[#bd845c] uppercase">System 0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2d1e18] tracking-tight">
                    {product.title}
                  </h3>
                  <p className="text-stone-500 text-sm md:text-base font-sans leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="space-y-3 pt-2">
                    {product.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#bd845c] shrink-0 mt-0.5" />
                        <p className="text-stone-500 text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
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
              Applications of Winda uPVC Solutions
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
              The Winda Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm overflow-hidden">
            {ADVANTAGES.map((adv, idx) => (
              <div key={adv.title} className="bg-white p-10 min-h-50 hover:bg-[#fbf9f4]/60 transition-colors duration-300">
                <span className="text-[10px] font-sans font-bold tracking-wider text-stone-400 block uppercase mb-4">Feature // 0{idx + 1}</span>
                <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-3">{adv.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Why Arqtrace</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight">
              Why Choose Arqtrace Pvt. Ltd. for Winda Solutions?
            </h2>
            <p className="text-stone-500 text-sm md:text-base mt-4 leading-relaxed">
              Arqtrace Pvt. Ltd. is committed to delivering excellence in uPVC solutions offering end-to-end services from selection to installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_ARQTRACE.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-[#fbf9f4] p-8 rounded-lg border border-stone-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#bd845c]/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-[#bd845c]" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
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
            Elevate Your Space with Winda uPVC Windows and Doors
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of innovation, durability, and style with Winda. Whether you're upgrading a home or designing a commercial space, our high-quality uPVC Windows and Doors offer lasting performance and modern appeal. From sleek uPVC windows sliding door options to elegant window designs, we help bring your vision to life. Get in touch with Arqtrace Pvt. Ltd. today and discover the difference in premium uPVC solutions.
          </p>
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

export default WindaContent;