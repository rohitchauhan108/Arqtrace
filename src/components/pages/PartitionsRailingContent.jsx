"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Check, Layers, Shield, Maximize2 } from "lucide-react";
import Link from "next/link";

const SECTIONS_DATA = [
  {
    name: "Internal Partitions",
    subtitle: "Modern Glass Partition Systems",
    description:
      "The AIR System is without any bottom track at all, completely barrier-free. The sliding door is hanging on rollers that are running in a top track insert. Only one guiding point at the bottom (base plate with rollers) is required per sliding door to prevent the door from swinging. Tested for 25,000 cycles with a 12 mm visible profile, the system handles door weights up to 60 kg with sizes ranging from 500 x 700 mm (min) to 1400 x 3100 mm (max). Available in Black, the Skyline S1200 AIR delivers an elegant, floating aesthetic ideal for walk-in closets, room dividers, and modern interior spaces that demand seamless, unobstructed transitions.",
    image: "/partition/partition.webp",
    tag: "Interior Systems",
    icon: <Layers className="w-5 h-5 text-[#bd845c] flex-shrink-0" />,
    features: ["Barrier-Free Top Track", "25,000 Cycles Tested", "Up to 1400x3100 mm", "Floating Aesthetic"],
  },
  {
    name: "Railing",
    subtitle: "Schueco Railing System GR 52 | GR 58",
    description:
      "The new Schueco railing system combines aesthetics, quality, minimalist design, and safety, making it an excellent choice. This system combines the elegance and visual appeal of an all-glass solution with simple fabrication and installation. It also provides maximum protection as a safety barrier. The sturdy profiles and connections ensure the necessary safety for internal and external applications. With a minimalistic design using fewer components, all variants are third-party tested for maximum safety and designed to ensure full compliance with local building codes. The system fulfils all the needs of a glass railing, with the options of floor-mounted and face-fitted versions for straight and corner solutions.",
    image: "/partition/railing.webp",
    tag: "Safety Systems",
    icon: <Shield className="w-5 h-5 text-[#bd845c] flex-shrink-0" />,
    features: ["Third-Party Safety Tested", "Floor & Wall Mounted", "Code Compliant", "Minimalist Design"],
  },
  {
  name: "Skylights",
  subtitle: "Skylights Sliding Door System S1200 AIR",
  description:
    "Advanced skylight and roof glazing systems designed for energy efficiency, natural light, and modern architectural applications. Schueco systems offer versatile solutions for residential and commercial spaces with high-performance aluminium and glass construction.",
  image: "/partition/skyline.webp",
  tag: "Sliding Systems",
  icon: <Maximize2 className="w-5 h-5 text-[#bd845c] flex-shrink-0" />,
  features: [
    "Energy Efficient",
    "Aluminium & Glass",
    "Wide Span Solutions",
    "Modern Architectural Design",
  ],
},
];

const PartitionsRailingContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] lg:h-[650px] w-full overflow-hidden flex items-center"
        style={{
          backgroundImage: "url('/home/partition.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/55" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">
                Interior Solutions
              </span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
             Internal Partitions, Railing &amp;
              <br /> Skylight Systems
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Elevate your interiors with premium partitions, safety railings, and
              barrier-free sliding door systems crafted for modern living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <div className="py-20 lg:py-24 bg-white">
        {SECTIONS_DATA.map((item, index) => (
          <section
            key={item.name}
            className="container mx-auto px-4 lg:px-12 mb-20 last:mb-0"
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
            >
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-6 ${
                      index % 2 === 1 ? "-left-6" : "-right-6"
                    } w-32 h-32 bg-[#bd845c]/20 -z-10`}
                  />
                </div>
              </div>
              <div
                className={`lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center gap-2 pt-1.5 shrink-0 [writing-mode:vertical-lr] rotate-180">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#bd845c]">
                      {item.tag}
                    </span>
                    <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                  </div>
                  <div>
                    <p className="text-[#bd845c] font-semibold text-sm mb-2 font-sans tracking-wide">
                      {item.subtitle}
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
                      {item.name}
                    </h2>
                  </div>
                </div>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm text-[#2d1e18] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link href="/contact">
                    <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-colors group shadow-sm">
                      Enquire About {item.name}
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

export default PartitionsRailingContent;
