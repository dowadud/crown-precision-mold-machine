import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

const services = [
  "Tire Mold Repair",
  "Tire Mold Refurbishment",
  "Mold Modification",
  "Precision Cleaning",
  "Inspection & Certification",
  "CNC Machining",
  "Laser Welding",
  "Lifecycle Support",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D] border-t border-white/[0.06]">
      {/* Gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="relative w-[180px] h-[56px] mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Crown Precision Mold & Machine"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-metal text-sm leading-relaxed mb-6 max-w-xs">
              Specialized tire mold services for global manufacturers. Precision
              repair, refurbishment, and lifecycle support.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <p className="text-metal text-xs leading-relaxed">
                  301 S McDowell St Suite 125-1671
                  <br />
                  Charlotte, NC 28204
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-metal text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-metal group-hover:bg-gold group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-gold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-metal text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-metal group-hover:bg-gold group-hover:w-5 transition-all duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-gold mb-6">
              Get in Touch
            </h4>
            <p className="text-metal text-sm leading-relaxed mb-6">
              Ready to extend your mold life and reduce production downtime?
              Talk to our engineering team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest px-6 py-3 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 group"
            >
              Request a Quote
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-metal text-xs">
            © {new Date().getFullYear()} Crown Precision Mold & Machine. All rights reserved.
          </p>
          <p className="text-metal/50 text-xs">
            Precision Tire Mold Services · Charlotte, NC
          </p>
        </div>
      </div>
    </footer>
  );
}
