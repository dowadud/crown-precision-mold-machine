import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Shield, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Crown Precision Mold & Machine",
  description:
    "Contact Crown Precision Mold & Machine for tire mold repair, refurbishment, and precision machining services. Call 305.333.2660 or email us today.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    lines: [
      { text: "305.333.2660", href: "tel:3053332660" },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [
      { text: "marcorestrepo@cpmandm.com", href: "mailto:marcorestrepo@cpmandm.com" },
      { text: "admin@cpmandm.com", href: "mailto:admin@cpmandm.com" },
    ],
  },
  {
    icon: MapPin,
    label: "Address",
    lines: [
      { text: "Crown Precision Mold and Machine", href: null },
      { text: "301 S McDowell St", href: null },
      { text: "Suite 125-1671", href: null },
      { text: "Charlotte, NC 28204", href: null },
    ],
  },
  {
    icon: Clock,
    label: "Technical Support",
    lines: [
      { text: "24/7 availability for urgent production needs.", href: null },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="pt-[116px] bg-[#0B0B0D]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Contact Us</span>
            </div>
            <h1
              className="font-heading font-black uppercase text-5xl md:text-6xl lg:text-7xl leading-none mb-4"
              style={{
                background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Talk to Our
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Engineering Team
              </span>
            </h1>
            <p className="text-metal text-base md:text-lg leading-relaxed max-w-xl mt-4">
              Tell us about your mold service requirements. We respond fast,
              work to spec, and deliver certified results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Quick contact strip ── */}
      <section className="bg-charcoal/30 border-y border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5">
          <div className="flex flex-wrap items-center gap-8">
            <a
              href="tel:3053332660"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/5 group-hover:border-gold/50 transition-colors">
                <Phone size={13} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-metal/60 leading-none mb-0.5">Call</div>
                <div className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors">305.333.2660</div>
              </div>
            </a>

            <div className="h-8 w-px bg-white/[0.06] hidden md:block" />

            <a
              href="mailto:marcorestrepo@cpmandm.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/5 group-hover:border-gold/50 transition-colors">
                <Mail size={13} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-metal/60 leading-none mb-0.5">Sales</div>
                <div className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors">marcorestrepo@cpmandm.com</div>
              </div>
            </a>

            <div className="h-8 w-px bg-white/[0.06] hidden lg:block" />

            <a
              href="mailto:admin@cpmandm.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-gold/20 bg-gold/5 group-hover:border-gold/50 transition-colors">
                <Mail size={13} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading text-[10px] uppercase tracking-widest text-metal/60 leading-none mb-0.5">Admin</div>
                <div className="font-heading font-bold text-sm text-smoke group-hover:text-gold transition-colors">admin@cpmandm.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">

            {/* Left: Form */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-gold" />
                  <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Request a Quote</span>
                </div>
              </FadeIn>
              <ContactForm />
            </div>

            {/* Right: Contact details */}
            <div className="space-y-4">
              <FadeIn delay={0.1}>
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex gap-5 p-6 border border-white/[0.06] bg-charcoal/20 hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="w-9 h-9 flex items-center justify-center border border-gold/20 bg-gold/5 shrink-0">
                      <detail.icon size={14} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold uppercase text-[10px] tracking-[0.25em] text-gold mb-2">
                        {detail.label}
                      </div>
                      <div className="space-y-0.5">
                        {detail.lines.map((line, i) =>
                          line.href ? (
                            <a
                              key={i}
                              href={line.href}
                              className="block text-metal text-sm hover:text-gold transition-colors duration-200"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <p key={i} className="text-metal text-sm leading-relaxed">
                              {line.text}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </FadeIn>

              {/* What to expect */}
              <FadeIn delay={0.2}>
                <div className="border border-gold/15 bg-gold/[0.03] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={14} className="text-gold" strokeWidth={1.5} />
                    <span className="font-heading font-bold uppercase text-xs tracking-[0.2em] text-gold">
                      What to Expect
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Response within one business day",
                      "Engineering review of your mold service needs",
                      "Clear scope of work and timeline estimate",
                      "Transparent pricing — no hidden costs",
                      "Certified, documented results every time",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-metal">
                        <div className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Request a Quote Banner ── */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-charcoal/20 border-t border-white/[0.05]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-gold/[0.03] to-[#0B0B0D]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <FadeIn>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Ready to Start</span>
              </div>
              <h2
                className="font-heading font-black uppercase text-3xl md:text-4xl leading-tight"
                style={{
                  background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Need Urgent Support?
              </h2>
              <p className="text-metal text-sm leading-relaxed mt-2 max-w-lg">
                Our engineering team is available 24/7 for urgent production needs.
                Call us directly or send an email — we respond fast.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:3053332660"
                  className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 group shadow-[0_4px_24px_rgba(200,154,61,0.3)]"
                >
                  <Phone size={14} />
                  Call 305.333.2660
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:marcorestrepo@cpmandm.com"
                  className="inline-flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 border border-steel/20 text-steel hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  <Mail size={14} />
                  Send an Email
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </main>
  );
}
