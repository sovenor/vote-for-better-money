import Link from "next/link";

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
}

export default function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <Link
      href={href}
      className="block p-5 rounded-xl bg-card border border-card-border no-underline hover:border-accent/40 hover:bg-card/80 transition-all group"
    >
      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed m-0">{description}</p>
      <span className="inline-block mt-3 text-xs font-medium text-accent group-hover:translate-x-1 transition-transform">
        Learn more →
      </span>
    </Link>
  );
}
