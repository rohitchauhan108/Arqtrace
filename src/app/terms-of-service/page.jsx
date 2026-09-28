export const metadata = {
  title: "Terms of Service & Conditions: Arqtrace Pvt. Ltd.",
  description: "Arqtrace Pvt. Ltd. terms of service: usage terms, service conditions, payment terms, liability, and your rights as a customer.",
  alternates: {
    canonical: "https://arqtrace.com/terms-of-service/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/terms-of-service/",
    title: "Terms of Service & Conditions: Arqtrace Pvt. Ltd.",
    description: "Arqtrace Pvt. Ltd. terms of service: usage terms, service conditions, payment terms, liability, and your rights as a customer.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arqtrace Terms of Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Conditions: Arqtrace Pvt. Ltd.",
    description: "Arqtrace Pvt. Ltd. terms of service: usage terms, service conditions, payment terms, liability, and your rights as a customer.",
    images: ["/logo.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-24">
      <section className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2d1e18] mb-6">Terms of Service</h1>
        <p className="text-stone-600 leading-relaxed">This page is active. Share your final terms copy and it will be fully formatted here.</p>
      </section>
    </main>
  );
}
