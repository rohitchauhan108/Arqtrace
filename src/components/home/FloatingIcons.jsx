"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MessageCircle, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

function FloatingIcons() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const whatsappNumber = "7888864955";
  const phoneNumber = "7888864955";

  // Prevent SSR from accessing document
  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div className="fixed bottom-6 right-6 z-[99999] flex flex-col items-end pointer-events-none">
      {/* Contact Popup */}
      <div
        className={`w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out origin-bottom-right mb-3 pointer-events-auto ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 absolute bottom-0 right-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#2d1e18] px-4 py-3 text-white flex items-center justify-between">
          <span className="font-semibold text-sm tracking-wide">
            Contact Us Now
          </span>

          <button
            onClick={toggleMenu}
            className="text-amber-100 hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-3 flex flex-col gap-2.5">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <div className="bg-green-600 text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaWhatsapp className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">
                WhatsApp
              </span>

              <span className="font-semibold text-sm text-gray-800 group-hover:text-[#2d1e18] transition-colors">
                +91 {whatsappNumber}
              </span>
            </div>
          </a>

          {/* Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="group flex items-center gap-3.5 p-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-300"
            aria-label="Call Us"
          >
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-5 h-5" />
            </div>

            <div className="flex flex-col">
              <span className="text-xs text-gray-500 font-medium">
                Call Us
              </span>

              <span className="font-semibold text-sm text-gray-800 group-hover:text-[#2d1e18] transition-colors">
                +91 {phoneNumber}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={toggleMenu}
        className={`group flex items-center gap-2.5 bg-[#2d1e18] text-white px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#3d2921] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#2d1e18]/30 pointer-events-auto ${
          isOpen
            ? "opacity-0 scale-75 absolute bottom-0 right-0 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
        aria-label="Contact Us"
      >
        <MessageCircle className="w-5 h-5 text-amber-100 group-hover:rotate-12 transition-transform duration-300" />

        <span className="font-medium tracking-wide text-sm sm:text-base">
          Contact Us
        </span>
      </button>
    </div>,
    document.body
  );
}

export default FloatingIcons;