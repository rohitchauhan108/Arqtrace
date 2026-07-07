"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#221510] text-white pt-24 pb-8 select-none relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#bd845c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="Arqtrace Logo" className="h-20 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-sans">
              Arqtrace is an all-in-one solution for premium aluminum and uPVC windows, doors, partitions, and outdoor furniture. We bring quality, design, and long-term reliability to every place we touch.
            </p>

            <div className="flex items-center gap-4 pt-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61553583790346" },
                { Icon: Twitter, href: "https://twitter.com/arqtrace" },
                { Icon: Instagram, href: "https://www.instagram.com/arqtrace/" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/arqtrace-pvt-ltd/about/?viewAsMember=true" },
              ].map(({ Icon, href }, idx) => (
                <a key={idx} href={href} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-[#bd845c] hover:border-[#bd845c] transition-all duration-500 shadow-lg group">
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-serif font-bold uppercase tracking-[0.15em] !text-white mb-10 flex items-center gap-3">
              Quick Links
              <span className="w-1.5 h-1.5 bg-[#bd845c] rounded-full" />
            </h4>
            <ul className="space-y-5 text-sm !text-white font-sans">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Latest Projects", href: "#projects" },
                { label: "Why Arqtrace", href: "#why-choose" },
                { label: "Latest News", href: "#blog" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#bd845c] flex items-center gap-0 hover:gap-2 transition-all duration-300 group">
                    <ArrowRight className="w-0 h-3.5 text-[#bd845c] opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300" />
                    <span className="!text-white group-hover:!text-[#bd845c] transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-base font-serif font-bold uppercase tracking-[0.15em] !text-white mb-10 flex items-center gap-3">
              Our Systems
              <span className="w-1.5 h-1.5 bg-[#bd845c] rounded-full" />
            </h4>
            <ul className="space-y-5 text-sm !text-white font-sans">
              {[
                "Premium Aluminum Windows",
                "uPVC Doors & Windows",
                "Partitions & Glazing",
                "Outdoor Furniture",
                "Professional Installation",
              ].map((service, idx) => (
                <li key={idx} className="hover:text-[#bd845c] transition-colors duration-300 cursor-pointer flex items-center gap-3 group">
                  <span className="w-1.5 h-[1px] bg-[#bd845c] group-hover:w-3 transition-all" />
                  <span className="!text-white group-hover:!text-[#bd845c] transition-colors">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-base font-serif font-bold uppercase tracking-[0.15em] !text-white mb-10 flex items-center gap-3">
              Contact Info
              <span className="w-1.5 h-1.5 bg-[#bd845c] rounded-full" />
            </h4>
            <ul className="space-y-6 text-sm !text-white font-sans">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#bd845c] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#bd845c] group-hover:text-white transition-colors" />
                </div>
                <span className="leading-relaxed pt-1 !text-white group-hover:!text-white transition-colors">First Floor, Durga Tower,<br />GMS Road, Dehradun-248001, Uttarakhand</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#bd845c] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#bd845c] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium !text-white group-hover:!text-white transition-colors">+91 788 886 4955</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#bd845c] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#bd845c] group-hover:text-white transition-colors" />
                </div>
                <span className="truncate !text-white group-hover:!text-white transition-colors">info@arqtrace.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium uppercase tracking-[0.1em] text-stone-500 font-sans">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-stone-300">Arqtrace</span>. Crafted with precision.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-[#bd845c] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#bd845c] transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
