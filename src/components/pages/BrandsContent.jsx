"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Leaf, Check } from "lucide-react";
import Link from "next/link";

const BrandsContent = () => {
  const BRANDS_DATA = [
    {
      name: "Lumani Schüco",
      subtitle: "Premium Aluminum Windows & Doors",
      description:
        "SCHUCO is a global leader in window systems, founded in 1951 and headquartered in Bielefeld, Germany, with a presence in over 80 countries worldwide. Lumani is the first and premier partner of SCHUCO in India, bringing German engineering excellence to the Indian market. With over 12 years of industry expertise, Lumani SCHUCO products combine precision engineering with modern aesthetics, offering advanced thermal insulation, noise reduction, and enhanced security features. SCHUCO manufactures premium raw materials while Lumani delivers these high-end solutions to homeowners and builders. Every product is backed by a 10-year warranty on all hardware and accessories, making Lumani SCHUCO a trusted choice for contemporary homes and commercial spaces.",
      image: "/brand/lumani.webp",
      href: "/lumani-schuco",
      features: ["German Engineering", "10-Year Warranty", "Thermal Insulation", "Noise Reduction"],
    },
    {
      name: "Winda",
      subtitle: "Trusted uPVC Windows & Doors",
      description:
        "Winda represents more than two decades of customer trust and consistent endeavor to exceed expectations in fenestration solutions across North India. WINDA is committed to international standards with a perfect amalgamation of infrastructure including state-of-the-art technology, cutting-edge imported machinery, and well-equipped facilities. Continuous research and development enable Winda to deliver cost-effective, environment-friendly, and energy-efficient uPVC solutions that comply with the highest international standards and EU legislation requirements. Winda brings integrated high-performance window and door systems backed by well-trained, experienced manpower and stringent quality control. Products are manufactured for durability, noise reduction, weather resistance, and low maintenance. With a 21-year warranty, Winda combines quality systems with latest technology to deliver solutions previously unavailable in the region.",
      image: "/brand/winda.webp",
      href: "/winda",
      features: ["Superior Insulation", "Noise Reduction", "21-Year Warranty", "Eco-Friendly"],
    },
    {
      name: "Gebe",
      subtitle: "Premium Outdoor Furniture",
      description:
        "As part of our premium offerings, Arqtrace proudly brings to India the world-renowned GEBE German Outdoor Furniture. GEBE has become a symbol of style, strength, and sustainability in outdoor living. Crafted from the world's best materials such as Raucord German wicker, high-grade aluminum, and weather-resistant fabrics, GEBE furniture is built to withstand UV rays, water, extreme climates, and everyday use. From patio furniture sets and pool loungers to garden tables, chairs, and customized outdoor solutions, every piece reflects European craftsmanship and timeless design. GEBE combines premium quality, stylish ergonomic designs, and eco-friendly materials with long-term warranty assurance for complete peace of mind in both residential and commercial outdoor spaces.",
      image: "/gebe/18.webp",
      href: "/gebe",
      features: ["German Craftsmanship", "Weather Resistant", "Eco-Friendly", "Premium Materials"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:h-[650px] w-full overflow-hidden flex items-center" style={{ backgroundImage: "url('/home/3.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* <div className="absolute inset-0 bg-[#2d1e18]/60" /> */}
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Our Brands</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Premium Brands <br></br> You Can Trust
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              We partner with the best brands to bring you unmatched quality and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Sections */}
      <div className="py-20 lg:py-24 bg-white">
        {BRANDS_DATA.map((brand, index) => (
          <section key={brand.name} className="container mx-auto px-4 lg:px-12 mb-20 last:mb-0">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}>
              <div className={`lg:col-span-6 ${brand.name === "Winda" ? "lg:order-2" : "lg:order-1"}`}>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden shadow-sm">
                    <img src={brand.image} alt={brand.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#bd845c]/20 -z-10" />
                </div>
              </div>
              <div className={`lg:col-span-6 ${brand.name === "Winda" ? "lg:order-1" : "lg:order-2"}`}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center gap-2 pt-1.5 shrink-0 [writing-mode:vertical-lr] rotate-180">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd845c]">{index === 0 ? "Aluminum" : index === 1 ? "uPVC" : "Outdoor"}</span>
                    <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                  </div>
                  <div>
                    <p className="text-[#bd845c] font-semibold text-sm mb-2 font-sans tracking-wide">{brand.subtitle}</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">{brand.name}</h2>
                  </div>
                </div>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">{brand.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {brand.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#bd845c] flex-shrink-0" />
                      <span className="text-sm text-[#2d1e18] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link href={brand.href}>
                    <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm">
                      Explore {brand.name}
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default BrandsContent;
