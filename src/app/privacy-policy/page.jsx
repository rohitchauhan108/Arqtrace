export const metadata = {
  title: "Privacy Policy & Data Protection: Arqtrace Pvt. Ltd.",
  description: "Arqtrace Pvt. Ltd. privacy policy: how we collect, use, and protect visitor and customer information. Your data privacy is important.",
  alternates: {
    canonical: "https://arqtrace.com/privacy-policy/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/privacy-policy/",
    title: "Privacy Policy & Data Protection: Arqtrace Pvt. Ltd.",
    description: "Arqtrace Pvt. Ltd. privacy policy: how we collect, use, and protect visitor and customer information. Your data privacy is important.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Arqtrace Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Protection: Arqtrace Pvt. Ltd.",
    description: "Arqtrace Pvt. Ltd. privacy policy: how we collect, use, and protect visitor and customer information. Your data privacy is important.",
    images: ["/logo.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-40 pb-24">
      <section className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2d1e18] mb-6">Privacy Policy</h1>
        <p className="text-stone-600 leading-relaxed">This page is active. Share your final policy copy and it will be fully formatted here.</p>
      </section>
    </main>
  );
}
