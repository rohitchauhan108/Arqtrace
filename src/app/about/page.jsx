import AboutContent from "@/components/pages/AboutContent";

export const metadata = {
  title: "About Arqtrace: Premium Windows & Doors in Dehradun",
  description: "Discover Arqtrace, Dehradun's trusted provider of premium aluminium & uPVC windows, doors, and outdoor furniture. 13+ years expertise.",
  alternates: {
    canonical: "https://arqtrace.com/about/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/about/",
    title: "About Arqtrace: Premium Windows & Doors in Dehradun",
    description: "Discover Arqtrace, Dehradun's trusted provider of premium aluminium & uPVC windows, doors, and outdoor furniture. 13+ years expertise.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "About Arqtrace Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Arqtrace: Premium Windows & Doors in Dehradun",
    description: "Discover Arqtrace, Dehradun's trusted provider of premium aluminium & uPVC windows, doors, and outdoor furniture. 13+ years expertise.",
    images: ["/logo.png"],
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
