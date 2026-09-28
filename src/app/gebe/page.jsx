import GebeContent from "@/components/pages/GebeContent";

export const metadata = {
  title: "GEBE Outdoor Furniture in Dehradun: Premium Sets",
  description: "Explore premium GEBE outdoor furniture at Arqtrace: patio sets, lawn furniture, garden tables and chairs. Weather-resistant quality.",
  alternates: {
    canonical: "https://arqtrace.com/gebe/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/gebe/",
    title: "GEBE Outdoor Furniture in Dehradun: Premium Sets",
    description: "Explore premium GEBE outdoor furniture at Arqtrace: patio sets, lawn furniture, garden tables and chairs. Weather-resistant quality.",
    images: [
      {
        url: "/gebe/1.webp",
        width: 1200,
        height: 630,
        alt: "GEBE Outdoor Furniture by Arqtrace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEBE Outdoor Furniture in Dehradun: Premium Sets",
    description: "Explore premium GEBE outdoor furniture at Arqtrace: patio sets, lawn furniture, garden tables and chairs. Weather-resistant quality.",
    images: ["/gebe/1.webp"],
  },
};

export default function GebePage() {
  return <GebeContent />;
}
