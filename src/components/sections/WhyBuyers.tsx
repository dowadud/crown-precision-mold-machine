"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import {
  Target,
  Clock,
  FileCheck,
  RefreshCw,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Precision Repair to Spec",
    body: "Every mold returned to documented production specification — dimensionally verified, traceable, and cleared for immediate deployment.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround, Minimal Disruption",
    body: "Lean operations, dedicated engineering resources, and rapid-response agreements minimize production downtime on every service engagement.",
  },
  {
    icon: FileCheck,
    title: "Documented QA on Delivery",
    body: "ISO 9001-aligned inspection records, dimensional verification reports, and certification documentation delivered with every completed mold.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability at Every Stage",
    body: "Full traceability from intake to release. Our engineering team owns the process end to end — no subcontracting, no handoffs, no gaps.",
  },
  {
    icon: RefreshCw,
    title: "Proactive Lifecycle Management",
    body: "We track mold performance over time and apply scheduled maintenance programs that extend operational life and reduce unplanned replacement.",
  },
  {
    icon: Handshake,
    title: "Long-Term Technical Partnership",
    body: "Dedicated account management, tailored service agreements, and continuous improvement programs aligned to your production and procurement goals.",
  },
];

export default function WhyBuyers() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold" />
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
              Why Crown
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
              What Manufacturers
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rely on Us For
              </span>
            </h2>

            <p className="text-metal text-base leading-relaxed max-w-lg">
              Major tire producers choose Crown Precision because we deliver
              certified, documented results on time — with the engineering depth
              and operational accountability that global manufacturing demands.
            </p>
          </div>
        </FadeIn>

        {/* Reason cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={staggerItem}>
              <div className="bg-[#0B0B0D] p-7 h-full group hover:bg-charcoal/40 transition-colors duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/[0.05] mb-5 shrink-0 group-hover:border-gold/40 group-hover:bg-gold/[0.08] transition-all duration-300">
                  <reason.icon size={16} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading font-bold uppercase text-xs tracking-[0.18em] text-smoke mb-3">
                  {reason.title}
                </h3>

                <p className="text-metal text-sm leading-relaxed">
                  {reason.body}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
