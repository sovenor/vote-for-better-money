interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  sublabel?: string;
  accent?: boolean;
  success?: boolean;
  danger?: boolean;
}

export default function StatCard({
  label,
  value,
  detail,
  sublabel,
  accent = false,
  success = false,
  danger = false,
}: StatCardProps) {
  const valueColor = danger
    ? "text-danger"
    : success
      ? "text-success"
      : accent
        ? "text-accent"
        : "text-foreground";

  return (
    <div className="p-5 rounded-xl bg-card border border-card-border text-center">
      <p className="text-xs uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold mb-1 ${valueColor}`}>
        {value}
      </p>
      {detail && (
        <p className={`text-[10px] sm:text-xs mb-1 ${valueColor}`}>{detail}</p>
      )}
      {sublabel && (
        <p className="text-xs text-muted">{sublabel}</p>
      )}
    </div>
  );
}
