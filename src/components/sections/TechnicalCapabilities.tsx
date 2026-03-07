"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "framer-motion";

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
    <section className="py-24 md:py-32 bg-charcoal/15 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(191,197,204,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(191,197,204,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <SectionHeading
          overline="Technical Capabilities"
          title={"Advanced\nTechnology for\nPrecision Results"}
          subtitle="Our facility combines advanced machining, inspection, and automation technology with deep engineering expertise to deliver results at the highest level of precision."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.category} variants={staggerItem}>
              <div className="border border-white/[0.06] bg-[#0B0B0D]/60 p-7 h-full hover:border-gold/20 transition-all duration-300 group">
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
