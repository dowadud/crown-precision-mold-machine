"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { Send, CheckCircle } from "lucide-react";

const serviceOptions = [
  "Tire Mold Repair",
  "Tire Mold Refurbishment",
  "Mold Modification",
  "Precision Cleaning",
  "Inspection & Certification",
  "CNC Machining",
  "Laser Welding",
  "Maintenance & Lifecycle Support",
  "Multiple Services",
  "Other / Not Sure",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <FadeIn>
        <div className="flex flex-col items-center justify-center py-24 text-center border border-gold/20 bg-gold/[0.03]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <CheckCircle size={48} className="text-gold mb-6" strokeWidth={1.5} />
          </motion.div>
          <h3 className="font-heading font-bold uppercase text-2xl tracking-wider text-smoke mb-3">
            Message Received
          </h3>
          <p className="text-metal text-sm leading-relaxed max-w-sm mb-6">
            Thank you for contacting Crown Precision. Our engineering team will
            review your requirements and respond within one business day.
          </p>
          <div className="space-y-1 text-center">
            <p className="text-metal text-xs">
              Need urgent support? Call us directly:
            </p>
            <a
              href="tel:3053332660"
              className="font-heading font-bold text-gold text-sm tracking-wider hover:text-gold-light transition-colors"
            >
              305.333.2660
            </a>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Row 1: Name + Company */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              Name *
            </label>
            <input
              required
              type="text"
              name="name"
              placeholder="Your full name"
              className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 placeholder:text-metal/40 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              Company *
            </label>
            <input
              required
              type="text"
              name="company"
              placeholder="Tire manufacturer or facility"
              className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 placeholder:text-metal/40 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              Email *
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="your@company.com"
              className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 placeholder:text-metal/40 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
          </div>
          <div>
            <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+1 (000) 000-0000"
              className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 placeholder:text-metal/40 focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
          </div>
        </div>

        {/* Service Needed */}
        <div>
          <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
            Service Needed
          </label>
          <div className="relative">
            <select
              name="service"
              className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 focus:outline-none focus:border-gold/40 transition-colors duration-200 appearance-none cursor-pointer"
            >
              <option value="" className="bg-[#1A1D22]">Select a service...</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s} className="bg-[#1A1D22]">{s}</option>
              ))}
            </select>
            {/* Chevron icon */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="#C89A3D" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block font-heading font-semibold text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
            Message *
          </label>
          <textarea
            required
            rows={5}
            name="message"
            placeholder="Describe your mold service needs — mold type, quantity, timeline, and any specific requirements..."
            className="w-full bg-charcoal/30 border border-white/[0.08] text-smoke text-sm px-4 py-3 placeholder:text-metal/40 focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 font-heading font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 bg-gold text-[#0B0B0D] hover:bg-gold-light transition-all duration-300 disabled:opacity-60 group"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            <>
              Submit Quote Request
              <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>

        <p className="text-metal/50 text-xs text-center">
          We respond within one business day. All inquiries are confidential.
        </p>
      </form>
    </FadeIn>
  );
}
