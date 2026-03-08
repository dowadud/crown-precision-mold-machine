import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process",    href: "/process" },
  { label: "Contact",    href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0D]">
      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">

          {/* Left: Brand + Contact */}
          <div>
            <div className="relative w-[180px] h-[52px] mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Crown Precision Mold & Machine"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-metal text-sm leading-relaxed mb-7 max-w-sm">
              Engineering-grade tire mold repair, refurbishment, and lifecycle
              support — trusted by global tire manufacturers across five continents.
            </p>

            {/* Contact block */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-gold mt-[3px] shrink-0" />
                <p className="text-metal text-xs leading-relaxed">
                  Crown Precision Mold and Machine
                  <br />
                  301 S McDowell St, Suite 125-1671
                  <br />
                  Charlotte, NC 28204
                </p>
              </div>

              <a href="tel:3053332660" className="flex items-center gap-3 group w-fit">
                <Phone size={13} className="text-gold shrink-0" />
                <span className="text-metal text-xs group-hover:text-gold transition-colors duration-200">
                  305.333.2660
                </span>
              </a>

              <a href="mailto:marcorestrepo@cpmandm.com" className="flex items-center gap-3 group w-fit">
                <Mail size={13} className="text-gold shrink-0" />
                <span className="text-metal text-xs group-hover:text-gold transition-colors duration-200">
                  marcorestrepo@cpmandm.com
                </span>
              </a>

              <a href="mailto:admin@cpmandm.com" className="flex items-center gap-3 group w-fit">
                <Mail size={13} className="text-gold shrink-0" />
                <span className="text-metal text-xs group-hover:text-gold transition-colors duration-200">
                  admin@cpmandm.com
                </span>
              </a>
            </div>
          </div>

          {/* Right: Navigation */}
          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest text-xs text-gold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-metal text-sm hover:text-gold transition-colors duration-200 flex items-center gap-2.5 group w-fit"
                  >
                    <span className="h-px w-3 bg-metal/40 group-hover:bg-gold group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-metal/50 text-xs">
            © {new Date().getFullYear()} Crown Precision Mold &amp; Machine. All rights reserved.
          </p>
          <p className="text-metal/30 text-xs">
            Charlotte, NC · 305.333.2660
          </p>
        </div>
      </div>
    </footer>
  );
}
