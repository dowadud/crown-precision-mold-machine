import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Clock, Phone, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Crown Precision Mold & Machine",
  description:
    "Request a quote or get in touch with Crown Precision Mold & Machine. 24/7 technical support for tire mold repair, refurbishment, and precision machining services.",
};

const details = [
  {
    icon: MapPin,
    label: "Address",
    value: "301 S McDowell St\nSuite 125-1671\nCharlotte, NC 28204",
  },
  {
    icon: Clock,
    label: "Technical Support",
    value: "24/7 availability for urgent\nproduction needs and\ntechnical inquiries.",
  },
  {
    icon: Shield,
    label: "Quality Assurance",
    value: "ISO 9001-aligned processes\nwith full traceability and\ncertification documentation.",
  },
];

export default function ContactPage() {
  return (
    <main className="pt-20 bg-[#0B0B0D]">
      {/* Hero */}
      <section className="py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute top-1/2 right-1/3 w-[500px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="max-w-2xl">
            <SectionHeading
              overline="Contact"
              title={"Talk to Our\nEngineering\nTeam"}
              subtitle="Tell us about your mold service requirements and we'll get back to you with a clear, detailed response. No pressure — just expertise."
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16">
            {/* Form */}
            <ContactForm />

            {/* Details */}
            <div>
              <FadeIn delay={0.1}>
                <div className="space-y-4 mb-10">
                  {details.map((detail) => (
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
                        <p className="text-metal text-sm leading-relaxed whitespace-pre-line">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border border-gold/15 bg-gold/[0.03] p-6">
                  <div className="font-heading font-bold uppercase text-xs tracking-[0.2em] text-gold mb-4">
                    What to Expect
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Initial response within one business day",
                      "Engineering review of your mold service needs",
                      "Clear scope of work and timeline estimate",
                      "Transparent pricing with no hidden costs",
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
    </main>
  );
}
