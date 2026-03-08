"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Extend Mold Life",
    body: "Advanced refurbishment and precision repair techniques restore molds to full production specification, adding years to asset life.",
  },
  {
    icon: Clock,
    title: "Reduce Downtime",
    body: "Rapid-response service agreements and 24/7 technical support keep your production line running with minimal unplanned stoppages.",
  },
  {
    icon: BarChart3,
    title: "Improve Reliability",
    body: "ISO 9001-aligned quality protocols and certified documentation give manufacturers measurable confidence in every mold we return.",
  },
];

export default function StrategicPartner() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Subtle gold glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.025] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">

          {/* Left: image */}
          <FadeIn direction="right">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/tire-mold-cnc.jpg"
                alt="Crown Precision CNC machining a tire mold"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111318]/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/10" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-[#0B0B0D]/80 backdrop-blur-sm border border-gold/20 p-4">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="h-px w-5 bg-gold" />
                    <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold">
                      Strategic Partner
                    </span>
                  </div>
                  <p className="text-smoke text-xs leading-relaxed">
                    Trusted by global tire manufacturers across 5 continents
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: content */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
                  Our Approach
                </span>
              </div>

              <h2
                className="font-heading font-black uppercase text-4xl md:text-5xl leading-none mb-6"
                style={{
                  background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                A Strategic
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Manufacturing
                </span>
                <br />
                Partner
              </h2>

              <p className="text-metal text-base leading-relaxed mb-10">
                Crown Precision Mold and Machine partners with tire manufacturers to
                extend mold life, reduce downtime, improve tire quality, and reduce
                replacement costs through advanced repair, refurbishment, precision
                machining, and responsive technical support.
              </p>
            </FadeIn>

            {/* Pillars */}
            <StaggerContainer className="space-y-4">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={staggerItem}
                >
                  <div className="flex gap-5 p-5 border border-white/[0.06] bg-[#0B0B0D]/60 hover:border-gold/20 hover:bg-charcoal/30 transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/[0.06] shrink-0 group-hover:border-gold/40 transition-colors duration-300">
                      <pillar.icon size={15} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold uppercase text-xs tracking-[0.18em] text-smoke mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-metal text-sm leading-relaxed">{pillar.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(200,154,61,0.3)] group"
                >
                  View Services
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 border border-steel/20 text-steel hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  Talk to Our Team
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
