import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: string;
  icon?: string;
}

export default function ImagePlaceholder({
  className,
  label,
  aspectRatio = "aspect-video",
  icon = "📸",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl img-placeholder flex items-center justify-center",
        aspectRatio,
        className
      )}
      aria-label={label || "Imagem"}
      role="img"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso-900/80 via-dark-card to-espresso-950/90" />
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(201,149,74,0.3) 0px,
            rgba(201,149,74,0.3) 1px,
            transparent 1px,
            transparent 10px
          )`,
        }}
      />
      {/* Center content */}
      <div className="relative z-10 text-center select-none">
        <span className="text-4xl block mb-2" aria-hidden="true">{icon}</span>
        {label && (
          <p className="text-cream-200/30 text-xs tracking-widest uppercase">{label}</p>
        )}
      </div>
    </div>
  );
}
