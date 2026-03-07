"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  index?: number;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href = "/services",
  index = 0,
  featured = false,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      <Link href={href} className="block group h-full">
        <div
          className={cn(
            "relative h-full p-7 border transition-all duration-500",
            "bg-charcoal/40 border-white/[0.06]",
            "group-hover:border-gold/30 group-hover:bg-charcoal/70",
            "group-hover:shadow-[0_0_40px_rgba(200,154,61,0.08)]",
            featured && "border-gold/20 bg-charcoal/60"
          )}
        >
          {/* Gold accent line top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon */}
          <div className="mb-5">
            <div
              className={cn(
                "w-12 h-12 flex items-center justify-center border transition-all duration-300",
                "border-gold/20 bg-gold/5",
                "group-hover:border-gold/50 group-hover:bg-gold/10"
              )}
            >
              <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-heading font-bold uppercase text-lg tracking-wider text-smoke mb-3 group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-metal text-sm leading-relaxed">{description}</p>

          {/* Learn more */}
          <div className="mt-5 flex items-center gap-2 text-gold/0 group-hover:text-gold/70 transition-all duration-300 text-xs font-semibold uppercase tracking-widest">
            <span>Learn more</span>
            <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
