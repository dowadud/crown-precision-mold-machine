import SectionHeading from "@/components/ui/SectionHeading";
import StatCard from "@/components/ui/StatCard";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 100, suffix: "+", label: "Years Combined Experience", decimals: 0 },
  { value: 35, suffix: "%", label: "Avg. Capex Savings", decimals: 0 },
  { value: 15, suffix: "%", label: "Longer Mold Lifespan", decimals: 0 },
  { value: 20, suffix: "%", label: "Defect Reduction", decimals: 0 },
];

export default function AboutSnapshot() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: text */}
          <div>
            <SectionHeading
              overline="About Crown Precision"
              title={"Built by\nIndustry\nVeterans"}
              subtitle="Founded by engineers with over a century of combined expertise in tire mold manufacturing and precision machining — Crown Precision was built to solve the problems that legacy suppliers couldn't."
            />

            <FadeIn delay={0.25}>
              <div className="space-y-4 mb-8">
                {[
                  "Deep expertise in mold design, machining, and industrial repair spanning the full tire mold lifecycle.",
                  "Commitment to quality, traceability, and ISO 9001-aligned standards across every service.",
                  "Strategic partnerships with global tire manufacturers including Goodyear, Bridgestone, Continental, Pirelli, and more.",
                  "Lean operations and advanced technology — robotic machining, AI-driven inspection, 3D scanning, and nondestructive testing.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-metal text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-gold hover:text-gold-light transition-colors group"
              >
                Our Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          {/* Right: image + stats */}
          <div className="space-y-px">
            {/* Primary image */}
            <FadeIn delay={0.15} direction="left">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/mold-repair-team.jpg"
                  alt="Crown Precision team repairing a tire mold"
                  fill
                  className="object-cover object-center"
                  quality={85}
                />
                {/* Dark overlay at bottom to blend into stats below */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0D]/20" />
                {/* Gold border accent */}
                <div className="absolute inset-0 border border-gold/10" />
              </div>
            </FadeIn>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-[#0B0B0D] p-6 relative group hover:bg-charcoal/50 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <StatCard
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    delay={0.1 * i}
                    decimals={stat.decimals}
                  />
                </div>
              ))}
            </div>

            {/* Mission quote */}
            <FadeIn delay={0.3}>
              <div className="bg-charcoal/60 border border-white/[0.04] p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px flex-1 bg-gold/20" />
                  <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-gold">Mission</span>
                  <div className="h-px flex-1 bg-gold/20" />
                </div>
                <p className="text-steel/70 text-sm leading-relaxed italic text-center">
                  &ldquo;To provide tire manufacturers with precision mold services that reduce costs,
                  extend production readiness, and support long-term operational excellence.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
