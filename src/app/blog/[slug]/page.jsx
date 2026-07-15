import { notFound } from "next/navigation";
import { getPostBySlug, POSTS, getAllSlugs } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllSlugs();
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  const featuredImage = post.images?.[0] || post.heroImage;
  const galleryImages = post.images?.slice(1) || [];

  return (
    <main>
      <section className="relative min-h-75 lg:h-112.5 w-full overflow-hidden flex items-center" style={{ backgroundImage: `url('${post.heroImage}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[#2d1e18]/60" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center py-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#bd845c]">{post.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">{post.title}</h1>
          <p className="text-white/80 mt-3">{post.excerpt}</p>
          <div className="mt-3 text-white/80 text-sm">
            <span className="mr-4">{post.author}</span>
            <span className="mr-4">{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-6 lg:px-16 prose prose-stone max-w-none py-16">
        {featuredImage && (
          <img src={featuredImage} alt={post.title} className="w-full rounded-2xl mb-8 object-cover" />
        )}

        {post.content.map((block, idx) => {
          if (block.type === "p") return <p key={idx}>{block.text}</p>;
          if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={idx}>{block.text}</h3>;
          return null;
        })}

        {/* Inline image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {galleryImages.map((img, i) => (
            <img key={i} src={img} alt={`${post.title} ${i + 1}`} className="w-full h-48 object-cover rounded-lg" />
          ))}
        </div>
      </article>
    </main>
  );
}
