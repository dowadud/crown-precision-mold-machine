"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cpu,
  Zap,
  DiscIcon,
  ScanLine,
  Activity,
  Sparkles,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";

const coreCapabilities = [
  { icon: Cpu,           label: "CNC Precision\nMachining" },
  { icon: Zap,           label: "Laser\nWelding" },
  { icon: DiscIcon,      label: "Precision\nGrinding" },
  { icon: ScanLine,      label: "3D Mold\nScanning" },
  { icon: Activity,      label: "Non-Destructive\nTesting" },
  { icon: Sparkles,      label: "Advanced Mold\nCleaning" },
  { icon: ClipboardCheck,label: "Quality\nInspection" },
  { icon: BadgeCheck,    label: "Certification &\nTraceability" },
];

const capabilityGroups = [
  {
    category: "Machining & Repair",
    items: [
      "CNC Milling & Turning",
      "Laser Welding & Cladding",
      "Precision Grinding",
      "EDM (Electrical Discharge Machining)",
      "Hard Chrome Plating Prep",
    ],
  },
  {
    category: "Inspection & Quality",
    items: [
      "3D Coordinate Measurement (CMM)",
      "Nondestructive Testing (NDT)",
      "Ultrasonic Flaw Detection",
      "AI-Driven Defect Detection",
      "ISO 9001-Aligned Certification",
      "Full Traceability Documentation",
    ],
  },
  {
    category: "Cleaning & Treatment",
    items: [
      "Ultrasonic Cleaning",
      "Eco-Friendly Solvent Treatment",
      "Bead & Shot Blasting",
      "Mold Release Preparation",
      "Anti-Corrosion Coating",
    ],
  },
  {
    category: "Technology & Lifecycle",
    items: [
      "Robotic Machining Arms",
      "Performance Data Analytics",
      "Smart Manufacturing Integration",
      "Proactive Maintenance Scheduling",
      "Rapid-Response Agreements",
      "24/7 Technical Support",
    ],
  },
];

export default function TechnicalCapabilities() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">

        {/* Section header */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start mb-16">
          <SectionHeading
            overline="Technology & Capabilities"
            title={"Advanced\nTechnology for\nPrecision Results"}
            subtitle="Our facility combines advanced machining, inspection, and automation technology with deep engineering expertise to deliver results at the highest level of precision."
          />

          <FadeIn delay={0.2} direction="left">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/robotic-ai-machining.jpg"
                alt="Robotic AI-driven precision machining system"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0B0D]/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/10" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-px w-6 bg-gold" />
                  <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold">
                    Advanced Automation
                  </span>
                </div>
                <p className="text-steel/70 text-xs">
                  Robotic machining arms + AI-driven defect detection
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Core 7 Capabilities Icon Grid ── */}
        <FadeIn className="mb-16">
          <div className="border border-white/[0.06] bg-charcoal/20 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
                Core Capabilities
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {coreCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="flex flex-col items-center text-center gap-3 p-4 border border-white/[0.05] bg-[#0B0B0D]/50 hover:border-gold/25 hover:bg-charcoal/40 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-gold/20 bg-gold/[0.06] group-hover:border-gold/50 group-hover:bg-gold/[0.1] transition-all duration-300">
                    <cap.icon size={18} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.15em] text-smoke leading-tight whitespace-pre-line">
                    {cap.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Image strip */}
        <FadeIn className="mb-12">
          <div className="grid grid-cols-2 gap-px bg-white/[0.04]">
            <div className="relative aspect-[16/6] overflow-hidden group">
              <Image
                src="/images/cnc-machining-sparks.jpg"
                alt="CNC machining precision mold work"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                quality={80}
              />
              <div className="absolute inset-0 bg-[#0B0B0D]/50" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="h-px w-4 bg-gold" />
                <span className="font-heading text-[10px] uppercase tracking-widest text-gold">CNC Machining</span>
              </div>
            </div>
            <div className="relative aspect-[16/6] overflow-hidden group">
              <Image
                src="/images/3d-scanning-inspection.jpg"
                alt="3D scanning and inspection technology"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                quality={80}
              />
              <div className="absolute inset-0 bg-[#0B0B0D]/50" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="h-px w-4 bg-gold" />
                <span className="font-heading text-[10px] uppercase tracking-widest text-gold">3D Inspection</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Full capability groups */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {capabilityGroups.map((cap) => (
            <motion.div key={cap.category} variants={staggerItem}>
              <div className="bg-[#0B0B0D] p-7 h-full hover:bg-charcoal/40 transition-all duration-300 group relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-4 bg-gold" />
                  <h3 className="font-heading font-bold uppercase text-xs tracking-[0.2em] text-gold">
                    {cap.category}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                      <span className="text-metal text-sm group-hover:text-steel/80 transition-colors duration-200">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
