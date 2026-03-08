"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { staggerItem } from "@/components/animations/StaggerContainer";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Factory, Truck, Zap, Award, TrendingUp } from "lucide-react";

const industries = [
  {
    icon: Globe,
    title: "Global Tire Manufacturers",
    description:
      "Premium and mid-tier tire brands operating across five continents — from flagship performance lines to commercial volume production.",
    clients: ["Goodyear", "Bridgestone", "Continental", "Pirelli"],
  },
  {
    icon: Factory,
    title: "Production Facilities & Plants",
    description:
      "Plant managers and operations leaders requiring rapid-response mold services to maintain uptime, quality standards, and throughput targets.",
    clients: ["Production Plants", "Operations Teams", "Facility Managers"],
  },
  {
    icon: Truck,
    title: "Commercial & Off-Road Tire Producers",
    description:
      "Manufacturers of truck, OTR, agricultural, and specialty tires requiring heavy-duty mold maintenance and modification capabilities.",
    clients: ["Yokohama", "Toyo Tires", "JK Tornel"],
  },
  {
    icon: Zap,
    title: "Electric Vehicle Tire Manufacturers",
    description:
      "Emerging EV-specific tire producers demanding specialized mold geometries, tighter tolerances, and sustainable manufacturing materials.",
    clients: ["EV Tire Producers", "Performance Tire Lines"],
  },
  {
    icon: Award,
    title: "Premium & Motorsport Brands",
    description:
      "High-performance tire manufacturers where mold precision is mission-critical for safety, consistency, and competitive performance.",
    clients: ["Performance OEMs", "Motorsport Brands"],
  },
  {
    icon: TrendingUp,
    title: "Procurement & Supply Chain Teams",
    description:
      "Procurement leads and supply chain managers seeking reliable, cost-effective mold service partners with certified quality systems.",
    clients: ["Procurement Teams", "Supply Chain Leaders"],
  },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-charcoal/10 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Feature image strip */}
        <FadeIn className="mb-16">
          <div className="grid grid-cols-3 gap-px bg-white/[0.04]">
            {[
              { src: "/images/global-tire-industry.jpg", alt: "Global tire industry reach across five continents" },
              { src: "/images/tire-production-floor.jpg", alt: "Tire manufacturing production floor" },
              { src: "/images/ev-tire-sustainable.jpg", alt: "Electric vehicle sustainable tire manufacturing" },
            ].map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  quality={80}
                />
                <div className="absolute inset-0 bg-[#0B0B0D]/50 group-hover:bg-[#0B0B0D]/30 transition-colors duration-500" />
                <div className="absolute inset-0 border border-gold/[0.07]" />
              </div>
            ))}
          </div>
        </FadeIn>

        <SectionHeading
          overline="Industries We Serve"
          title={"Serving Global\nTire Industry\nLeaders"}
          subtitle="From premium OEM brands to high-volume production facilities — our services adapt to the specific operational demands of every client."
          align="center"
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
          {industries.map((industry) => (
            <motion.div key={industry.title} variants={staggerItem}>
              <div className="bg-[#0B0B0D] p-8 h-full group hover:bg-charcoal/40 transition-all duration-300 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/5 mb-5 group-hover:border-gold/40 transition-colors duration-300">
                  <industry.icon size={16} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading font-bold uppercase text-base tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-metal text-sm leading-relaxed mb-5">
                  {industry.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {industry.clients.map((client) => (
                    <span
                      key={client}
                      className="text-[10px] font-heading uppercase tracking-widest text-steel/40 border border-white/[0.06] px-2 py-1"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
