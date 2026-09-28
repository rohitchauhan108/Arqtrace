import BlogContent from "@/components/pages/BlogContent";

export const metadata = {
  title: "Arqtrace Blog: Aluminium Windows & Architecture Trends",
  description: "Explore the Arqtrace blog for the latest guides on Schüco aluminium windows, Winda uPVC solutions, and architectural design trends.",
  alternates: {
    canonical: "https://arqtrace.com/blog/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/blog/",
    title: "Arqtrace Blog: Aluminium Windows & Architecture Trends",
    description: "Explore the Arqtrace blog for the latest guides on Schüco aluminium windows, Winda uPVC solutions, and architectural design trends.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Arqtrace Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arqtrace Blog: Aluminium Windows & Architecture Trends",
    description: "Explore the Arqtrace blog for the latest guides on Schüco aluminium windows, Winda uPVC solutions, and architectural design trends.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
