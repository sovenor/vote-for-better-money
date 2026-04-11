import { LEARN_ARTICLES } from "@/lib/constants";
import FreedomCard, {
  GlobeIcon,
  UnlockIcon,
  ShieldIcon,
  StarIcon,
  DiamondIcon,
} from "@/components/FreedomCard";

interface ArticleNavProps {
  currentSlug: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  "bitcoin-is-american": <StarIcon />,
  "bitcoin-is-sovereign": <ShieldIcon />,
  "bitcoin-is-scarce": <DiamondIcon />,
  "bitcoin-is-decentralized": <GlobeIcon />,
  "bitcoin-is-permissionless": <UnlockIcon />,
};

export default function ArticleNav({ currentSlug }: ArticleNavProps) {
  const otherArticles = LEARN_ARTICLES.filter((a) => a.slug !== currentSlug);

  return (
    <div className="mt-12">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Keep Learning
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-4 mt-4">
        Bitcoin is...
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {otherArticles.map((article) => (
          <FreedomCard
            key={article.slug}
            icon={ICON_MAP[article.slug] ?? <GlobeIcon />}
            title={article.title.replace(/^Bitcoin is /, "")}
            description={article.description}
            href={article.href}
          />
        ))}
      </div>
    </div>
  );
}
