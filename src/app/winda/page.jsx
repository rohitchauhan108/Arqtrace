import WindaContent from "@/components/pages/WindaContent";

export const metadata = {
  title: "Winda uPVC Windows: Energy Efficient & 21 Yr Warranty",
  description: "Discover premium Winda uPVC windows and doors at Arqtrace. Energy-efficient designs, soundproofing, and a 21-year warranty in Dehradun.",
  alternates: {
    canonical: "https://arqtrace.com/winda/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/winda/",
    title: "Winda uPVC Windows: Energy Efficient & 21 Yr Warranty",
    description: "Discover premium Winda uPVC windows and doors at Arqtrace. Energy-efficient designs, soundproofing, and a 21-year warranty in Dehradun.",
    images: [
      {
        url: "/winda/1.webp",
        width: 1200,
        height: 630,
        alt: "Winda uPVC Windows and Doors by Arqtrace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Winda uPVC Windows: Energy Efficient & 21 Yr Warranty",
    description: "Discover premium Winda uPVC windows and doors at Arqtrace. Energy-efficient designs, soundproofing, and a 21-year warranty in Dehradun.",
    images: ["/winda/1.webp"],
  },
};

export default function WindaPage() {
  return <WindaContent />;
}
