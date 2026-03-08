import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-14 md:py-20 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-gold/[0.04] to-[#0B0B0D]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" preserveAspectRatio="none">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#C89A3D" strokeWidth="1" />
        <line x1="0" y1="80%" x2="80%" y2="0" stroke="#C89A3D" strokeWidth="1" />
      </svg>

      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/40" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold">
              Partner With Us
            </span>
            <div className="h-px w-10 bg-gold/40" />
          </div>

          <h2
            className="font-heading font-black uppercase text-3xl md:text-4xl lg:text-5xl leading-tight mb-5"
            style={{
              background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Need a Tire Mold{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Service Partner?
            </span>
          </h2>

          <p className="text-metal text-base leading-relaxed max-w-xl mx-auto mb-8">
            Extend mold life, reduce downtime, and improve production performance
            with Crown Precision Mold &amp; Machine.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(200,154,61,0.35)] hover:shadow-[0_6px_36px_rgba(200,154,61,0.5)] group"
          >
            Request a Quote
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>

      {/* Divider toward footer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
    </section>
  );
}
