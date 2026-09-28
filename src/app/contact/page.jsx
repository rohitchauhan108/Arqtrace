import ContactContent from "@/components/pages/ContactContent";

export const metadata = {
  title: "Contact Arqtrace: Free Consultation in Dehradun",
  description: "Contact Arqtrace in Dehradun for premium aluminium & uPVC windows, doors, partitions, and outdoor furniture. Get a free consultation.",
  alternates: {
    canonical: "https://arqtrace.com/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://arqtrace.com/contact/",
    title: "Contact Arqtrace: Free Consultation in Dehradun",
    description: "Contact Arqtrace in Dehradun for premium aluminium & uPVC windows, doors, partitions, and outdoor furniture. Get a free consultation.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Arqtrace Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Arqtrace: Free Consultation in Dehradun",
    description: "Contact Arqtrace in Dehradun for premium aluminium & uPVC windows, doors, partitions, and outdoor furniture. Get a free consultation.",
    images: ["/logo.png"],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
