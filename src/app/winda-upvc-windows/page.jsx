import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Arqtrace Winda uPVC Windows and Doors | Premium uPVC Systems",
  description:
    "Explore Arqtrace Winda uPVC windows and doors for modern living, with energy efficiency, low maintenance, design flexibility, and secure sliding solutions.",
};

const highlights = [
  "Strong, low-maintenance, weather-resistant frames",
  "Better insulation and reduced outside noise",
  "Elegant and secure uPVC windows sliding door systems",
  "Eco-friendly and cost-effective long-term performance",
];

export default function WindaUpvcWindowsPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#2d1e18] pt-36 lg:pt-44 pb-24">
      <section className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200 shadow-sm p-2">
              <img
                src="/winda.webp"
                alt="Winda uPVC windows and doors"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#bd845c] mb-3">
                Winda uPVC
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-4">
                Arqtrace: Premium Winda uPVC Windows and Doors for Modern Living
              </h1>
              <p className="text-stone-600 leading-relaxed">
                When it comes to combining style, durability, and comfort in your home or
                commercial space, uPVC Windows and Doors have become the preferred choice. At
                Arqtrace, we are proud to offer Winda uPVC Windows and Doors, a perfect blend of
                elegance and performance that elevates every living space.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-y border-stone-200 py-5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#bd845c] shrink-0" />
                  <p className="text-sm text-stone-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#bd845c] hover:bg-[#a6704c] text-white px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="max-w-6xl mx-auto space-y-10">

      {/* Why Choose */}
      <article className="bg-white border border-stone-200 shadow-sm p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-5">
          Why Choose uPVC Windows and Doors?
        </h2>

        <p className="text-stone-700 leading-8">
          The popularity of uPVC Windows and Doors is growing rapidly due to their
          strength, energy efficiency, and low maintenance needs. Unlike traditional
          wood, uPVC does not warp, rot, or require frequent painting. It provides
          superior insulation, keeping your interiors comfortable in all seasons while
          also reducing noise pollution.
        </p>

        <p className="text-stone-700 leading-8 mt-5">
          As trusted uPVC doors and windows suppliers, Arqtrace ensures that every
          product meets international standards of quality and design. From modern
          apartments to luxury villas, our solutions are tailored to enhance the beauty
          and functionality of every project.
        </p>
      </article>

      {/* Two Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <article className="bg-white border border-stone-200 shadow-sm p-8">
          <h3 className="text-2xl font-serif font-bold mb-5">
            Transform Your Home with Sliding uPVC Solutions
          </h3>

          <p className="text-stone-700 leading-8">
            Among the most popular choices today is the uPVC windows sliding door
            system. Sleek, space-saving, and elegant, it allows natural light to flood
            into interiors while offering smooth operation and security. At Arqtrace,
            we provide a variety of uPVC windows sliding door options designed for
            modern living.
          </p>

          <p className="text-stone-700 leading-8 mt-5">
            Being experienced uPVC doors and windows suppliers, we focus on delivering
            not just products, but complete solutions that align with the latest
            architectural trends. Our expertise ensures every installation enhances
            comfort, style, and energy efficiency.
          </p>
        </article>

        <article className="bg-white border border-stone-200 shadow-sm p-8">
          <h3 className="text-2xl font-serif font-bold mb-5">
            Winda uPVC – Innovation Meets Quality
          </h3>

          <p className="text-stone-700 leading-8">
            The Winda uPVC Windows and Doors range stands out for its craftsmanship,
            durability, and design flexibility. At Arqtrace, we bring these world-class
            products to clients who demand the very best. From hinged windows to custom
            uPVC sliding door systems, our range offers endless possibilities to
            transform any space.
          </p>

          <p className="text-stone-700 leading-8 mt-5">
            As leading uPVC doors and windows suppliers, we provide solutions that are
            eco-friendly, cost-effective, and built to last. Every installation is a
            long-term investment in style, security, and performance.
          </p>
        </article>

      </div>

      {/* CTA */}
      <article className="bg-[#2d1e18] text-white shadow-sm p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-5">
          Build a Better Future with Arqtrace
        </h2>

        <p className="text-stone-200 leading-8">
          Choosing Arqtrace means choosing a partner who understands the balance
          between design and functionality. With Winda uPVC Windows and Doors, you get
          modern living solutions that are sustainable, elegant, and secure. Whether
          it is a new construction project or a home upgrade, Arqtrace delivers premium
          results that truly stand the test of time.
        </p>
      </article>

    </div>
  </div>
</section>
    </main>
  );
}
