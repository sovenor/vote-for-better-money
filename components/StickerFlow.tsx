"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import StickerAddressForm from "@/components/StickerAddressForm";
import { EXTERNAL_LINKS } from "@/lib/constants";

type OptionId = "mail" | "print" | "bulk";

const OPTIONS: ReadonlyArray<{
  id: OptionId;
  label: string;
  sublabel: string;
  flag: string;
}> = [
  {
    id: "mail",
    flag: "🇺🇸",
    label: "USA — Free by mail",
    sublabel: "We'll ship a free pack to your door",
  },
  {
    id: "print",
    flag: "🇺🇸",
    label: "USA — Print my own",
    sublabel: "Download high-resolution sticker files",
  },
  {
    id: "bulk",
    flag: "🇺🇸",
    label: "USA — Order in bulk",
    sublabel: "Print large quantities through Sticker Mule",
  },
];

export default function StickerFlow() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [option, setOption] = useState<OptionId | null>(null);

  useEffect(() => {
    if (!option) return;
    const el = panelRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [option]);

  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs uppercase tracking-wider text-accent font-bold whitespace-nowrap">
          How to get your stickers
        </span>
        <div className="flex-1 h-px bg-accent/40" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-3">
        Pick an option
      </h2>
      <p className="text-muted leading-relaxed mb-6">
        We mail free sticker packs to addresses in the United States. You can
        also print your own or order in bulk.
      </p>

      <div className="grid grid-cols-1 gap-3">
        {OPTIONS.map((o) => {
          const isSelected = option === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => setOption(o.id)}
              aria-pressed={isSelected}
              className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                isSelected
                  ? "border-accent bg-accent/5"
                  : "border-card-border bg-card hover:border-accent/40"
              }`}
            >
              <span
                className="text-2xl shrink-0"
                aria-hidden="true"
              >
                {o.flag}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className={`font-bold m-0 ${
                    isSelected ? "text-accent" : "text-foreground"
                  }`}
                >
                  {o.label}
                </p>
                <p className="text-sm text-muted m-0 mt-0.5">{o.sublabel}</p>
              </div>
              <span
                className={`text-lg shrink-0 ${
                  isSelected ? "text-accent" : "text-muted"
                }`}
                aria-hidden="true"
              >
                {isSelected ? "✓" : "→"}
              </span>
            </button>
          );
        })}
      </div>

      <div ref={panelRef} className="mt-8">
        {option === "mail" && (
          <div className="rounded-xl bg-card border border-card-border p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Free sticker pack — USA
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Enter your mailing address below. We&apos;ll ship your{" "}
              <strong className="text-foreground">
                Vote For Better Money Sticker Pack
              </strong>{" "}
              for free in 2–4 weeks.
            </p>
            <StickerAddressForm />
          </div>
        )}

        {option === "print" && (
          <div className="rounded-xl bg-card border border-card-border p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Print your own — USA
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Download our high-resolution sticker designs and print them at
              home or at a local print shop.
            </p>
            <Link href="/sticker-files" className="btn-primary">
              See Sticker Files
            </Link>
          </div>
        )}

        {option === "bulk" && (
          <div className="rounded-xl bg-card border border-card-border p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Order in bulk — USA
            </h3>
            <p className="text-muted leading-relaxed mb-6">
              Buying lots of stickers is way cheaper through a print shop. We
              recommend Sticker Mule — they print our packs and ship anywhere.
            </p>
            <a
              href={EXTERNAL_LINKS.stickerMule}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order on Sticker Mule
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
