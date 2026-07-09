"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:h-[600px] w-full bg-[#fbf9f4] overflow-hidden flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Contact Us</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Get in Touch with Arqtrace
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your space? Contact us today for premium aluminum & uPVC windows, doors, and outdoor furniture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2d1e18] mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-[#bd845c]" />
                  Visit Us
                </h3>
                <div className="bg-[#fbf9f4] p-6 rounded-lg border border-stone-100">
                  <h4 className="text-lg font-serif font-bold text-[#2d1e18] mb-2">ARQTRACE PVT. LTD.</h4>
                  <p className="text-stone-600 leading-relaxed">
                    First Floor, Durga Tower<br />
                    GMS Road, Dehradun-248146, Uttarakhand
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2d1e18] mb-6 flex items-center gap-3">
                  <span className="flex gap-2">
                    <Phone className="w-8 h-8 text-[#bd845c]" />
                    <Mail className="w-8 h-8 text-[#bd845c]" />
                  </span>
                  Get in Touch
                </h3>
                <div className="bg-[#fbf9f4] p-6 rounded-lg border border-stone-100 space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#bd845c]" />
                    <a href="tel:+917888864955" className="text-lg text-stone-700 hover:text-[#bd845c] transition-colors">
                      Call us: +91 78888 64955
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#bd845c]" />
                    <a href="mailto:info@arqtrace.com" className="text-lg text-stone-700 hover:text-[#bd845c] transition-colors">
                      Write to us: info@arqtrace.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#2d1e18] mb-6 flex items-center gap-3">
                  <Clock className="w-8 h-8 text-[#bd845c]" />
                  Business Hours
                </h3>
                <div className="bg-[#fbf9f4] p-6 rounded-lg border border-stone-100">
                  <p className="text-lg text-stone-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2d1e18]/5 to-white p-8 lg:p-10 rounded-2xl border border-stone-100">
              <h3 className="text-2xl font-serif font-bold text-[#2d1e18] mb-8">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#bd845c]/50 focus:border-[#bd845c] transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#bd845c]/50 focus:border-[#bd845c] transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#bd845c]/50 focus:border-[#bd845c] transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Your Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#bd845c]/50 focus:border-[#bd845c] transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-[#bd845c] hover:bg-[#a6704c] text-white py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors">
                  Send Message
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContent;
