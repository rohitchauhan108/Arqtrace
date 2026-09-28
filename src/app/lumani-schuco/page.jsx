import LumaniSchucoContent from "@/components/pages/LumaniSchucoContent";

export const metadata = {
  title: "Lumani Schuco: Premium Aluminium Windows in Dehradun",
  description: "Discover Lumani Schüco premium aluminium windows and doors at Arqtrace. German engineering, thermal insulation, and soundproofing.",
  alternates: {
    canonical: "https://arqtrace.com/lumani-schuco/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/lumani-schuco/",
    title: "Lumani Schuco: Premium Aluminium Windows in Dehradun",
    description: "Discover Lumani Schüco premium aluminium windows and doors at Arqtrace. German engineering, thermal insulation, and soundproofing.",
    images: [
      {
        url: "/lumani/1.webp",
        width: 1200,
        height: 630,
        alt: "Lumani Schuco Premium Aluminium Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumani Schuco: Premium Aluminium Windows in Dehradun",
    description: "Discover Lumani Schüco premium aluminium windows and doors at Arqtrace. German engineering, thermal insulation, and soundproofing.",
    images: ["/lumani/1.webp"],
  },
};

export default function LumaniSchucoPage() {
  return <LumaniSchucoContent />;
}
