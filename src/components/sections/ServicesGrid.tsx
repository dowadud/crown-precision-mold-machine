"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Wrench,
  RefreshCw,
  Settings,
  Sparkles,
  ClipboardCheck,
  Cpu,
  Zap,
  LifeBuoy,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn from "@/components/animations/FadeIn";

const services = [
  {
    icon: Wrench,
    title: "Tire Mold Repair",
    description:
      "Precision repair of damaged tire molds using CNC machining, laser welding, and precision grinding — restoring full production capability fast.",
  },
  {
    icon: RefreshCw,
    title: "Tire Mold Refurbishment",
    description:
      "Complete mold refurbishment programs extending operational life by an average of 15%, reducing mold-related capital expenditure by 25–35%.",
  },
  {
    icon: Settings,
    title: "Mold Modification",
    description:
      "Adapt existing molds to new tire designs without full replacement. Expert modifications reduce costs by up to 30% versus new tooling.",
  },
  {
    icon: Sparkles,
    title: "Precision Cleaning",
    description:
      "Ultrasonic cleaning and eco-friendly solvents ensure thorough removal of contaminants, preserving mold integrity and surface quality.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Certification",
    description:
      "ISO 9001-aligned QA, 3D scanning, and nondestructive testing with full traceability documentation and certification.",
  },
  {
    icon: Cpu,
    title: "CNC Machining",
    description:
      "High-precision CNC machining for mold components and custom fabrication with tight tolerances and industrial-grade accuracy.",
  },
  {
    icon: Zap,
    title: "Laser Welding",
    description:
      "Laser welding for precise mold repair, crack sealing, and material buildup — ideal for complex geometry and hard-to-reach areas.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Lifecycle Support",
    description:
      "Proactive maintenance, performance analytics, and 24/7 technical support to maximize mold readiness and minimize unplanned downtime.",
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0D] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-start mb-16">
          <SectionHeading
            overline="Our Services"
            title={"Tire Mold\nServices That\nDeliver"}
            subtitle="From emergency repair to full lifecycle programs — every service is engineered for performance, precision, and production continuity."
          />

          {/* Featured image alongside heading */}
          <FadeIn delay={0.2} direction="left">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/mold-repair-workers.jpg"
                alt="Technicians working on tire mold repair"
                fill
                className="object-cover object-center"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0B0D]/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/50 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/10" />
              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="h-px w-6 bg-gold" />
                <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold">
                  Expert Technicians
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Service cards grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]"
        >
          {services.map((service, index) => (
            <div key={service.title} className="bg-[#0B0B0D]">
              <ServiceCard {...service} index={index} />
            </div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-steel border border-steel/20 px-8 py-3.5 hover:border-gold/40 hover:text-gold transition-all duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
