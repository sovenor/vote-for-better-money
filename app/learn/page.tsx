import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopicCard from "@/components/TopicCard";
import FreedomCard, {
  GlobeIcon,
  UnlockIcon,
  ShieldIcon,
  StarIcon,
  DiamondIcon,
} from "@/components/FreedomCard";
import { SITE_URL, LEARN_ARTICLES, EXTERNAL_LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Learn About Bitcoin",
  description:
    "Learn why Bitcoin is better money. Explore how Bitcoin is American, sovereign, scarce, decentralized, and permissionless.",
  alternates: { canonical: `${SITE_URL}/learn` },
  openGraph: {
    title: "Learn About Bitcoin | Vote For Better Money",
    url: `${SITE_URL}/learn`,
    images: [{ url: "/img/meta/meta-home-v2.png", width: 1200, height: 630 }],
  },
};

const ICON_MAP: Record<string, React.ReactNode> = {
  "bitcoin-is-american": <StarIcon />,
  "bitcoin-is-sovereign": <ShieldIcon />,
  "bitcoin-is-scarce": <DiamondIcon />,
  "bitcoin-is-decentralized": <GlobeIcon />,
  "bitcoin-is-permissionless": <UnlockIcon />,
};

export default function LearnPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Learn" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Learn About Bitcoin
      </h1>
      <p className="text-lg sm:text-xl text-muted mb-4 leading-relaxed">
        Bitcoin is better money. That&apos;s because Bitcoin is...
      </p>

      <div className="grid grid-cols-2 gap-3 mb-12">
        {LEARN_ARTICLES.map((article, index) => {
          const isLast = index === LEARN_ARTICLES.length - 1 && LEARN_ARTICLES.length % 2 !== 0;
          const card = (
            <FreedomCard
              key={article.slug}
              icon={ICON_MAP[article.slug] ?? <GlobeIcon />}
              title={article.title.replace(/^Bitcoin is /, "")}
              description={article.description}
              href={article.href}
            />
          );
          return isLast ? (
            <div key={article.slug} className="col-span-2">
              {card}
            </div>
          ) : card;
        })}
      </div>

      <h2 className="text-2xl font-bold text-foreground mb-6">
        Vote for Better Money
      </h2>
      <p className="mb-7 text-muted">
        You don&apos;t need to wait for election day to vote for better money.
        Bitcoin is better money — and you can start using it today.
      </p>
      <div className="grid grid-cols-1 gap-4">
        <TopicCard
          title="How to Use Bitcoin"
          description="Buy Bitcoin, earn Bitcoin, and take full control of your money."
          href="/how-to-use-bitcoin"
        />
        <TopicCard
          title="Bitcoin is Improving the World"
          description="See how Bitcoin is making a difference for people everywhere."
          href={EXTERNAL_LINKS.bitcoinRocks}
          external
        />
      </div>
    </div>
  );
}
