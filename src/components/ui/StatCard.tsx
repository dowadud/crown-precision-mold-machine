import CountUp from "@/components/animations/CountUp";
import FadeIn from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
  decimals?: number;
}

export default function StatCard({
  value,
  prefix,
  suffix,
  label,
  description,
  delay = 0,
  decimals = 0,
}: StatCardProps) {
  return (
    <FadeIn delay={delay} className="text-center md:text-left">
      <div className="py-6 px-2">
        <div
          className="font-heading font-black text-5xl md:text-6xl lg:text-7xl leading-none mb-2"
          style={{
            background: "linear-gradient(135deg, #C89A3D 0%, #E0B45C 60%, #C89A3D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals} />
        </div>
        <div className="font-heading font-semibold uppercase tracking-widest text-smoke text-sm mb-1">
          {label}
        </div>
        {description && (
          <p className="text-metal text-xs leading-relaxed">{description}</p>
        )}
      </div>
    </FadeIn>
  );
}
