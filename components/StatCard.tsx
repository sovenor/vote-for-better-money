interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  sublabel?: string;
  accent?: boolean;
  success?: boolean;
  danger?: boolean;
  href?: string;
  sourceLabel?: string;
}

export default function StatCard({
  label,
  value,
  detail,
  sublabel,
  accent = false,
  success = false,
  danger = false,
  href,
  sourceLabel,
}: StatCardProps) {
  const valueColor = danger
    ? "text-danger"
    : success
      ? "text-success"
      : accent
        ? "text-accent"
        : "text-foreground";

  const content = (
    <>
      <p className="text-xs uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold mb-1 ${valueColor}`}>
        {value}
      </p>
      {detail && (
        <p className={`text-xs sm:text-sm mb-1 ${valueColor}`}>{detail}</p>
      )}
      {sublabel && (
        <p className="text-xs text-muted">{sublabel}</p>
      )}
      {href && sourceLabel && (
        <p className="text-[10px] text-muted group-hover:text-accent group-hover:translate-x-1 transition-all mt-2">
          Source: {sourceLabel} →
        </p>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-5 rounded-xl bg-card border border-card-border text-center no-underline hover:border-accent/40 hover:shadow-[0_0_15px_rgba(247,147,26,0.1)] transition-all group"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="p-5 rounded-xl bg-card border border-card-border text-center">
      {content}
    </div>
  );
}
