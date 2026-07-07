"use client";

import { ArrowRight, Sparkles, ShieldCheck, Gem } from "lucide-react";
import { Button } from "@/components/ui/Button";

const posts = [
  {
    title: "Premium Product Quality",
    eyebrow: "Craftsmanship",
    excerpt: "We bring you the highest-quality aluminum windows, doors, uPVC solutions, and outdoor furniture designed for durability, energy efficiency, and timeless aesthetics.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Trusted Dealer of Premium Brands",
    eyebrow: "Partnerships",
    excerpt: "Arqtrace is the official dealer of Lumani, SCHUCO, Winda, and Gebe, bringing exclusive products backed by innovation and experience.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Expert Guidance & Professional Installation",
    eyebrow: "Service",
    excerpt: "Our team provides consultative support to help you choose the ideal products and delivers seamless installation for a hassle-free experience.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 select-none">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="flex items-start gap-4">
            <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#bd845c]">Arqtrace Advantage</span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] leading-[1.15] tracking-tight">
              Why Customers Choose<br /> Arqtrace for Every Project
            </h2>
          </div>

          <div>
            <Button className="border border-stone-300 hover:border-[#bd845c] text-[#2d1e18] hover:text-[#bd845c] bg-transparent hover:bg-transparent rounded-none px-6 py-5 text-xs font-bold tracking-widest uppercase flex items-center gap-3 transition-all duration-300 group">
              Contact Us
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 group">
              <div className="p-6 pb-8">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 left-4 bg-[#bd845c] text-white py-1.5 px-3.5 text-center shadow-md">
                    <span className="block text-[10px] font-bold uppercase tracking-widest leading-none">{post.eyebrow}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#2d1e18] mb-4 hover:text-[#bd845c] transition-colors leading-snug">{post.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="bg-[#bd845c] px-6 py-3.5 flex items-center justify-between gap-4 border-t border-[#bd845c]/10 text-white/90 text-xs font-medium tracking-wide">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 opacity-80" />
                  <span>Built to last</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gem className="w-3.5 h-3.5 opacity-80" />
                  <span>Premium finish</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;