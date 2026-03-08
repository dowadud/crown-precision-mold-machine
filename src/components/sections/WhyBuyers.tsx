"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import {
  Target,
  Clock,
  FileCheck,
  Zap,
  RefreshCw,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Precision Repair to Spec",
    body: "Every mold we service is returned to documented production specification — measurable, traceable, and ready for immediate deployment.",
  },
  {
    icon: Clock,
    title: "Reduced Downtime",
    body: "Fast turnaround, rapid-response agreements, and 24/7 technical availability keep production lines running with minimal disruption.",
  },
  {
    icon: FileCheck,
    title: "Documented QA",
    body: "Full traceability on every job — ISO 9001-aligned inspection records, certification reports, and dimensional verification on delivery.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    body: "Lean operations and dedicated engineering resources let us move quickly without compromising quality or precision on any service.",
  },
  {
    icon: RefreshCw,
    title: "Lifecycle Support",
    body: "We track mold performance over time and apply proactive maintenance programs that extend operational life and reduce replacement frequency.",
  },
  {
    icon: Handshake,
    title: "Technical Partnership",
    body: "We operate as an extension of your engineering team — providing transparent communication, expert guidance, and long-term operational support.",
  },
];

export default function WhyBuyers() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-gold/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Header */}
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
              Procurement Confidence
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-end">
            <h2
              className="font-heading font-black uppercase text-4xl md:text-5xl leading-none"
              style={{
                background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Why Buyers
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Choose Crown
              </span>
            </h2>

            <p className="text-metal text-base leading-relaxed max-w-lg">
              Manufacturing procurement teams choose Crown Precision for one reason:
              we deliver documented, certified results on time — with the technical
              depth and responsiveness that major tire producers demand.
            </p>
          </div>
        </FadeIn>

        {/* Reason cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={staggerItem}>
              <div className="bg-[#0B0B0D] p-8 h-full group hover:bg-charcoal/40 transition-colors duration-300 relative">
                {/* Gold top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center border border-gold/20 bg-gold/[0.05] shrink-0 group-hover:border-gold/45 group-hover:bg-gold/[0.09] transition-all duration-300">
                    <reason.icon size={17} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-heading font-bold uppercase text-sm tracking-[0.15em] leading-tight pt-2.5"
                    style={{
                      background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {reason.title}
                  </h3>
                </div>

                <p className="text-metal text-sm leading-relaxed pl-[60px]">
                  {reason.body}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Bottom credibility strip */}
        <FadeIn delay={0.3}>
          <div className="mt-px bg-charcoal/30 border border-t-0 border-white/[0.04] px-8 py-5">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
              <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-metal/50 shrink-0">
                Quality Commitments
              </span>
              <div className="h-3 w-px bg-white/10 hidden md:block" />
              {[
                "ISO 9001-Aligned QA",
                "Full Traceability Documentation",
                "Certified on Delivery",
                "24/7 Technical Support",
                "Rapid-Response Agreements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gold/60" />
                  <span className="font-heading text-[10px] uppercase tracking-widest text-steel/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
