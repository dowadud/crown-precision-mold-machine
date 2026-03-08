import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { Zap, Leaf, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Electric Vehicle Tire Demand",
    body: "The growing EV market requires specialized molds engineered for lower rolling resistance, higher load ratings, and noise-optimized tread geometries. Crown is already supporting EV-focused production lines with precision refurbishment and tighter-tolerance repair services.",
  },
  {
    icon: Leaf,
    title: "Sustainable Material Innovation",
    body: "Eco-friendly mold cleaning processes, reduced-chemical treatment methods, and support for sustainable manufacturing initiatives help our partners meet evolving environmental standards without compromising mold performance or service life.",
  },
  {
    icon: Cpu,
    title: "Smart Manufacturing Capabilities",
    body: "AI-driven defect detection, 3D mold scanning, robotic machining arms, and performance data analytics position Crown to serve manufacturers adapting to the next generation of intelligent, data-driven production environments.",
  },
];

export default function FutureReady() {
  return (
    <section className="py-20 md:py-24 bg-[#0B0B0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute right-0 bottom-0 w-[700px] h-[400px] rounded-full bg-gold/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-start">

          {/* Left: content */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold" />
                <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">
                  Future Outlook
                </span>
              </div>

              <h2
                className="font-heading font-black uppercase text-4xl md:text-5xl leading-none mb-5"
                style={{
                  background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Adapting to an
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Evolving Industry
                </span>
              </h2>

              <p className="text-metal text-base leading-relaxed mb-10 max-w-lg">
                The tire industry is changing — driven by electrification, sustainability
                mandates, and smart manufacturing. Crown Precision is built to evolve
                with it, delivering the technical depth and operational flexibility
                that next-generation production demands.
              </p>
            </FadeIn>

            {/* Pillars */}
            <div className="space-y-5">
              {pillars.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={0.1 + i * 0.08}>
                  <div className="flex gap-5 p-6 border border-white/[0.06] bg-charcoal/20 hover:border-gold/20 hover:bg-charcoal/40 transition-all duration-300 group">
                    <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/[0.06] shrink-0 group-hover:border-gold/45 transition-colors duration-300">
                      <pillar.icon size={15} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold uppercase text-xs tracking-[0.18em] text-smoke mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-metal text-sm leading-relaxed">{pillar.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-px">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/tire-production-floor.jpg"
                  alt="Tire manufacturing production line — molds and finished tires in a precision facility"
                  fill
                  className="object-cover object-center"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0B0B0D]/20" />
                <div className="absolute inset-0 border border-gold/10" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-[#0B0B0D]/80 backdrop-blur-sm border border-gold/20 p-4">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="h-px w-5 bg-gold" />
                      <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold">
                        Tire Production
                      </span>
                    </div>
                    <p className="text-smoke text-xs leading-relaxed">
                      Supporting next-generation tire manufacturing facilities worldwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Supplemental image */}
              <div className="relative aspect-[16/7] overflow-hidden group">
                <Image
                  src="/images/cnc-machining-sparks.jpg"
                  alt="CNC milling heads cutting precision metal components with sparks"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  quality={80}
                />
                <div className="absolute inset-0 bg-[#0B0B0D]/55" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="h-px w-4 bg-gold" />
                  <span className="font-heading text-[10px] uppercase tracking-widest text-gold">
                    Precision Machining
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
