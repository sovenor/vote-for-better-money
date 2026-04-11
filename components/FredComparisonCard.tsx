interface FredComparisonCardProps {
  title: string;
  source: string;
  baselineLabel: string;
  baselineValue: number;
  currentValue: number;
  href: string;
}

export default function FredComparisonCard({
  title,
  source,
  baselineLabel,
  baselineValue,
  currentValue,
  href,
}: FredComparisonCardProps) {
  const percentChange = ((currentValue - baselineValue) / baselineValue) * 100;

  const formatTrillions = (value: number): string => {
    return `$${value.toFixed(1)} trillion`;
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 sm:p-8 rounded-xl bg-card border-2 border-accent/50 no-underline hover:border-accent hover:shadow-[0_0_20px_rgba(247,147,26,0.15)] transition-all group text-center"
    >
      {/* Title */}
      <p className="text-base sm:text-xl font-bold text-accent uppercase tracking-widest mb-6">
        {title}
      </p>

      {/* Baseline */}
      <p className="text-xs uppercase tracking-wider text-muted mb-0.5">
        {baselineLabel}
      </p>
      <p className="text-3xl sm:text-4xl font-bold text-muted mb-2">
        {formatTrillions(baselineValue)}
      </p>

      {/* Arrow Down */}
      <div className="flex justify-center mb-2">
        <svg
          className="w-6 h-6 text-accent animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Current / Today */}
      <p className="text-xs uppercase tracking-wider text-foreground font-medium mb-0.5">
        Today
      </p>
      <p className="text-3xl sm:text-4xl font-bold text-foreground mb-7">
        {formatTrillions(currentValue)}
      </p>

      {/* Divider + Result */}
      <div className="border-t border-accent/30 pt-3 mb-1">
        <p className="text-2xl sm:text-3xl font-bold text-danger">
          +{percentChange.toFixed(0)}% increase
        </p>
      </div>

      {/* Source */}
      <p className="text-xs text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-2">
        {source} →
      </p>
    </a>
  );
}
