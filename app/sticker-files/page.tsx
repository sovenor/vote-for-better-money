import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import TopicCard from "@/components/TopicCard";
import { EXTERNAL_LINKS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sticker Files",
  description:
    "Download high-resolution Vote For Better Money sticker designs to print at home or at a local print shop.",
  alternates: { canonical: `${SITE_URL}/sticker-files` },
  openGraph: {
    title: "Vote For Better Money Sticker Files",
    description:
      "Download high-resolution Vote For Better Money sticker designs to print at home or at a local print shop.",
    url: `${SITE_URL}/sticker-files`,
    images: [{ url: "/img/web-sticker-pack-vfbm.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vote For Better Money Sticker Files",
    description:
      "Download high-resolution Vote For Better Money sticker designs to print at home or at a local print shop.",
  },
};

const STICKER_FILES = [
  {
    name: "Vote For Better Money (Bitcoin Sticker)",
    size: "3.81″ × 2″",
    src: "/img/sticker-files/vfbm-classic-print.png",
    alt: "Vote For Better Money Bitcoin sticker design",
    printUrl: "https://www.stickermule.com/4c84ba884f9c3ae/item/20315772",
  },
  {
    name: "Cast Your Vote / Ballot (Bitcoin Sticker)",
    size: "3.63″ × 3″",
    src: "/img/sticker-files/vfbm-ballot-print.png",
    alt: "Cast Your Vote / Ballot Bitcoin sticker design",
    printUrl: "https://www.stickermule.com/4c84ba884f9c3ae/item/20315771",
  },
  {
    name: "I Voted for Better Money (Bitcoin Sticker)",
    size: "1.5″ × 1.5″",
    src: "/img/sticker-files/vfbm-voted-print.png",
    alt: "I Voted for Better Money Bitcoin sticker design",
    printUrl: "https://www.stickermule.com/4c84ba884f9c3ae/item/20315770",
  },
];

export default function StickerFilesPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs
        items={[
          { label: "Stickers", href: "/stickers" },
          { label: "Sticker Files" },
        ]}
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        Sticker Files
      </h1>

      <div className="article-content">
        <p className="text-lg sm:text-xl text-muted leading-relaxed">
          <strong className="text-foreground">Print your own stickers.</strong>{" "}
          Download any of the designs below and bring them to a local print
          shop, or print them at home on sticker paper.
        </p>

        <p>
          Each design includes the printed dimensions. Right-click (or
          long-press on mobile) any image to save it.
        </p>
      </div>

      {/* ── Download ────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-2 mt-12">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Download
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Sticker Designs
      </h2>

      <div className="grid grid-cols-1 gap-6">
        {STICKER_FILES.map((sticker) => (
          <div
            key={sticker.name}
            className="rounded-xl bg-card border border-card-border overflow-hidden"
          >
            <a
              href={sticker.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 no-underline"
            >
              <Image
                src={sticker.src}
                alt={sticker.alt}
                width={1200}
                height={800}
                quality={100}
                className="w-full h-auto rounded-lg"
              />
            </a>
            <div className="flex flex-col items-center text-center gap-3 p-6 pt-2">
              <p className="text-lg font-bold text-foreground m-0">
                {sticker.name}
              </p>
              <p className="text-sm text-muted m-0">{sticker.size}</p>
              <a
                href={sticker.src}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Sticker
              </a>
              <a
                href={sticker.printUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Print in One Click
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Bulk Print ──────────────────────────────── */}
      <div className="flex items-center gap-3 mb-2 mt-12">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          Bulk Print
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-6">
        Want lots of stickers?
      </h2>

      <div className="article-content">
        <p>
          Ordering in bulk through a print shop is way cheaper than printing
          one at a time. We recommend{" "}
          <a
            href={EXTERNAL_LINKS.stickerMule}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sticker Mule
          </a>{" "}
          — they print our designs and ship anywhere.
        </p>
      </div>

      <div className="my-8 flex justify-center">
        <a
          href={EXTERNAL_LINKS.stickerMule}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Order Bulk on Sticker Mule
        </a>
      </div>

      {/* ── Related ────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 mt-12">
        <TopicCard
          title="Free Bitcoin Sticker Pack"
          description="Have us mail you a free Vote For Better Money sticker pack instead."
          href="/stickers"
        />
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
              {
                "@type": "ListItem",
                position: 2,
                name: "Stickers",
                item: `${SITE_URL}/stickers`,
              },
              { "@type": "ListItem", position: 3, name: "Sticker Files" },
            ],
          }),
        }}
      />
    </div>
  );
}
