"use client";

import { motion } from "framer-motion";
import { ArrowRight, Handshake, ShieldCheck, CheckCircle2, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="why-choose" className="relative py-24 lg:py-32 bg-white overflow-hidden select-none">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50/50 -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#bd845c]/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#bd845c]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-[#bd845c]">
                The Arqtrace Advantage
              </span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2d1e18] leading-[1.1] mb-8">
              We Deliver Quality, <br />
              <span className="text-[#bd845c]">Trust</span> & Long-Term Value
            </motion.h2>

            <motion.p variants={itemVariants} className="text-stone-500 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-sans">
              Arqtrace combines premium product quality, professional guidance, and dependable installation to create enduring solutions for homes and projects.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
              <div className="group">
                <div className="flex items-center gap-5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#bd845c]/10 flex items-center justify-center text-[#bd845c] group-hover:bg-[#bd845c] group-hover:text-white transition-all duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2d1e18]">Best-in-Class</h3>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed pl-17">
                  Unmatched quality standards that exceed industry benchmarks.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-5 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#bd845c]/10 flex items-center justify-center text-[#bd845c] group-hover:bg-[#bd845c] group-hover:text-white transition-all duration-300">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#2d1e18]">Trusted Partners</h3>
                </div>
                <p className="text-sm text-stone-500 leading-relaxed pl-17">
                  Lumani • SCHUCO • Winda • Gebe
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-5 mb-12">
              {[
                "Expert guidance to help you choose the right products for your space.",
                "Professional installation backed by dependable long-term warranties."
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-stone-50/50 border border-transparent hover:border-stone-100 hover:bg-white hover:shadow-sm transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[#bd845c] shrink-0" />
                  <span className="text-sm md:text-base text-stone-700 font-medium">{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-10 py-6 rounded-none text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4 transition-all duration-300 group shadow-lg shadow-[#bd845c]/20">
                Get In Touch
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Images Column */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-6 items-center">
              
              {/* Secondary Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-5 self-end relative z-10"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-sm group">
                  <img 
                    src="/home/3.webp" 
                    alt="Installation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2d1e18]/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-7 relative"
              >
                <div className="aspect-[3/4] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] rounded-sm group">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                    alt="Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#2d1e18]/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Experience Badge */}
                <motion.div 
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                  className="absolute -bottom-8 -left-16 bg-[#2d1e18] p-8 text-white shadow-2xl flex items-center gap-6 z-20 border-l-4 border-[#bd845c]"
                >
                  <div className="relative">
                    <span className="text-6xl md:text-7xl font-serif font-black tracking-tighter leading-none text-white/95">13</span>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#bd845c] rounded-full animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] leading-tight text-[#bd845c] mb-1">Years of</span>
                    <span className="text-sm font-serif font-medium tracking-wide text-stone-300">Experience</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Background decorative square */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] border-2 border-stone-100 -z-10 translate-x-12 translate-y-12" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;