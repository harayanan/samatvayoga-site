interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide ${
          light ? "text-cream-100" : "text-warm-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg font-light max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-cream-200/70" : "text-warm-800/60"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 ${
          light ? "bg-saffron-400/40" : "bg-saffron-500/30"
        } ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
