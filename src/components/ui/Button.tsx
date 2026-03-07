"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  variant = "gold",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    gold: [
      "bg-gold text-[#0B0B0D] font-bold uppercase tracking-widest",
      "hover:bg-gold-light",
      "shadow-[0_4px_24px_rgba(200,154,61,0.25)]",
      "hover:shadow-[0_6px_32px_rgba(200,154,61,0.4)]",
    ].join(" "),
    outline: [
      "border border-gold/40 text-gold font-semibold uppercase tracking-widest",
      "hover:border-gold hover:bg-gold/5",
      "backdrop-blur-sm",
    ].join(" "),
    ghost: [
      "text-steel font-semibold uppercase tracking-widest",
      "hover:text-gold",
    ].join(" "),
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2",
    "font-heading rounded-none transition-all duration-300",
    "relative overflow-hidden",
    sizeClasses[size],
    variantClasses[variant],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </motion.button>
  );
}
