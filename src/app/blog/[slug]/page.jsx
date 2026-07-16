import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Arqtrace PVT. LTD.",
      description: "The requested blog post could not be found."
    };
  }

  return {
    title: `${post.title} | Arqtrace PVT. LTD.`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage],
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main>
      <section 
        className="relative min-h-[500px] lg:h-[650px] w-full overflow-hidden flex items-center"
        style={{ 
          backgroundImage: `url(${post.heroImage})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-[1.15] tracking-tight max-w-4xl mx-auto">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto">
            {post.content.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2 key={index} className="text-3xl font-serif font-bold text-[#2d1e18] mt-12 mb-6 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3 key={index} className="text-2xl font-serif font-bold text-[#2d1e18] mt-8 mb-4">
                    {block.text}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-stone-600 text-base lg:text-lg leading-relaxed font-sans mb-6">
                  {block.text}
                </p>
              );
            })}



            <section className="mt-20 bg-[#2d1e18] py-12 lg:py-16 text-white text-center">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">Ready to Upgrade?</span>
                  <span className="w-1.5 h-1.5 bg-[#bd845c]" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                  Transform Your Home Today
                </h2>
                <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Discover our premium window and door solutions tailored for your home.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase flex items-center gap-4 transition-all duration-300 shadow-md hover:shadow-lg group mx-auto">
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </section>

            <div className="mt-12 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-[#bd845c] font-bold text-sm hover:text-[#a6704c] transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
