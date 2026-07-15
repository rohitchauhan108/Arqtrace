"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] lg:h-[600px] w-full bg-[#2d1e18] overflow-hidden flex items-center select-none" 
        style={{ 
          backgroundImage: "url('/images/1.webp')", 
          backgroundSize: "contain", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Contact Us</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Get in Touch with Arqtrace
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
              Ready to transform your space? Contact us today for premium aluminum & uPVC windows, doors, and outdoor furniture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-24 lg:py-32 bg-white select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Detail Modules */}
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#2d1e18] mb-4 flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#bd845c]" />
                  Visit Our Showroom
                </h3>
                <div className="bg-[#fbf9f4] p-6 border border-stone-200/60">
                  <h4 className="text-xs font-sans font-bold tracking-wider text-[#2d1e18] mb-2 uppercase">ARQTRACE PVT. LTD.</h4>
                  <p className="text-stone-600 text-sm font-sans leading-relaxed">
                    First Floor, Durga Tower<br />
                    GMS Road, Dehradun - 248146, Uttarakhand
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#2d1e18] mb-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#bd845c]" />
                  Direct Channels
                </h3>
                <div className="bg-[#fbf9f4] p-6 border border-stone-200/60 space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-4 h-4 text-[#bd845c]" />
                    <a href="tel:+917888864955" className="text-sm font-sans text-stone-700 hover:text-[#bd845c] transition-colors">
                      +91 78888 64955
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-4 h-4 text-[#bd845c]" />
                    <a href="mailto:info@arqtrace.com" className="text-sm font-sans text-stone-700 hover:text-[#bd845c] transition-colors">
                      info@arqtrace.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#2d1e18] mb-4 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#bd845c]" />
                  Business Hours
                </h3>
                <div className="bg-[#fbf9f4] p-6 border border-stone-200/60">
                  <p className="text-sm font-sans text-stone-700">Monday – Saturday: 9:00 AM – 6:00 PM</p>
                  <p className="text-xs font-sans text-stone-400 mt-1">Sundays: By prior appointment only</p>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Structural Message Form */}
            <div className="bg-white border border-stone-200 p-8 lg:p-10 shadow-xl relative">
              <span className="absolute top-0 left-0 w-full h-[3px] bg-[#bd845c]" />
              <h3 className="text-2xl font-serif font-bold text-[#2d1e18] mb-8">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-stone-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-stone-200 bg-white focus:outline-none focus:border-[#bd845c] transition-all font-sans text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-stone-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-stone-200 bg-white focus:outline-none focus:border-[#bd845c] transition-all font-sans text-sm"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-stone-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-stone-200 bg-white focus:outline-none focus:border-[#bd845c] transition-all font-sans text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-sans font-bold uppercase tracking-wider text-stone-700 mb-2">Your Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-200 bg-white focus:outline-none focus:border-[#bd845c] transition-all resize-none font-sans text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-[#bd845c] hover:bg-[#a6704c] text-white py-6 rounded-none text-xs font-sans font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors shadow-md">
                  Send Message
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>

          {/* Full-Width Google Maps Display Section */}
          <div className="mt-24 lg:mt-32 w-full border border-stone-200 p-2 bg-stone-50 shadow-inner">
            <div className="w-full h-[400px] lg:h-[500px] bg-stone-100 relative">
              <iframe
                title="Arqtrace Showroom Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.9213400306594!2d78.0104635!3d30.313693299999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b898656154f%3A0xeac6af0e08abac46!2sARQTRACE%20PVT.%20LTD.%20%7C%20uPVC%20%26%20Aluminium%20Windows%20%7C%20Windows%20Manufacturer%20in%20Dehradun!5e1!3m2!1sen!2sin!4v1783665042932!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-[1.1] brightness-[0.95] hover:grayscale-0 transition-all duration-700 ease-in-out"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default ContactContent;