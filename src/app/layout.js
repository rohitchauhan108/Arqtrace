import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Leading Windows, Doors & outdoor Furniture | Arqtrace PVT. LTD.",
  description: "Learn about Arqtrace, trusted provider of aluminum & uPVC windows, doors, and outdoor furniture. Quality craftsmanship & innovation at its best. contact us today.",
  icons:{
    icon: "/favicon.png",
    
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen bg-white overflow-x-hidden">
        <CustomCursor />
        <Header />
        {/* <FloatingActions /> */}
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
