"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Intake & Assessment",
    description:
      "Molds are received and undergo comprehensive dimensional inspection, 3D scanning, and nondestructive testing to identify all wear patterns, cracks, and defects.",
    tags: ["3D Scanning", "NDT Inspection", "Dimensional Analysis"],
  },
  {
    number: "02",
    title: "Engineering Review",
    description:
      "Our engineers analyze findings, define repair scope, and develop a precision service plan — specifying machining tolerances, weld procedures, and modification requirements.",
    tags: ["Engineering Analysis", "Tolerance Definition", "Service Planning"],
  },
  {
    number: "03",
    title: "Precision Repair & Refurbishment",
    description:
      "CNC machining, laser welding, and precision grinding are applied to restore geometry and surface finish. Mold modifications are executed to exact specification.",
    tags: ["CNC Machining", "Laser Welding", "Precision Grinding"],
  },
  {
    number: "04",
    title: "Cleaning & Surface Treatment",
    description:
      "Ultrasonic cleaning and eco-friendly solvents remove all contaminants. Surface treatments are applied where required to meet production specifications.",
    tags: ["Ultrasonic Cleaning", "Surface Treatment", "Contamination Removal"],
  },
  {
    number: "05",
    title: "Quality Assurance & Certification",
    description:
      "Full dimensional re-inspection, quality documentation, ISO 9001-aligned certification, and traceability records are completed before release.",
    tags: ["ISO 9001", "Full Documentation", "Traceability"],
  },
  {
    number: "06",
    title: "Return to Production",
    description:
      "Certified molds are prepared for shipment with full service documentation. Ongoing lifecycle support and maintenance scheduling are established for continued performance.",
    tags: ["Production Ready", "Lifecycle Scheduling", "24/7 Support"],
  },
];

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-charcoal/10 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          overline="Our Process"
          title={"Engineered for\nPrecision at\nEvery Step"}
          subtitle="Every mold that enters our facility follows a rigorous, documented process — from initial assessment to certified return to production."
          align="center"
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Center vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-gold/40 to-gold/10 origin-top"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
              style={{ height: "100%" }}
            />
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`lg:flex lg:items-center ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-0`}
                >
                  {/* Content */}
                  <div
                    className={`lg:w-[calc(50%-48px)] ${isLeft ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12"}`}
                  >
                    <div
                      className={`bg-charcoal/40 border border-white/[0.06] p-7 hover:border-gold/20 hover:bg-charcoal/70 transition-all duration-400 group relative ${
                        isLeft ? "" : ""
                      }`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div
                        className="font-heading font-black text-6xl leading-none mb-3 opacity-10"
                        style={{
                          background:
                            "linear-gradient(135deg, #C89A3D, #E0B45C)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {step.number}
                      </div>
                      <h3 className="font-heading font-bold uppercase text-xl tracking-wider text-smoke mb-3">
                        {step.title}
                      </h3>
                      <p className="text-metal text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : ""}`}
                      >
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-heading text-[10px] uppercase tracking-widest text-gold/70 border border-gold/15 px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="hidden lg:flex w-24 items-center justify-center shrink-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + 0.2, duration: 0.4 }}
                      className="w-10 h-10 rounded-full border-2 border-gold/40 bg-[#0B0B0D] flex items-center justify-center relative z-10"
                    >
                      <div className="w-3 h-3 rounded-full bg-gold" />
                    </motion.div>
                  </div>

                  {/* Spacer (desktop) */}
                  <div className="hidden lg:block lg:w-[calc(50%-48px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
