import type { Metadata } from "next";
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
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="max-w-3xl">
            <SectionHeading
              overline="Industries Served"
              title={"Serving the\nGlobal Tire\nIndustry"}
              subtitle="From global OEM brands to regional production facilities — Crown Precision delivers precision mold services that meet the technical and operational demands of every segment of the tire manufacturing industry."
            />
          </div>
        </div>
      </section>

      {/* Client strip */}
      <section className="py-10 bg-charcoal/20 border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck size={14} className="text-gold" />
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold">
                Trusted Partners
              </span>
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

      {/* Industries detail */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-px bg-white/[0.03]">
            {industries.map((industry, i) => (
              <FadeIn key={industry.title} delay={0.05 * (i % 3)}>
                <div className="bg-[#0B0B0D] p-8 md:p-10 grid md:grid-cols-[auto_1fr_1fr] gap-8 items-start hover:bg-charcoal/20 transition-all duration-300 group border-b border-white/[0.04]">
                  <div className="w-12 h-12 flex items-center justify-center border border-gold/20 bg-gold/5 shrink-0 group-hover:border-gold/40 transition-colors">
                    <industry.icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase text-xl tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-metal text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  <div className="border-l border-white/[0.06] pl-8 hidden md:block">
                    <p className="text-metal/70 text-sm leading-relaxed italic">
                      {industry.detail}
                    </p>
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
