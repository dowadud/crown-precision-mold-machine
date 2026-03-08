"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#0B0B0D]"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/cnc-machining-sparks.jpg"
          alt="CNC precision machining with sparks"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Multi-layer dark overlay to keep text legible and brand-correct */}
        <div className="absolute inset-0 bg-[#0B0B0D]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/90 via-[#0B0B0D]/60 to-[#0B0B0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-[#0B0B0D]/50" />

        {/* Gold radial bloom over image */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(191,197,204,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(191,197,204,1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-4xl">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex items-center gap-4 mb-7"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="font-heading font-semibold text-gold text-xs uppercase tracking-[0.3em]">
              Crown Precision Mold &amp; Machine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading font-black uppercase leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-7"
          >
            <span
              style={{
                background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Precision
              <br />
              Tire Mold
              <br />
            </span>
            <span
              style={{
                background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 50%, #C89A3D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[2px] bg-gradient-to-r from-gold to-gold-light mb-7"
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-steel/80 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
            Engineering-grade repair, refurbishment, and lifecycle support for
            global tire manufacturers — backed by over 100 years of combined
            industry expertise and ISO 9001-aligned quality systems.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(200,154,61,0.35)] hover:shadow-[0_6px_32px_rgba(200,154,61,0.5)] group"
            >
              Request a Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 border border-steel/30 text-steel hover:border-gold/50 hover:text-gold transition-all duration-300 backdrop-blur-sm group"
            >
              Explore Services
              <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap items-center gap-6 mt-12"
          >
            {[
              "ISO 9001-Aligned QA",
              "100+ Years Experience",
              "Goodyear · Bridgestone · Pirelli",
              "5 Continents Served",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gold" />
                <span className="text-steel/60 text-xs uppercase tracking-widest font-heading">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-metal/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
