"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
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
      "Precision refurbishment eliminates the need for full mold replacement, delivering measurable capital savings.",
  },
  {
    icon: TrendingUp,
    metric: "15%",
    label: "Average increase in mold lifespan",
    description:
      "Advanced refurbishment techniques extend operational mold life beyond industry baseline expectations.",
  },
  {
    icon: Target,
    metric: "20%",
    label: "Reduction in tire production defects",
    description:
      "High-quality molds improve uniformity, consistency, and overall product quality across production runs.",
  },
  {
    icon: Timer,
    metric: "24/7",
    label: "Technical support availability",
    description:
      "Rapid-response service agreements and round-the-clock engineering support minimize production disruption.",
  },
  {
    icon: CheckCircle,
    metric: "ISO 9001",
    label: "Quality standards compliance",
    description:
      "Strict QA protocols, traceability documentation, and certification ensure regulatory and production standards.",
  },
  {
    icon: Users,
    metric: "5",
    label: "Continents served globally",
    description:
      "Scalable services and operational flexibility support diverse standards and requirements across global markets.",
  },
];

export default function WhyCrown() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          {/* Left: heading + quote */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              overline="Why Crown Precision"
              title={"Results That\nProtect Your\nProduction"}
              subtitle="We measure success by the outcomes we deliver — lower costs, higher yields, and more reliable manufacturing performance."
            />

            <FadeIn delay={0.3}>
              <div className="border border-gold/15 bg-gold/[0.03] p-6">
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
                          background:
                            "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
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
                  <p className="text-metal text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
