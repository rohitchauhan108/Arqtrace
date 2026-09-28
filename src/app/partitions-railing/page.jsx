import PartitionsRailingContent from "@/components/pages/PartitionsRailingContent";

export const metadata = {
  title: "Glass Partitions, Railings & Skylights in Dehradun",
  description: "Premium interior & exterior solutions by Arqtrace: modern glass partitions, safety railing systems, and barrier-free sliding doors.",
  alternates: {
    canonical: "https://arqtrace.com/partitions-railing/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/partitions-railing/",
    title: "Glass Partitions, Railings & Skylights in Dehradun",
    description: "Premium interior & exterior solutions by Arqtrace: modern glass partitions, safety railing systems, and barrier-free sliding doors.",
    images: [
      {
        url: "/partition/partition.webp",
        width: 1200,
        height: 630,
        alt: "Glass Partitions and Railing Systems by Arqtrace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glass Partitions, Railings & Skylights in Dehradun",
    description: "Premium interior & exterior solutions by Arqtrace: modern glass partitions, safety railing systems, and barrier-free sliding doors.",
    images: ["/partition/partition.webp"],
  },
};

export default function PartitionsRailingPage() {
  return <PartitionsRailingContent />;
}
