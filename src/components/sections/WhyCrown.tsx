"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  TrendingDown,
  TrendingUp,
  CheckCircle,
  Timer,
  Target,
  Users,
} from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    metric: "25–35%",
    label: "Reduction in mold-related capex",
    description:
      "Precision refurbishment eliminates full mold replacement, delivering measurable capital savings.",
  },
  {
    icon: TrendingUp,
    metric: "15%",
    label: "Average increase in mold lifespan",
    description:
      "Advanced refurbishment techniques extend operational mold life beyond industry baselines.",
  },
  {
    icon: Target,
    metric: "20%",
    label: "Reduction in tire production defects",
    description:
      "High-quality molds improve uniformity, consistency, and overall product quality.",
  },
  {
    icon: Timer,
    metric: "24/7",
    label: "Technical support availability",
    description:
      "Rapid-response agreements and round-the-clock engineering support minimize disruption.",
  },
  {
    icon: CheckCircle,
    metric: "ISO 9001",
    label: "Quality standards compliance",
    description:
      "Strict QA protocols, traceability documentation, and certification ensure standards.",
  },
  {
    icon: Users,
    metric: "5",
    label: "Continents served globally",
    description:
      "Scalable services and operational flexibility support global standards and requirements.",
  },
];

export default function WhyCrown() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Top: full-width feature image */}
        <FadeIn className="mb-16">
          <div className="relative w-full aspect-[21/7] overflow-hidden">
            <Image
              src="/images/mold-before-after.jpg"
              alt="Tire mold before and after refurbishment showing performance improvement"
              fill
              className="object-cover object-center"
              quality={85}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0B0B0D]/60" />
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-gold" />
                  <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
                    Before & After
                  </span>
                </div>
                <p className="font-heading font-black uppercase text-2xl md:text-3xl text-smoke max-w-lg leading-tight">
                  Worn molds restored to
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(135deg, #C89A3D, #E0B45C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    full production spec.
                  </span>
                </p>
              </div>
            </div>
            <div className="absolute inset-0 border border-gold/10" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left: heading + quote */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              overline="Why Crown Precision"
              title={"Results That\nProtect Your\nProduction"}
              subtitle="We measure success by the outcomes we deliver — lower costs, higher yields, and more reliable manufacturing performance."
            />

            <FadeIn delay={0.3}>
              <div className="border border-gold/15 bg-gold/[0.03] p-6 mb-6">
                <p className="text-steel/70 text-sm leading-relaxed italic">
                  &ldquo;Crown Precision exemplifies effective collaboration —
                  integrating specialized expertise into the tire value chain to
                  reduce defects, extend asset life, and support operational
                  excellence at scale.&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px w-6 bg-gold/40" />
                  <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold">
                    Industry Partnership Perspective
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Secondary image */}
            <FadeIn delay={0.4}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/engineers-inspection.jpg"
                  alt="Engineers inspecting precision mold components"
                  fill
                  className="object-cover object-center"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/40 to-transparent" />
                <div className="absolute inset-0 border border-gold/10" />
              </div>
            </FadeIn>
          </div>

          {/* Right: outcome cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-px bg-white/[0.04]">
            {outcomes.map((item) => (
              <motion.div key={item.label} variants={staggerItem}>
                <div className="bg-[#0B0B0D] p-7 h-full group hover:bg-charcoal/40 transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/5 shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                      <item.icon size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div
                        className="font-heading font-black text-3xl leading-none"
                        style={{
                          background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.metric}
                      </div>
                      <div className="font-heading font-semibold text-xs uppercase tracking-wider text-smoke mt-0.5">
                        {item.label}
                      </div>
                    </div>
                  </div>
                  <p className="text-metal text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
