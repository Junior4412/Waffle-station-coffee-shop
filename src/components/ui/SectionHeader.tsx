import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center", className)}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">
            {eyebrow}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream-100 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-cream-200/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.3}>
        <div className={cn("mt-6 h-px w-16 bg-gold", align === "center" ? "mx-auto" : "")} />
      </ScrollReveal>
    </div>
  );
}
