import type { Metadata } from "next";
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
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0D] via-[#111318] to-[#0B0B0D]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/[0.03] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
          <div className="max-w-3xl">
            <SectionHeading
              overline="Tire Mold Services"
              title={"Complete Mold\nService Capabilities\nfor Tire Manufacturers"}
              subtitle="Every service is designed to protect production performance, extend mold life, and reduce operational costs — backed by certified quality and deep engineering expertise."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-px bg-white/[0.03]">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={0.05 * (i % 3)}>
                <div className="bg-[#0B0B0D] p-8 md:p-10 grid md:grid-cols-[1fr_1fr_auto] gap-8 items-start hover:bg-charcoal/30 transition-all duration-300 group border-b border-white/[0.04]">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center border border-gold/20 bg-gold/5 group-hover:border-gold/40 transition-colors">
                        <service.icon size={16} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="font-heading text-[10px] uppercase tracking-[0.25em] text-gold/60 border border-gold/15 px-2 py-1">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold uppercase text-2xl tracking-wider text-smoke mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-metal text-sm leading-relaxed">{service.description}</p>
                  </div>

                  {/* Middle: capabilities */}
                  <div>
                    <h4 className="font-heading font-semibold uppercase text-[10px] tracking-[0.25em] text-gold/60 mb-4">
                      Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-3 text-sm text-metal">
                          <div className="w-1 h-1 rounded-full bg-gold/60 shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: outcome */}
                  <div className="md:w-52">
                    <div className="border border-gold/15 bg-gold/[0.03] p-4">
                      <div className="font-heading text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-2">
                        Outcome
                      </div>
                      <p className="text-steel text-xs leading-relaxed font-medium">
                        {service.outcome}
                      </p>
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
