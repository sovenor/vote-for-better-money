import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import StickerFlow from "@/components/StickerFlow";
import TopicCard from "@/components/TopicCard";
import { EXTERNAL_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Free Bitcoin Sticker Pack",
  description:
    "Order a free Vote For Better Money sticker pack. Help spread the word about Bitcoin — free shipping in the USA.",
  alternates: { canonical: `${SITE_URL}/stickers` },
  openGraph: {
    title: "Free Vote For Better Money Sticker Pack",
    description:
      "Order a free Vote For Better Money sticker pack. Help spread the word about Bitcoin — free shipping in the USA.",
    url: `${SITE_URL}/stickers`,
    images: [{ url: "/img/web-sticker-pack-vfbm.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Vote For Better Money Sticker Pack",
    description:
      "Order a free Vote For Better Money sticker pack. Help spread the word about Bitcoin — free shipping in the USA.",
  },
};

export default function StickersPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "Stickers" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Free Bitcoin Sticker Pack
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">
            Order a free Bitcoin sticker pack
          </strong>{" "}
          and put them up in public places to help more Americans learn about
          better money. Our friends at bitcoin.rocks offer{" "}
          <a
            href={EXTERNAL_LINKS.bitcoinRocksStickers}
            target="_blank"
            rel="noopener noreferrer"
          >
            free Bitcoin sticker packs
          </a>{" "}
          in other designs.
        </p>

        <div className="my-8 rounded-xl bg-card border border-card-border overflow-hidden">
          <Image
            src="/img/web-sticker-pack-vfbm.png"
            alt="Vote For Better Money Sticker Pack preview"
            width={1200}
            height={900}
            quality={100}
            className="w-full h-auto"
            priority
          />
          <div className="flex flex-col items-center text-center gap-2 p-6 pt-5">
            <p className="text-lg font-bold text-foreground m-0">
              Vote For Better Money Sticker Pack
            </p>
            <p className="text-sm text-muted m-0">
              A pack of stickers designed to help Americans vote for better
              money.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <StickerFlow />
      </div>

      {/* ── Related ────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 mt-12">
        <TopicCard
          title="More sticker packs at bitcoin.rocks"
          description="Get more Bitcoin sticker packs from bitcoin.rocks."
          href={EXTERNAL_LINKS.bitcoinRocksStickers}
          external
        />
        <TopicCard
          title="Print Flyers"
          description="Download Vote For Better Money flyers and post them in public places."
          href="/flyers"
        />
        <TopicCard
          title="Share Links"
          description="Copy and share direct links to our educational pages."
          href="/links"
        />
      </div>

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Stickers" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Vote For Better Money Sticker Pack",
            description:
              "Order a free Vote For Better Money sticker pack. Free shipping in the USA.",
            url: `${SITE_URL}/stickers`,
            publisher: {
              "@type": "Organization",
              name: "Vote For Better Money",
              url: SITE_URL,
            },
          }),
        }}
      />
    </div>
  );
}
