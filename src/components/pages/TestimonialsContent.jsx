"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Vineet Tyagi",
    role: "Director, Saanvi Imaging & Orthocare Centre",
    text: "When I started this centre, I needed a good, well-known brand for my windows. The Arqtrace Lumani Schuco team contacted me, I was really happy with the professional approach they had. The time commitment was excellent and in the end, the material delivered and installations done were perfectly up to the mark.",
    image: "/testimonial/vineet-tyagi.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 2,
    name: "Ar. D.K. Singh",
    role: "Residence Owner",
    text: "My special thanks to Mr. Puneet & Mr. Shashi, they have always been very helpful to me and they have supervised very well. My experience with them turned out to be very satisfactory because of their professional attitude. I've never faced any problems working with them while constructing my house and even after shifting.",
    image: "/testimonial/dk-singh.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 3,
    name: "Mr. Puneet Sharma",
    role: "Lemon Tree Hotel",
    text: "First time hum uPVC se switchover kare Schüco main, Schüco ka experience hume accha laga. Expensive hai par hume samajh main aaya ki jo expense humne kiya hai woh worthful hai. Quality, finish aur installation sab top-notch hai.",
    image: "/testimonial/puneet-sharma.webp",
    type: "image",
    rating: 5,
    location: "Mussoorie, Uttarakhand",
  },
  {
    id: 4,
    name: "Mr. Naman Gupta",
    role: "Hotelier, The Solitaire",
    text: "This is my house and I installed the Schuco Arqtrace Lumani windows here. It's been a wonderful experience working with Puneet Bhagat ji and Shashi ji. Their products are quite good and aesthetically it's very pleasing. Highly recommended!",
    image: "/testimonial/naman-gupta.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 5,
    name: "Ar. Manish Kala",
    role: "Principal Architect, Edifice Design Studio",
    text: "We chose Arqtrace Schuco to achieve sound insulation of up to 102 decibels, far surpassing the standard 32 decibels, while also executing a superbly designed facade. The attention to detail and execution quality is outstanding.",
    image: "/project/p2/3.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 6,
    name: "Mr. Anshuman Banerjee",
    role: "Residence Owner, ATS Doon",
    text: "When I met with Mr. Puneet for discussing the installation of these windows, I was very happy because he was able to suggest me a lot of things which aesthetically met my requirements. The final result is beyond what I had imagined.",
    image: "/project/p1/4.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
  {
    id: 7,
    name: "Mr. Harkaran Singh",
    role: "General Manager, Hyatt Regency",
    text: "Lumani Schüco has done a fantastic job in terms of understanding what we wanted and they've done a great job by amalgamating that design to our concept and adding on to the luxury of the hotel. Highly recommended for premium hospitality projects.",
    image: "/project/lemon-tree.webp",
    type: "image",
    rating: 5,
    location: "Dehradun, Uttarakhand",
  },
];

const videoTestimonialsData = [
  {
    id: 1,
    client: "Nikhil Sobti",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642877/Mr_Nitin_Sobti_ywq7nw.mp4",
  },
  {
    id: 2,
    client: "Naman Gupta",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642833/Mr._Naman_Gupta_uwygsx.mp4",
  },
  {
    id: 3,
    client: "Diablo Ar Manish Kala Stallin Commercial Doon Extended",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642791/Diablo_Ar._Manish_Kala_Stallion_Commercials_Doon_EXTENDED_d0njlm.mp4",
  },
  {
    id: 4,
    client: "Dr Vineet Tyagi",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642781/Dr._Vineet_Tyagi_rbgk1g.mp4",
  },
  {
    id: 5,
    client: "Hyatt Regency",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642761/Damsun_Update_Hyatt_Regency_lmv26s.mp4",
  },
  {
    id: 6,
    client: "Carbonado Residence Panipat",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642750/Carbonado_Residence_Panipat_nfpxhr.mp4",
  },
  {
    id: 7,
    client: "Mr Anshuman",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642750/Carbonado_Residence_Panipat_nfpxhr.mp4",
  },
  {
    id: 8,
    client: "Dr Ak Singh",
    videoUrl:
      "https://res.cloudinary.com/dxfuimb1a/video/upload/v1787642730/Ar._D.K._Singh_ATS_Doon_z0v9ru.mp4",
  },
];

const TestimonialsContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[500px] lg:min-h-[650px] w-full overflow-hidden flex items-center select-none"
        style={{
          backgroundImage: "url('/images/10.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/55" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
                Testimonials
              </span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 mt-4 leading-[1.15] tracking-tight max-w-4xl mx-auto">
              Voices of Our Happy Clients
            </h1>

            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
              Hear from homeowners, architects, and businesses who trusted Arqtrace
              with their premium window, door, and outdoor living solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "600+", label: "Projects Delivered" },
              { number: "13+", label: "Years Experience" },
              { number: "4.9★", label: "Average Rating" },
              { number: "10Y", label: "Max Warranty" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-[#2d1e18] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm font-sans uppercase tracking-widest text-[#bd845c] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Direct-Play Video Grid (No Lightbox / No Thumbnail Overlay) */}
      <section
        className="relative py-24 lg:py-32 bg-stone-50 overflow-hidden select-none"
        style={{
          backgroundImage: "url('/projects-bg.png')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
                Video Testimonials
              </span>
              <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight max-w-3xl leading-tight">
              Watch What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonialsData.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="flex flex-col"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg bg-black border border-stone-200">
                  <video
                    src={video.videoUrl}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support HTML5 video streaming.
                  </video>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-serif font-bold text-[#2d1e18] text-base md:text-lg uppercase tracking-wide">
                    {video.client}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Testimonials Grid */}
      <section className="relative py-24 lg:py-32 bg-white select-none">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="flex items-start gap-5">
              <div className="flex items-center gap-2 pt-2 shrink-0 [writing-mode:vertical-lr] rotate-180">
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c] whitespace-nowrap">
                  Client Stories
                </span>
                <span className="w-1.5 h-1.5 bg-[#bd845c]" />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d1e18] tracking-tight leading-tight">
                  Words That Inspire Us
                </h2>
                <p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
                  Every testimonial is a reminder of why we obsess over quality,
                  craftsmanship, and customer care.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group bg-stone-50 rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span className="text-[#bd845c] text-xs">
                      {"★".repeat(t.rating)}
                    </span>
                  </div>
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-white/70" />
                </div>

                <div className="p-6 md:p-7">
                  <p className="text-stone-600 text-sm md:text-[15px] leading-relaxed font-sans min-h-[100px]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mt-6 pt-5 border-t border-stone-200/70 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-[#2d1e18] text-base md:text-lg uppercase tracking-wide">
                        {t.name}
                      </h4>
                      <p className="text-[#bd845c] text-xs font-semibold uppercase tracking-wider mt-0.5">
                        {t.role}
                      </p>
                      <p className="text-stone-400 text-xs mt-1 font-sans">
                        {t.location}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-stone-200">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden select-none"
        style={{
          backgroundImage: "url('/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#2d1e18]/85" />
        <div className="container mx-auto px-6 lg:px-16 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#bd845c]">
              Let&apos;s Talk
            </span>
            <span className="w-1.5 h-1.5 bg-[#bd845c]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 max-w-4xl mx-auto leading-[1.15]">
            Ready to Start Your Project With Us?
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
            Join the hundreds of happy clients who&apos;ve transformed their spaces with
            Arqtrace. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#bd845c] hover:bg-[#a6704c] text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+917888864955"
              className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 hover:border-white hover:bg-white/10 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              Call +91 78888 64955
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsContent;