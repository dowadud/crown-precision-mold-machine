import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import { Globe, Factory, Truck, Zap, Award, TrendingUp, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries Served | Crown Precision Mold & Machine",
  description:
    "Serving global tire manufacturers, production facilities, OEM brands, and supply chain teams across five continents.",
};

const clients = [
  "Goodyear",
  "Bridgestone Firestone",
  "Continental Tire",
  "Pirelli",
  "Yokohama",
  "Toyo Tires",
  "JK Tornel",
];

const industries = [
  {
    icon: Globe,
    title: "Global Tire Manufacturers",
    description:
      "We serve premium and mid-tier global tire brands operating production facilities across five continents. Our scalable service model and operational flexibility allow us to handle diverse standards, specifications, and customized requirements across markets.",
    detail:
      "Our partnerships with industry leaders like Goodyear, Bridgestone Firestone, Continental Tire, and Pirelli demonstrate our ability to meet the quality and performance expectations of the world's most demanding tire manufacturers.",
  },
  {
    icon: Factory,
    title: "Production Facilities & Plant Operations",
    description:
      "Plant managers, operations leaders, and production teams rely on Crown Precision for rapid-response mold services that protect uptime. We understand the cost of every hour of unplanned downtime.",
    detail:
      "Our 24/7 technical support and rapid-response service agreements are designed specifically to reduce the mean time to recovery — keeping production lines moving.",
  },
  {
    icon: Truck,
    title: "Commercial & Specialty Tire Producers",
    description:
      "Manufacturers of truck, bus, OTR, agricultural, industrial, and specialty tire products require heavy-duty mold maintenance capabilities and an understanding of the unique geometries and materials involved.",
    detail:
      "We have experience across the full range of tire mold types — from passenger car segment molds to large OTR two-piece molds — and understand the service demands of each category.",
  },
  {
    icon: Zap,
    title: "Electric Vehicle Tire Manufacturers",
    description:
      "The growing EV market is creating new demand for specialized tire designs with tighter performance tolerances and sustainability requirements. Crown Precision supports EV tire producers with advanced mold capabilities.",
    detail:
      "We invest in sustainable manufacturing materials, eco-friendly cleaning processes, and smart manufacturing technologies that align with the sustainability commitments of EV-focused tire brands.",
  },
  {
    icon: Award,
    title: "Premium & Motorsport Tire Brands",
    description:
      "High-performance tire manufacturers where mold precision directly affects product consistency, safety ratings, and competitive performance. Our tolerances and quality standards match the demands of premium production.",
    detail:
      "From ultra-high-performance summer tires to motorsport slicks, we understand that mold quality at this level is non-negotiable — and we build every service program accordingly.",
  },
  {
    icon: TrendingUp,
    title: "Procurement & Supply Chain Leaders",
    description:
      "Procurement teams and supply chain managers seeking a certified, reliable mold service partner with transparent pricing, documented quality systems, and a track record of cost savings.",
    detail:
      "Our ISO 9001-aligned QA, full traceability documentation, and demonstrable ROI — including 25–35% cost savings on mold capex — make the business case clear.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-20 bg-[#0B0B0D]">
      {/* Hero with image */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/global-tire-industry.jpg"
          alt="Global tire industry — Crown Precision serves manufacturers on five continents"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/60 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 w-full">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Industries Served</span>
            </div>
            <h1
              className="font-heading font-black uppercase text-5xl md:text-6xl leading-none"
              style={{
                background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Serving the
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Global Tire Industry
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Client strip */}
      <section className="py-8 bg-charcoal/20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck size={14} className="text-gold" />
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold">Trusted Partners</span>
            </div>
            <div className="h-6 w-px bg-white/10 hidden md:block" />
            {clients.map((client) => (
              <span
                key={client}
                className="font-heading font-bold text-xs uppercase tracking-widest text-steel/50"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image showcase */}
      <section className="pt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-3 gap-px bg-white/[0.04] mb-16">
            {[
              { src: "/images/tire-production-floor.jpg", label: "Production Facilities", alt: "Tire manufacturing production floor" },
              { src: "/images/mold-repair-workers.jpg", label: "Mold Service Teams", alt: "Tire mold repair workers" },
              { src: "/images/ev-tire-sustainable.jpg", label: "EV & Sustainable", alt: "Electric vehicle sustainable tire" },
            ].map((img) => (
              <div key={img.label} className="relative aspect-[3/2] overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" quality={80} />
                <div className="absolute inset-0 bg-[#0B0B0D]/50 group-hover:bg-[#0B0B0D]/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-px w-4 bg-gold" />
                  <span className="font-heading text-[10px] uppercase tracking-widest text-gold">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries detail */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="divide-y divide-white/[0.04]">
            {industries.map((industry, i) => (
              <FadeIn key={industry.title} delay={0.05 * (i % 3)}>
                <div className="py-10 grid md:grid-cols-[auto_1fr_1fr] gap-8 items-start hover:bg-charcoal/10 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 transition-colors duration-300 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 bg-gold/5 shrink-0 group-hover:border-gold/40 transition-colors">
                    <industry.icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase text-xl tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-metal text-sm leading-relaxed">{industry.description}</p>
                  </div>
                  <div className="border-l border-white/[0.06] pl-8 hidden md:block">
                    <p className="text-metal/70 text-sm leading-relaxed italic">{industry.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
