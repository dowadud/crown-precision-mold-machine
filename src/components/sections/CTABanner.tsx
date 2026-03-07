import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0B0D] relative overflow-hidden">
      {/* Gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-gold/[0.04] to-[#0B0B0D]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Diagonal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
        <line x1="0" y1="100%" x2="100%" y2="0" stroke="#C89A3D" strokeWidth="1" />
        <line x1="0" y1="80%" x2="80%" y2="0" stroke="#C89A3D" strokeWidth="1" />
      </svg>

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        <FadeIn>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold/40" />
            <span className="font-heading text-xs uppercase tracking-[0.3em] text-gold">
              Ready to Get Started
            </span>
            <div className="h-px w-12 bg-gold/40" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2
            className="font-heading font-black uppercase text-4xl md:text-5xl lg:text-6xl leading-none mb-6"
            style={{
              background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Extend Mold Life.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reduce Downtime.
            </span>
            <br />
            Maximize Output.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-metal text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Talk to our engineering team about your mold service requirements.
            We respond fast, work to spec, and deliver certified results.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 shadow-[0_4px_24px_rgba(200,154,61,0.35)] hover:shadow-[0_6px_36px_rgba(200,154,61,0.5)] group"
            >
              Request a Quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-10 py-4 border border-steel/20 text-steel hover:border-gold/40 hover:text-gold transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-metal text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="font-heading uppercase tracking-widest">24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-2 text-metal text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="font-heading uppercase tracking-widest">Rapid Response Agreements</span>
            </div>
            <div className="flex items-center gap-2 text-metal text-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-steel/40" />
              <span className="font-heading uppercase tracking-widest">ISO 9001 Aligned QA</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
