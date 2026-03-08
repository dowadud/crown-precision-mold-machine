import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import CTABanner from "@/components/sections/CTABanner";
import {
  Wrench,
  RefreshCw,
  Settings,
  Sparkles,
  ClipboardCheck,
  Cpu,
  Zap,
  LifeBuoy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tire Mold Services | Crown Precision Mold & Machine",
  description:
    "Complete tire mold repair, refurbishment, CNC machining, laser welding, inspection, and lifecycle support services for global tire manufacturers.",
};

const services = [
  {
    icon: Wrench,
    title: "Tire Mold Repair",
    tag: "Repair",
    image: "/images/mold-repair-workers.jpg",
    imageAlt: "Technicians performing precision tire mold repair",
    description:
      "Emergency and scheduled repair services for damaged or worn tire molds. We use CNC machining, laser welding, and precision grinding to restore full operational capability quickly — reducing production downtime.",
    capabilities: [
      "Crack and fracture repair",
      "Wear surface restoration",
      "Vent hole drilling and repair",
      "Segment and sector repair",
      "Emergency response services",
    ],
    outcome: "Faster return to production with certified mold integrity.",
  },
  {
    icon: RefreshCw,
    title: "Tire Mold Refurbishment",
    tag: "Refurbishment",
    image: "/images/mold-before-after.jpg",
    imageAlt: "Tire mold before and after precision refurbishment",
    description:
      "Full mold refurbishment programs that restore molds to original specification — extending operational life by an average of 15% and reducing capital expenditure by 25–35% compared to new mold procurement.",
    capabilities: [
      "Complete dimensional restoration",
      "Surface finishing and polishing",
      "Geometry re-profiling",
      "Pattern and tread restoration",
      "Functional performance testing",
    ],
    outcome: "Extended mold lifespan and significant capital savings.",
  },
  {
    icon: Settings,
    title: "Mold Modification",
    tag: "Modification",
    image: "/images/mold-technology.jpg",
    imageAlt: "Precision mold modification and engineering",
    description:
      "Adapt existing molds to new tire designs, updated tread patterns, or changed specifications without full replacement. Expert modifications reduce costs by up to 30% versus new tooling investment.",
    capabilities: [
      "Tread pattern modification",
      "Mold geometry adjustment",
      "Insert and sector modification",
      "Sidewall lettering updates",
      "Design adaptation engineering",
    ],
    outcome: "Design flexibility without the cost of new tooling.",
  },
  {
    icon: Sparkles,
    title: "Precision Cleaning",
    tag: "Cleaning",
    image: "/images/cleaning-certification.jpg",
    imageAlt: "Ultrasonic cleaning and ISO 9001 certification process",
    description:
      "Industrial-grade mold cleaning using ultrasonic technology and eco-friendly solvents to thoroughly remove rubber residue, contaminants, and buildup — preserving surface precision and extending mold service life.",
    capabilities: [
      "Ultrasonic cleaning systems",
      "Eco-friendly solvent treatment",
      "Bead and cryogenic blasting",
      "Vent and cavity cleaning",
      "Pre-inspection preparation",
    ],
    outcome: "Contaminant-free molds ready for certification and production.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Certification",
    tag: "Inspection",
    image: "/images/3d-scanning-inspection.jpg",
    imageAlt: "3D laser scanning inspection of tire mold",
    description:
      "Comprehensive mold inspection using 3D coordinate measurement, nondestructive testing, and surface analysis — with ISO 9001-aligned certification, full traceability documentation, and production release records.",
    capabilities: [
      "CMM dimensional inspection",
      "Nondestructive testing (NDT)",
      "Ultrasonic flaw detection",
      "ISO 9001-aligned certification",
      "Full traceability documentation",
    ],
    outcome: "Certified mold quality with complete documentation.",
  },
  {
    icon: Cpu,
    title: "CNC Machining",
    tag: "Machining",
    image: "/images/cnc-machining-sparks.jpg",
    imageAlt: "High-precision CNC machining with sparks",
    description:
      "High-precision CNC milling, turning, and multi-axis machining for mold components, replacement parts, and custom fabrication — delivering tight tolerances and industrial-grade surface finishes.",
    capabilities: [
      "Multi-axis CNC milling",
      "Precision turning and boring",
      "Custom component fabrication",
      "Tight-tolerance machining",
      "Hard material capability",
    ],
    outcome: "Precision-machined components to exact specification.",
  },
  {
    icon: Zap,
    title: "Laser Welding",
    tag: "Welding",
    image: "/images/mold-repair-workers.jpg",
    imageAlt: "Precision laser welding for tire mold repair",
    description:
      "Advanced laser welding for precision mold repair, crack sealing, material buildup, and surface restoration — ideal for complex geometries, vented molds, and hard-to-access repair areas.",
    capabilities: [
      "Micro-precision laser welding",
      "Crack sealing and repair",
      "Material buildup and cladding",
      "Complex geometry access",
      "Minimal heat-affected zone",
    ],
    outcome: "Precision weld repairs with minimal distortion.",
  },
  {
    icon: LifeBuoy,
    title: "Maintenance & Lifecycle Support",
    tag: "Lifecycle",
    image: "/images/tire-production-floor.jpg",
    imageAlt: "Tire production floor lifecycle maintenance support",
    description:
      "Proactive maintenance programs, performance analytics, and 24/7 technical support — designed to maximize mold readiness, reduce unexpected failures, and provide long-term production assurance.",
    capabilities: [
      "Proactive maintenance scheduling",
      "Mold performance analytics",
      "24/7 technical support",
      "Rapid-response agreements",
      "Long-term partnership programs",
    ],
    outcome: "Maximized uptime and sustained production performance.",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20 bg-[#0B0B0D]">
      {/* Hero with image */}
      <section className="relative h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="/images/tire-mold-cnc.jpg"
          alt="Tire mold being precision machined on CNC equipment"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-[#0B0B0D]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D]/50 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 w-full">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-gold">Tire Mold Services</span>
            </div>
            <h1
              className="font-heading font-black uppercase text-5xl md:text-6xl leading-none max-w-2xl"
              style={{
                background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Complete Mold
              <br />
              Service{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Capabilities
              </span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-charcoal/20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <p className="text-metal text-sm md:text-base leading-relaxed max-w-3xl">
            Every service is designed to protect production performance, extend mold life, and reduce
            operational costs — backed by certified quality and deep engineering expertise spanning
            the full tire mold lifecycle.
          </p>
        </div>
      </section>

      {/* Services list with images */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="divide-y divide-white/[0.04]">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.05 * (i % 3)}>
                <div className="py-12 grid md:grid-cols-[240px_1fr_220px] gap-8 items-start group hover:bg-charcoal/10 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 transition-colors duration-300">

                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/40 to-transparent" />
                    <div className="absolute inset-0 border border-gold/10 group-hover:border-gold/25 transition-colors" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 flex items-center justify-center border border-gold/20 bg-gold/5 group-hover:border-gold/40 transition-colors">
                        <service.icon size={15} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold/60 border border-gold/15 px-2 py-1">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold uppercase text-2xl tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-metal text-sm leading-relaxed mb-4 max-w-xl">{service.description}</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-xs text-metal/70">
                          <div className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="shrink-0">
                    <div className="border border-gold/15 bg-gold/[0.03] p-4">
                      <div className="font-heading text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">Outcome</div>
                      <p className="text-steel text-xs leading-relaxed font-medium">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
