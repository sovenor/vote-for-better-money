import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopicCard from "@/components/TopicCard";
import { EXTERNAL_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Your stickers are on their way",
  description: "Your free Vote For Better Money sticker pack is on its way.",
  alternates: { canonical: `${SITE_URL}/sticker-success` },
  robots: { index: false, follow: true },
};

const TIPS = [
  {
    icon: "✅",
    text: "Public places where lots of people will see them — telephone poles, community boards, bus stops.",
  },
  {
    icon: "✅",
    text: "Smooth, non-porous surfaces like metal, plastic, or glass.",
  },
  {
    icon: "✅",
    text: "Ask local coffee shops, laundromats, or libraries if you can post on their bulletin boards.",
  },
  {
    icon: "🚫",
    text: "Don't post on private property without permission, ATMs, gas pumps, or anywhere that could damage signage.",
  },
];

export default function StickerSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Stickers", href: "/stickers" }, { label: "Success" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Your stickers are on their way 🎉
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Thank you!</strong> Your free
          Vote For Better Money Sticker Pack should arrive in 2–4 weeks. Start
          thinking about where you&apos;ll put them up.
        </p>

        {/* ── Good Sticker Spots ──────────────────────── */}
        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
            Good Sticker Spots
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Where to put your stickers
        </h2>

        <ul className="list-none p-0 m-0 space-y-3 mb-8">
          {TIPS.map((tip, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-card border border-card-border"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                {tip.icon}
              </span>
              <span className="text-foreground leading-relaxed">{tip.text}</span>
            </li>
          ))}
        </ul>

        {/* ── Share Your Sticker Spots ────────────────── */}
        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
            Share Your Sticker Spots
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Show off your work
        </h2>

        <p>
          Take a photo when you put your stickers up and share it on Nostr.
          Tag{" "}
          <a
            href={EXTERNAL_LINKS.nostrPrimal}
            target="_blank"
            rel="noopener noreferrer"
          >
            hi@bitcoin.rocks
          </a>{" "}
          so we can see and re-share your sticker spots.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 my-8">
          <a
            href={EXTERNAL_LINKS.nostrPrimal}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Share on Nostr
          </a>
        </div>

        {/* ── Want More Stickers? ─────────────────────── */}
        <div className="flex items-center gap-3 mb-2 mt-12">
          <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
            Want More Stickers?
          </span>
          <div className="flex-1 h-px bg-accent/40" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Order in bulk
        </h2>

        <p>
          If you want a lot of stickers, ordering in bulk through a print shop
          is way cheaper. We recommend{" "}
          <a
            href={EXTERNAL_LINKS.stickerMule}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sticker Mule
          </a>{" "}
          — they print our packs and ship anywhere.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 my-8">
          <a
            href={EXTERNAL_LINKS.stickerMule}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Order Bulk on Sticker Mule
          </a>
        </div>
      </div>

      {/* ── What's Next ────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 mt-12">
        <TopicCard
          title="Print Flyers"
          description="Download Vote For Better Money flyers and post them in public places."
          href="/flyers"
        />
        <TopicCard
          title="How to Use Bitcoin"
          description="Buy Bitcoin, earn Bitcoin, and take full control of your money."
          href="/how-to-use-bitcoin"
        />
        <TopicCard
          title="Share Links"
          description="Copy and share direct links to our educational pages."
          href="/links"
        />
        <TopicCard
          title="Keep Learning"
          description="Read more about why Bitcoin is better money."
          href="/learn"
        />
      </div>
    </div>
  );
}
