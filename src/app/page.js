import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Projects from "@/components/home/Projects";
// import Shop from "@/components/home/Shop";
import Testimonials from "@/components/home/Testimonials";
import WhyChoose from "@/components/home/Whychooseus";

export const metadata = {
  title: "Arqtrace: Premium Aluminium & uPVC Windows in Dehradun",
  description: "Arqtrace is Dehradun's trusted partner for premium aluminium windows, uPVC doors, outdoor furniture, and partitions. 600+ projects delivered.",
  alternates: {
    canonical: "https://arqtrace.com/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/",
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
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Projects />
      <WhyChoose />
      {/* <Shop /> */}
      <Testimonials />
    </main>
  );
}
