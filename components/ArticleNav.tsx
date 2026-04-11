import Link from "next/link";
import { LEARN_ARTICLES } from "@/lib/constants";

interface ArticleNavProps {
  currentSlug: string;
}

export default function ArticleNav({ currentSlug }: ArticleNavProps) {
  const currentIndex = LEARN_ARTICLES.findIndex((a) => a.slug === currentSlug);
  const prev = currentIndex > 0 ? LEARN_ARTICLES[currentIndex - 1] : null;
  const next =
    currentIndex < LEARN_ARTICLES.length - 1
      ? LEARN_ARTICLES[currentIndex + 1]
      : null;

  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-12 pt-8 border-t border-card-border">
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 p-4 rounded-xl bg-card border border-card-border no-underline hover:border-accent/40 transition-colors group"
        >
          <span className="text-xs text-muted">← Previous</span>
          <span className="block text-sm font-medium text-foreground group-hover:text-accent mt-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex-1 p-4 rounded-xl bg-card border border-card-border no-underline hover:border-accent/40 transition-colors group text-right"
        >
          <span className="text-xs text-muted">Next →</span>
          <span className="block text-sm font-medium text-foreground group-hover:text-accent mt-1">
            {next.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
