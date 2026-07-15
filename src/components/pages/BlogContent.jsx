"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS } from "@/lib/posts";
import { useState } from "react";

const BlogContent = () => {
  const BLOG_POSTS = POSTS;
  const perPage = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(BLOG_POSTS.length / perPage);
  const start = (page - 1) * perPage;
  const visiblePosts = BLOG_POSTS.slice(start, start + perPage);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:h-[650px] w-full overflow-hidden flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">Our Blog</span>
              <span className="w-3 h-3 bg-[#bd845c] inline-block" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15]">
              Architectural <br></br> Trends & Insights
            </h1>
            <p className="text-white/80 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore our latest articles on premium windows, doors, outdoor furniture, and architectural trends in Uttarakhand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visiblePosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-[#fbf9f4] rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.heroImage || (post.images && post.images[0])}
                      alt={post.title}
                      onError={(e) => (e.currentTarget.src = "https://picsum.photos/seed/default/800/600")}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#bd845c] mb-2 block">{post.category}</span>
                    <h3 className="text-lg font-serif font-bold text-[#2d1e18] mb-3 group-hover:text-[#bd845c] transition-colors line-clamp-3">{post.title}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-stone-500 text-xs">{post.readTime}</span>
                      <Link href={`/blog/${post.slug || ""}`} className="text-[#bd845c] font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className={`px-5 py-2 rounded-lg text-sm font-medium ${page === 1 ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'bg-white text-stone-700 hover:bg-stone-50'}`}>
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${page === i + 1 ? 'bg-[#bd845c] text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}>
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className={`px-5 py-2 rounded-lg text-sm font-medium ${page === totalPages ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'bg-white text-stone-700 hover:bg-stone-50'}`}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogContent;
