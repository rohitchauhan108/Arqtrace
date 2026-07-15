"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, X, MapPin, Send, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Brands", href: "/brands" },
  {
    name: "Lumani Schuco",
    href: "/lumani-schuco",
    children: [{ name: "Aluminium Windows and Doors", href: "/lumani-schuco-aluminium-windows" }],
  },
  {
    name: "Winda",
    href: "/winda",
    children: [{ name: "uPVC Windows and Doors", href: "/winda-upvc-windows" }],
  },
  { name: "GEBE", href: "/gebe" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState("");
  const [mobileDropdown, setMobileDropdown] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full relative z-50">
      <div className="hidden lg:block bg-[#2d1e18] text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-stone-300">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#bd845c]" />
              <span>+91 788 886 4955</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#bd845c]" />
              <span>info@arqtrace.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#bd845c]" />
              <span>Mon - Sat: 9:00 - 18:00</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a href="https://www.facebook.com/profile.php?id=61569129481661" target="_blank" rel="noreferrer"><Facebook className="w-4 h-4 cursor-pointer hover:text-[#bd845c] transition-colors" /></a>
            <a href="https://www.instagram.com/arqtrace/" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4 cursor-pointer hover:text-[#bd845c] transition-colors" /></a>
            <a href="https://x.com/arqtrace" target="_blank" rel="noreferrer"><Twitter className="w-4 h-4 cursor-pointer hover:text-[#bd845c] transition-colors" /></a>
            <a href="https://www.linkedin.com/company/arqtrace-pvt-ltd/about/?viewAsMember=true" target="_blank" rel="noreferrer"><Linkedin className="w-4 h-4 cursor-pointer hover:text-[#bd845c] transition-colors" /></a>
          </div>
        </div>
      </div>

      <nav className={cn("w-full bg-white transition-all duration-300 py-4 lg:py-0 border-b border-stone-100", isSticky ? "fixed top-0 left-0 shadow-md z-50 animate-slideDown" : "relative")}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center py-4">
            <img src="/logo.png" alt="Arqtrace Logo" className="h-10 md:h-18 w-auto object-contain" />
          </Link>

          <ul className="hidden lg:flex items-center">
            {NAV_LINKS.map((link) => {
              const activeMain = isLinkActive(link.href);
              const activeChild = link.children?.some((child) => isLinkActive(child.href));
              const isActive = activeMain || activeChild;

              if (!link.children) {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(
                        "px-5 py-8 font-bold transition-colors inline-block text-[14px] uppercase tracking-wider",
                        isActive ? "text-[#bd845c]" : "text-[#2d1e18] hover:text-[#bd845c]"
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdown(link.name)}
                  onMouseLeave={() => setDesktopDropdown("")}
                >
                  <div className="px-5 py-8 flex items-center gap-1.5">
                    <Link
                      href={link.href}
                      className={cn(
                        "font-bold transition-colors inline-block text-[14px] uppercase tracking-wider",
                        isActive ? "text-[#bd845c]" : "text-[#2d1e18] hover:text-[#bd845c]"
                      )}
                    >
                      {link.name}
                    </Link>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        isActive ? "text-[#bd845c]" : "text-[#2d1e18]",
                        desktopDropdown === link.name ? "rotate-180" : ""
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 top-full w-80 bg-[#221510] border border-[#bd845c]/20 rounded-sm shadow-2xl p-4 transition-all duration-200",
                      desktopDropdown === link.name ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#bd845c] mb-3">Explore Systems</p>
                    <div className="space-y-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            "block rounded-sm px-3 py-3 text-sm font-semibold transition-colors",
                            isLinkActive(child.href)
                              ? "bg-[#bd845c] text-white"
                              : "text-stone-200 hover:bg-[#2d1e18] hover:text-[#bd845c]"
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 lg:gap-6">
            <Search className="w-5 h-5 text-[#2d1e18] cursor-pointer hover:text-[#bd845c] transition-colors" />
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-[#2d1e18]" />
            </button>
            <div className="hidden lg:block">
              <div onClick={() => setIsSidebarOpen(true)} className="w-10 h-10 flex flex-col justify-center items-end gap-1 cursor-pointer group">
                <span className="w-6 h-px bg-[#2d1e18] group-hover:bg-[#bd845c] transition-all"></span>
                <span className="w-4 h-px bg-[#2d1e18] group-hover:bg-[#bd845c] transition-all"></span>
                <span className="w-6 h-px bg-[#2d1e18] group-hover:bg-[#bd845c] transition-all"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={cn("fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300", isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} onClick={() => setIsSidebarOpen(false)} />

      <div className={cn("fixed top-0 right-0 h-full w-full max-w-md bg-[#221510] text-white z-50 p-10 flex flex-col justify-between transition-transform duration-500 ease-out shadow-2xl overflow-y-auto", isSidebarOpen ? "translate-x-0" : "translate-x-full")}>
        <div>
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <img src="/logo.png" alt="Arqtrace side logo" className="h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="text-stone-400 hover:text-white transition-colors p-1">
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-stone-400 text-sm leading-relaxed mb-10">
            Arqtrace is an all-in-one solution for premium aluminum and uPVC windows, doors, partitions, and outdoor furniture.
          </p>

          <div className="space-y-6 mb-12">
            <h3 className="text-lg font-bold tracking-wide font-serif text-white">Information</h3>

            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#bd845c] shrink-0 mt-0.5" />
              <p className="text-stone-300 text-sm">First Floor, Durga Tower,<br />GMS Road, Dehradun-248001, Uttarakhand</p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#bd845c] shrink-0" />
              <a href="mailto:info@arqtrace.com" className="text-stone-300 text-sm hover:text-[#bd845c] transition-colors">info@arqtrace.com</a>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#bd845c] shrink-0" />
              <a href="tel:+917888864955" className="text-stone-300 text-sm hover:text-[#bd845c] transition-colors">+91 788 886 4955</a>
            </div>
          </div>

          <div className="flex items-center gap-4 pb-8 border-b border-stone-800">
            <a href="https://www.facebook.com/profile.php?id=61569129481661" target="_blank" rel="noreferrer" className="w-9 h-9 bg-stone-900 hover:bg-[#bd845c] rounded-full flex items-center justify-center transition-colors text-stone-300 hover:text-white"><Facebook className="w-4 h-4" /></a>
            <a href="https://www.instagram.com/arqtrace/" target="_blank" rel="noreferrer" className="w-9 h-9 bg-stone-900 hover:bg-[#bd845c] rounded-full flex items-center justify-center transition-colors text-stone-300 hover:text-white"><Instagram className="w-4 h-4" /></a>
            <a href="https://x.com/arqtrace" target="_blank" rel="noreferrer" className="w-9 h-9 bg-stone-900 hover:bg-[#bd845c] rounded-full flex items-center justify-center transition-colors text-stone-300 hover:text-white"><Twitter className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/company/arqtrace-pvt-ltd/about/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-9 h-9 bg-stone-900 hover:bg-[#bd845c] rounded-full flex items-center justify-center transition-colors text-stone-300 hover:text-white"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-base font-bold uppercase tracking-wider mb-4 text-white">Newsletter Subscribe</h3>
          <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className="w-full bg-stone-900 border border-stone-800 px-4 py-3.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#bd845c] transition-colors pr-14" />
            <button type="submit" className="absolute right-0 top-0 h-full px-4 bg-[#bd845c] text-white hover:bg-[#a6704c] transition-colors flex items-center justify-center">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className={cn("fixed inset-0 bg-[#2d1e18] z-50 transition-all duration-500 lg:hidden overflow-y-auto", isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0")}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <img src="/logo.png" alt="Arqtrace mobile logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <X className="w-8 h-8 text-white cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="space-y-4 text-white text-lg font-medium">
            {NAV_LINKS.map((link) => {
              const hasChildren = Boolean(link.children?.length);
              const isActive = isLinkActive(link.href) || link.children?.some((child) => isLinkActive(child.href));

              if (!hasChildren) {
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn("block py-1.5 transition-colors", isActive ? "text-[#bd845c]" : "hover:text-[#bd845c]")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              }

              const expanded = mobileDropdown[link.name];

              return (
                <li key={link.name} className="border-b border-white/10 pb-3">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={cn("py-1.5 transition-colors", isActive ? "text-[#bd845c]" : "hover:text-[#bd845c]")}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileDropdown((prev) => ({ ...prev, [link.name]: !prev[link.name] }))}
                      className="p-1"
                    >
                      <ChevronDown className={cn("w-5 h-5 text-stone-300 transition-transform", expanded ? "rotate-180" : "")} />
                    </button>
                  </div>

                  <div className={cn("mt-2 space-y-2 overflow-hidden transition-all", expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0")}>
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={cn(
                          "block text-sm pl-4 py-1.5 border-l-2 transition-colors",
                          isLinkActive(child.href)
                            ? "text-[#bd845c] border-[#bd845c]"
                            : "text-stone-300 border-white/20 hover:text-[#bd845c] hover:border-[#bd845c]"
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
