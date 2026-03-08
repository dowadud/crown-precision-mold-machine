"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Clock, Globe } from "lucide-react";

const items = [
  {
    icon: Shield,
    label: "ISO 9001 Quality Standards",
  },
  {
    icon: Award,
    label: "100+ Years Combined Expertise",
  },
  {
    icon: Globe,
    label: "Clients on 5 Continents",
  },
  {
    icon: Clock,
    label: "24/7 Technical Support",
  },
];

const clients = [
  "Goodyear",
  "Bridgestone",
  "Continental",
  "Pirelli",
  "Yokohama",
  "Toyo Tires",
  "JK Tornel",
];

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-charcoal border-y border-white/[0.05]" ref={ref}>
      {/* Trust badges */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 flex items-center justify-center border border-gold/20 bg-gold/5 shrink-0">
                <item.icon size={15} className="text-gold" strokeWidth={1.5} />
              </div>
              <span className="font-heading font-semibold text-xs uppercase tracking-wider text-steel">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client name strip */}
      <div className="border-t border-white/[0.04] bg-[#0B0B0D]/40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-metal shrink-0">
              Trusted by
            </span>
            <div className="h-px w-6 bg-gold/30 shrink-0" />
            {clients.map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="font-heading font-bold text-xs uppercase tracking-widest text-steel/70 hover:text-gold transition-colors duration-200 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
