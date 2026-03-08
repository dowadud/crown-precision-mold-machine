import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 md:py-28 bg-[#0B0B0D] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-gold/[0.04] to-[#0B0B0D]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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

        {/* ── Contact strip ── */}
        <FadeIn delay={0.4}>
          <div className="mt-12 pt-10 border-t border-white/[0.06]">
            <p className="font-heading text-[10px] uppercase tracking-[0.3em] text-metal/50 mb-5">
              Contact Us Directly
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="tel:3053332660"
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/[0.05] group-hover:border-gold/50 transition-colors">
                  <Phone size={13} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors tracking-wider">
                  305.333.2660
                </span>
              </a>

              <div className="h-6 w-px bg-white/[0.08] hidden sm:block" />

              <a
                href="mailto:marcorestrepo@cpmandm.com"
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/[0.05] group-hover:border-gold/50 transition-colors">
                  <Mail size={13} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors tracking-wider">
                  marcorestrepo@cpmandm.com
                </span>
              </a>

              <div className="h-6 w-px bg-white/[0.08] hidden sm:block" />

              <a
                href="mailto:admin@cpmandm.com"
                className="flex items-center gap-2.5 group"
              >
                <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/[0.05] group-hover:border-gold/50 transition-colors">
                  <Mail size={13} className="text-gold" strokeWidth={1.5} />
                </div>
                <span className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors tracking-wider">
                  admin@cpmandm.com
                </span>
              </a>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
