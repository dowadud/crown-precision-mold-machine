"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";
import Image from "next/image";

const capabilities = [
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
    category: "Inspection & Testing",
    items: [
      "3D Coordinate Measurement (CMM)",
      "Nondestructive Testing (NDT)",
      "Ultrasonic Flaw Detection",
      "Surface Roughness Analysis",
      "Dimensional Tolerance Verification",
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
    category: "Quality & Certification",
    items: [
      "ISO 9001-Aligned Protocols",
      "Full Traceability Documentation",
      "Certification & Release Records",
      "AI-Driven Defect Detection",
      "Performance Analytics Reporting",
    ],
  },
  {
    category: "Technology & Automation",
    items: [
      "Robotic Machining Arms",
      "AI Defect Detection Systems",
      "Lean Manufacturing Principles",
      "Performance Data Analytics",
      "Smart Manufacturing Capabilities",
    ],
  },
  {
    category: "Support & Lifecycle",
    items: [
      "24/7 Technical Support",
      "Rapid-Response Agreements",
      "Proactive Maintenance Scheduling",
      "Mold Performance Tracking",
      "Long-Term Partnership Programs",
    ],
  },
];

export default function TechnicalCapabilities() {
  return (
    <section className="py-24 md:py-32 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start mb-16">
          <SectionHeading
            overline="Technical Capabilities"
            title={"Advanced\nTechnology for\nPrecision Results"}
            subtitle="Our facility combines advanced machining, inspection, and automation technology with deep engineering expertise to deliver results at the highest level of precision."
          />

          {/* Feature image: robotic AI machining from presentation */}
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

        {/* Second image strip */}
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

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <motion.div key={cap.category} variants={staggerItem}>
              <div className="border border-white/[0.06] bg-charcoal/20 p-7 h-full hover:border-gold/20 hover:bg-charcoal/40 transition-all duration-300 group">
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
