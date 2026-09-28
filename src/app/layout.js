import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingIcons from "@/components/home/FloatingIcons";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://arqtrace.com"),
  title: {
    default: "Arqtrace: Premium Aluminium & uPVC Windows in Dehradun",
    template: "%s | Arqtrace PVT. LTD.",
  },
  description: "Arqtrace is Dehradun's trusted partner for premium aluminium windows, uPVC doors, outdoor furniture, and partitions. 600+ projects delivered.",
  keywords: [
    "Aluminum window manufacturers",
    "Aluminum Door manufacturers",
    "Aluminum and glass windows",
    "Aluminum Windows and Doors",
    "uPVC Windows and Doors",
    "Outdoor Furniture",
    "Best Outdoor Furniture Company",
    "outdoor lawn furniture",
    "outdoor patio furniture sets",
    "garden furniture table and chairs",
    "upvc doors and windows suppliers",
    "upvc windows sliding door",
    "best aluminium windows in dehradun",
    "aluminium sliding windows in dehradun",
    "best quality windows",
    "aluminium windows price",
    "premium aluminium windows",
    "aluminium windows for villas",
    "windows with installation in dehradun"
  ],
  authors: [{ name: "Arqtrace Pvt. Ltd.", url: "https://arqtrace.com" }],
  creator: "Arqtrace Pvt. Ltd.",
  publisher: "Arqtrace Pvt. Ltd.",
  alternates: {
    canonical: "https://arqtrace.com/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arqtrace.com/",
    siteName: "Arqtrace Pvt. Ltd.",
    title: "Arqtrace: Premium Aluminium & uPVC Windows in Dehradun",
    description: "Arqtrace is Dehradun's trusted partner for premium aluminium windows, uPVC doors, outdoor furniture, and partitions. 600+ projects delivered.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arqtrace Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arqtrace: Premium Aluminium & uPVC Windows in Dehradun",
    description: "Arqtrace is Dehradun's trusted partner for premium aluminium windows, uPVC doors, outdoor furniture, and partitions. 600+ projects delivered.",
    images: ["/logo.png"],
    creator: "@arqtrace",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-white overflow-x-hidden">
        <CustomCursor />
        <Header />
        {/* <FloatingActions /> */}
        <SmoothScroll>
          <FloatingIcons/>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
