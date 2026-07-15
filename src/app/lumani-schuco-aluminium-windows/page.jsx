import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Arqtrace Lumani Schuco Aluminium Windows and Doors | Premium Aluminium Systems",
  description:
    "Discover Arqtrace Lumani Schuco aluminium windows and doors with advanced German technology, superior insulation, security, and modern design for homes and commercial spaces.",
};

const highlights = [
  "High strength with slim architectural profiles",
  "Thermal efficiency and acoustic insulation",
  "Precision-engineered custom systems",
  "Secure, sustainable, low-maintenance performance",
];

export default function LumaniSchucoAluminiumWindowsPage() {
  return (
    <main className="bg-[#fbf9f4] text-[#2d1e18] pt-36 lg:pt-44 pb-24">
      <section className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="bg-white border border-stone-200 shadow-sm p-2">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=562,fit=crop/mk3yjJGoMeSGWZ6J/screenshot-2023-11-18-165632-YZ9774Q0KMS4WZ8x.png"
                alt="Lumani Schuco aluminium windows and doors"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#bd845c] mb-3">
                Lumani Schuco
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-4">
                Arqtrace: Premium Lumani Schuco Aluminium Windows and Doors
              </h1>
              <p className="text-stone-600 leading-relaxed">
                When it comes to modern architecture, nothing defines style, durability, and
                efficiency better than high-quality windows and doors. At Arqtrace, we
                specialise in providing Lumani Schuco Aluminium Windows and Doors, designed to
                enhance both residential and commercial spaces with a perfect blend of aesthetics
                and performance.
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
          Why Choose Aluminium for Windows and Doors?
        </h2>

        <p className="text-stone-700 leading-8">
          Aluminium has become the preferred material for architects,
          homeowners, and builders worldwide. Unlike traditional wood or
          uPVC, aluminium offers unmatched strength, slimmer profiles, and
          exceptional durability. With premium Aluminium Windows and Doors,
          you enjoy superior insulation, enhanced security, and timeless
          aesthetics without compromising on performance.
        </p>

        <p className="text-stone-700 leading-8 mt-5">
          As one of the trusted Aluminium window manufacturers, Arqtrace
          ensures every frame is engineered with precision and built to meet
          international quality standards. Whether for a contemporary home,
          luxury villa, or large-scale commercial project, our systems are
          designed to deliver elegance, functionality, and long-lasting
          value.
        </p>
      </article>

      {/* Two Column Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <article className="bg-white border border-stone-200 shadow-sm p-8">
          <h3 className="text-2xl font-serif font-bold mb-5">
            The Lumani Schuco Advantage
          </h3>

          <p className="text-stone-700 leading-8">
            The Lumani Schuco range is globally recognized for innovation,
            engineering excellence, and premium German technology. Every
            Aluminium Door and Window system is designed to provide thermal
            insulation, superior soundproofing, enhanced security, and
            outstanding durability, making it ideal for modern architecture.
          </p>

          <p className="text-stone-700 leading-8 mt-5">
            Our expertise as Aluminium Door manufacturers enables us to
            deliver completely customized solutions that integrate seamlessly
            with contemporary architectural designs. From minimalist sliding
            systems to expansive panoramic windows, we create elegant spaces
            that redefine modern living.
          </p>
        </article>

        <article className="bg-white border border-stone-200 shadow-sm p-8">
          <h3 className="text-2xl font-serif font-bold mb-5">
            Commitment to Quality and Service
          </h3>

          <p className="text-stone-700 leading-8">
            At Arqtrace, quality is more than a promise—it is the foundation
            of everything we deliver. We stand apart from other Aluminium
            window manufacturers through meticulous craftsmanship,
            sustainable manufacturing practices, and uncompromising attention
            to detail, ensuring every installation exceeds expectations.
          </p>

          <p className="text-stone-700 leading-8 mt-5">
            As experienced Aluminium Door manufacturers, we combine
            architectural elegance with exceptional functionality. Every
            installation is completed with precision to provide smooth
            operation, energy efficiency, maximum security, and a flawless
            finish that lasts for decades.
          </p>
        </article>

      </div>

      {/* CTA */}
      <article className="bg-[#2d1e18] text-white shadow-sm p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-5">
          Transforming Spaces with Aluminium Windows and Doors
        </h2>

        <p className="text-stone-200 leading-8">
          Choosing Arqtrace means investing in premium craftsmanship,
          innovative German engineering, and architectural excellence. As one
          of the leading Aluminium window manufacturers and trusted
          Aluminium Door manufacturers, we deliver tailor-made solutions that
          combine aesthetics, durability, and performance. Whether you are
          designing a luxury residence, renovating a modern home, or
          developing a commercial landmark, Lumani Schuco systems are built
          to stand the test of time while elevating every space they become a
          part of.
        </p>
      </article>

    </div>
  </div>
</section>
    </main>
  );
}
