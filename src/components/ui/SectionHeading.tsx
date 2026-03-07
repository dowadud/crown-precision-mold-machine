import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("mb-12 md:mb-16", isCenter && "text-center", className)}>
      {overline && (
        <FadeIn delay={0.05}>
          <div
            className={cn(
              "flex items-center gap-3 mb-4",
              isCenter && "justify-center"
            )}
          >
            <div className="h-px w-8 bg-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.25em] font-heading">
              {overline}
            </span>
            <div className="h-px w-8 bg-gold" />
          </div>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2
          className={cn(
            "font-heading font-black uppercase text-4xl md:text-5xl lg:text-6xl leading-none tracking-wide text-silver-gradient",
            titleClassName
          )}
          style={{
            background: "linear-gradient(180deg, #F3F4F6 0%, #BFC5CC 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.18}>
          <p
            className={cn(
              "mt-5 text-metal text-base md:text-lg leading-relaxed max-w-2xl",
              isCenter && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
