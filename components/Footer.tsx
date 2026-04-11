import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, SITE_URL, EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-card-border mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          <Link href="/" className="no-underline">
            <Image
              src="/img/logo-dark-mode-v2.png"
              alt="Vote For Better Money"
              width={60}
              height={60}
              className="w-15 h-15 opacity-60 hover:opacity-100 transition-opacity"
            />
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-muted hover:text-accent no-underline">
              Home
            </Link>
            <Link href="/learn" className="text-muted hover:text-accent no-underline">
              Learn
            </Link>
            <Link
              href="/how-to-use-bitcoin"
              className="text-muted hover:text-accent no-underline"
            >
              Use Bitcoin
            </Link>
            <Link href="/stickers" className="text-muted hover:text-accent no-underline">
              Stickers
            </Link>
            <Link href="/flyers" className="text-muted hover:text-accent no-underline">
              Flyers
            </Link>
            <Link href="/links" className="text-muted hover:text-accent no-underline">
              Share Links
            </Link>
          </nav>

          <div className="text-sm text-muted space-y-1">
            <p>
              <strong className="text-foreground">Want to contact us?</strong>
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted hover:text-accent no-underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted/60">
            <a
              href={EXTERNAL_LINKS.bitcoinRocks}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent no-underline"
            >
              bitcoin.rocks
            </a>
            <span>•</span>
            <span>
              <a href={SITE_URL} className="hover:text-accent no-underline">
                voteforbetter.money
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
