import BrandsContent from "@/components/pages/BrandsContent";

export const metadata = {
  title: "Premium Brands: Lumani Schuco, Winda uPVC & GEBE",
  description: "Explore Arqtrace's premium brands: Lumani Schuco aluminium windows, Winda uPVC doors, and GEBE outdoor furniture with trusted quality.",
  alternates: {
    canonical: "https://arqtrace.com/brands/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/brands/",
    title: "Premium Brands: Lumani Schuco, Winda uPVC & GEBE",
    description: "Explore Arqtrace's premium brands: Lumani Schuco aluminium windows, Winda uPVC doors, and GEBE outdoor furniture with trusted quality.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arqtrace Premium Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Brands: Lumani Schuco, Winda uPVC & GEBE",
    description: "Explore Arqtrace's premium brands: Lumani Schuco aluminium windows, Winda uPVC doors, and GEBE outdoor furniture with trusted quality.",
    images: ["/logo.png"],
  },
};

export default function BrandsPage() {
  return <BrandsContent />;
}
