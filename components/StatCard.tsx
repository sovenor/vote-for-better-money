interface StatCardProps {
  label: string;
  value: string;
  sublabel?: string;
  accent?: boolean;
  danger?: boolean;
}

export default function StatCard({
  label,
  value,
  sublabel,
  accent = false,
  danger = false,
}: StatCardProps) {
  const valueColor = danger
    ? "text-danger"
    : accent
      ? "text-accent"
      : "text-foreground";

  return (
    <div className="p-5 rounded-xl bg-card border border-card-border text-center">
      <p className="text-xs uppercase tracking-wider text-muted mb-1">{label}</p>
      <p className={`text-2xl sm:text-3xl font-bold mb-1 ${valueColor}`}>
        {value}
      </p>
      {sublabel && (
        <p className="text-xs text-muted">{sublabel}</p>
      )}
    </div>
  );
}
