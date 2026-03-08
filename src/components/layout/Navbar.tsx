"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#0B0B0D]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-[#0B0B0D]/80 backdrop-blur-sm"
        )}
      >
        {/* ── Contact Bar ── */}
        <div className="border-b border-white/[0.06] bg-charcoal/60">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between h-9">
              {/* Left: phone + email */}
              <div className="flex items-center gap-5">
                <a
                  href="tel:3053332660"
                  className="flex items-center gap-1.5 text-metal hover:text-gold transition-colors duration-200 group"
                >
                  <Phone size={11} className="text-gold/70 group-hover:text-gold" />
                  <span className="font-heading text-[11px] tracking-wider">
                    305.333.2660
                  </span>
                </a>

                <div className="h-3 w-px bg-white/10 hidden md:block" />

                <a
                  href="mailto:marcorestrepo@cpmandm.com"
                  className="hidden md:flex items-center gap-1.5 text-metal hover:text-gold transition-colors duration-200 group"
                >
                  <Mail size={11} className="text-gold/70 group-hover:text-gold" />
                  <span className="font-heading text-[11px] tracking-wider">
                    marcorestrepo@cpmandm.com
                  </span>
                </a>

                <div className="h-3 w-px bg-white/10 hidden xl:block" />

                <a
                  href="mailto:admin@cpmandm.com"
                  className="hidden xl:flex items-center gap-1.5 text-metal hover:text-gold transition-colors duration-200 group"
                >
                  <Mail size={11} className="text-gold/70 group-hover:text-gold" />
                  <span className="font-heading text-[11px] tracking-wider">
                    admin@cpmandm.com
                  </span>
                </a>
              </div>

              {/* Right: CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 font-heading font-bold text-[10px] uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors duration-200 group"
              >
                Request a Quote
                <ArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Main Navigation ── */}
        <div className={cn(
          "border-b transition-all duration-500",
          scrolled ? "border-white/[0.06]" : "border-transparent"
        )}>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center shrink-0">
                <div className="relative w-[180px] h-[56px] md:w-[200px] md:h-[60px]">
                  <Image
                    src="/images/logo.jpg"
                    alt="Crown Precision Mold & Machine"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-heading font-semibold text-xs uppercase tracking-[0.2em] transition-colors duration-200 relative group",
                      pathname === link.href
                        ? "text-gold"
                        : "text-steel hover:text-smoke"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                ))}
              </nav>

              {/* CTA — desktop full label, mobile compact */}
              <div className="flex items-center gap-3">
                {/* Mobile compact button */}
                <Link
                  href="/contact"
                  className={cn(
                    "lg:hidden font-heading font-bold text-[10px] uppercase tracking-[0.18em] px-4 py-2.5",
                    "bg-gold text-[#0B0B0D] transition-all duration-300",
                    "hover:bg-gold-light shadow-[0_2px_12px_rgba(200,154,61,0.35)]",
                    scrolled && "shadow-[0_2px_16px_rgba(200,154,61,0.5)]"
                  )}
                >
                  Get a Quote
                </Link>

                {/* Desktop full button */}
                <Link
                  href="/contact"
                  className={cn(
                    "hidden lg:inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-[0.2em] px-6 py-3",
                    "bg-gold text-[#0B0B0D] transition-all duration-300",
                    "hover:bg-gold-light",
                    scrolled
                      ? "shadow-[0_4px_28px_rgba(200,154,61,0.55)]"
                      : "shadow-[0_4px_20px_rgba(200,154,61,0.3)]"
                  )}
                >
                  Request a Quote
                  <ArrowRight size={12} className="opacity-70" />
                </Link>

                {/* Mobile Toggle */}
                <button
                  className="lg:hidden text-steel hover:text-smoke transition-colors p-2"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0D]/98 backdrop-blur-lg flex flex-col pt-32 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-heading font-bold text-2xl uppercase tracking-wide",
                      pathname === link.href ? "text-gold" : "text-smoke"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 space-y-3 border-t border-white/[0.06] pt-8"
            >
              <a href="tel:3053332660" className="flex items-center gap-3 text-metal hover:text-gold transition-colors">
                <Phone size={14} className="text-gold" />
                <span className="font-heading text-sm tracking-wider">305.333.2660</span>
              </a>
              <a href="mailto:marcorestrepo@cpmandm.com" className="flex items-center gap-3 text-metal hover:text-gold transition-colors">
                <Mail size={14} className="text-gold" />
                <span className="font-heading text-sm tracking-wider">marcorestrepo@cpmandm.com</span>
              </a>
              <a href="mailto:admin@cpmandm.com" className="flex items-center gap-3 text-metal hover:text-gold transition-colors">
                <Mail size={14} className="text-gold" />
                <span className="font-heading text-sm tracking-wider">admin@cpmandm.com</span>
              </a>
            </motion.div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block font-heading font-bold text-sm uppercase tracking-widest px-8 py-4 bg-gold text-[#0B0B0D]"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
