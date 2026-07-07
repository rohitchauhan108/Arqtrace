"use client";

import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Projects from "@/components/home/Projects";
import Shop from "@/components/home/Shop";
import Testimonials from "@/components/home/Testimonials";
import Blog from "@/components/home/Blog";
import WhyChoose from "@/components/home/Whychooseus";

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
      <Blog />
    </main>
  );
}
