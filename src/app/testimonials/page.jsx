import TestimonialsContent from "@/components/pages/TestimonialsContent";

export const metadata = {
  title: "Arqtrace Client Testimonials & Video Reviews in UK",
  description: "Read testimonials and watch video reviews from Arqtrace clients. Premium windows, doors, and furniture trusted by 600+ projects.",
  alternates: {
    canonical: "https://arqtrace.com/testimonials/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/testimonials/",
    title: "Arqtrace Client Testimonials & Video Reviews in UK",
    description: "Read testimonials and watch video reviews from Arqtrace clients. Premium windows, doors, and furniture trusted by 600+ projects.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arqtrace Client Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arqtrace Client Testimonials & Video Reviews in UK",
    description: "Read testimonials and watch video reviews from Arqtrace clients. Premium windows, doors, and furniture trusted by 600+ projects.",
    images: ["/logo.png"],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
