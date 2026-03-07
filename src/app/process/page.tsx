import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TechnicalCapabilities from "@/components/sections/TechnicalCapabilities";
import CTABanner from "@/components/sections/CTABanner";
import FadeIn from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Our Process | Crown Precision Mold & Machine",
  description:
    "A rigorous six-step process from mold intake and inspection to certified return to production — engineered for precision at every stage.",
};

export default function ProcessPage() {
  return (
    <main className="pt-20 bg-[#0B0B0D]">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="max-w-3xl">
            <SectionHeading
              overline="Our Process"
              title={"Precision\nEngineered at\nEvery Step"}
              subtitle="Every mold that enters our facility is processed through a documented, quality-assured workflow — from initial intake and engineering review to certified return to production."
            />
            <FadeIn delay={0.25}>
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {[
                  { label: "6", sub: "Process Steps" },
                  { label: "100%", sub: "Documentation" },
                  { label: "ISO", sub: "9001 Aligned" },
                ].map((item) => (
                  <div key={item.sub} className="border border-white/[0.06] p-4 text-center">
                    <div
                      className="font-heading font-black text-2xl mb-1"
                      style={{
                        background: "linear-gradient(135deg, #C89A3D, #E0B45C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.label}
                    </div>
                    <div className="font-heading text-[10px] uppercase tracking-widest text-metal">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <TechnicalCapabilities />
      <CTABanner />
    </main>
  );
}
