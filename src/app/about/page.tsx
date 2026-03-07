import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Target, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Crown Precision Mold & Machine",
  description:
    "Founded by industry veterans with 100+ years of combined experience in tire mold manufacturing and precision machining.",
};

const values = [
  {
    icon: Shield,
    title: "Commitment to Quality",
    description:
      "Exceptional mold quality and reliable service are non-negotiable. Every job is executed to ISO 9001-aligned standards with full documentation and traceability.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description:
      "Our founders bring deep expertise in mold design, CNC machining, laser welding, and process innovation — applied to every project without compromise.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "We invest in advanced technology — robotic machining, AI-driven inspection, and smart manufacturing — to continuously improve results for our clients.",
  },
  {
    icon: Users,
    title: "Long-Term Partnership",
    description:
      "We build lasting relationships through personalized account management, proactive support, and continuous improvement programs tailored to each client.",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Company Founded",
    description:
      "Crown Precision Mold & Machine established by industry veterans with over 100 years of combined expertise in tire mold manufacturing.",
  },
  {
    year: "2026",
    title: "First Strategic Partnerships",
    description:
      "Rapid-response service agreements established with leading global tire manufacturers including Goodyear, Bridgestone, and Continental.",
  },
  {
    year: "2026",
    title: "ISO 9001 Quality Framework",
    description:
      "Full implementation of ISO 9001-aligned quality assurance protocols, traceability documentation, and certification procedures.",
  },
  {
    year: "2026",
    title: "Advanced Technology Integration",
    description:
      "Deployment of AI-driven defect detection, robotic machining arms, and 3D scanning to deliver next-generation precision.",
  },
  {
    year: "2026",
    title: "Global Client Reach",
    description:
      "Expanded client base to serve tire manufacturers on five continents including Pirelli, Yokohama, Toyo Tires, and JK Tornel.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20 bg-[#0B0B0D]">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="max-w-3xl">
            <SectionHeading
              overline="About Us"
              title={"Built by\nExperts,\nDriven by\nPrecision"}
              subtitle="Crown Precision Mold & Machine was founded by engineers who have spent careers in the tire mold industry — and built a company to solve problems that legacy suppliers couldn't."
            />
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="py-20 md:py-28 bg-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-gold" />
                  <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
                    Our Story
                  </span>
                </div>
                <h2
                  className="font-heading font-black uppercase text-3xl md:text-4xl leading-tight mb-6"
                  style={{
                    background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Founded by Industry Veterans
                </h2>
                <div className="space-y-4 text-metal text-sm leading-relaxed">
                  <p>
                    Crown Precision Mold & Machine was established by engineers
                    with over 100 years of combined experience in tire mold
                    manufacturing, precision machining, and industrial operations.
                    Our founders have held leadership roles at top-tier tire mold
                    manufacturers — giving them an unmatched understanding of the
                    technical requirements, operational pressures, and quality
                    standards that global tire producers demand.
                  </p>
                  <p>
                    Having identified critical gaps in the market — slow response
                    times, inconsistent quality, and a lack of technical depth
                    from existing service providers — they built Crown Precision
                    with a clear mandate: deliver precision mold services that
                    genuinely protect production performance.
                  </p>
                  <p>
                    From day one, we positioned ourselves as a technical partner,
                    not just a vendor. Our rapid-response model, ISO 9001-aligned
                    quality systems, and long-term partnership approach have
                    enabled us to quickly earn trust with some of the most
                    demanding tire manufacturers in the world.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {milestones.map((milestone, i) => (
                  <div
                    key={i}
                    className="flex gap-5 p-5 border border-white/[0.06] bg-charcoal/20 hover:border-gold/20 hover:bg-charcoal/40 transition-all duration-300"
                  >
                    <div className="shrink-0">
                      <span
                        className="font-heading font-black text-xl"
                        style={{
                          background: "linear-gradient(135deg, #C89A3D, #E0B45C)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold uppercase text-sm tracking-wider text-smoke mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-metal text-xs leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <SectionHeading
            overline="Our Values"
            title={"What Drives\nEverything We Do"}
            align="center"
          />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
            {values.map((value) => (
              <div key={value.title}>
                <div className="bg-[#0B0B0D] p-8 h-full hover:bg-charcoal/40 transition-colors duration-300 group">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/5 mb-5 group-hover:border-gold/40 transition-colors">
                    <value.icon size={16} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold uppercase text-sm tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-metal text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
