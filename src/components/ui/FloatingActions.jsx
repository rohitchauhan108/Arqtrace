"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "+911234567890"; // Replace with actual number
  const whatsappNumber = "911234567890"; // Replace with actual number in international format

  return (
    <div className="fixed bottom-8 right-8 z-[9998] flex flex-col gap-4">
      {/* WhatsApp Floating Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors relative group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute right-full mr-4 bg-white text-[#2d1e18] px-3 py-1.5 rounded-md text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Floating Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#bd845c] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#a6704c] transition-colors relative group"
        title="Call Us Now"
      >
        <Phone className="w-6 h-6 fill-white" />
        <span className="absolute right-full mr-4 bg-white text-[#2d1e18] px-3 py-1.5 rounded-md text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingActions;
