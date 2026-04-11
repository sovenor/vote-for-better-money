import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What is Nostr?",
  description:
    "Nostr is a new protocol that allows you to communicate online without fear of censorship, deplatforming, or deboosting.",
  alternates: { canonical: `${SITE_URL}/nostr` },
  openGraph: {
    title: "What is Nostr? | Vote For Better Money",
    url: `${SITE_URL}/nostr`,
    images: [{ url: "/img/meta/meta-nostr.png", width: 1200, height: 630 }],
  },
};

export default function NostrPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <Breadcrumbs items={[{ label: "What is Nostr?" }]} />

      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
        What is Nostr?
      </h1>

      <div className="article-content">
        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">
          Nostr is a social media protocol, not a platform
        </h2>

        <p>
          Nostr is a new protocol that allows you to communicate online without
          fear of censorship, deplatforming, or deboosting.
        </p>

        <p>
          Platforms like Twitter and Facebook are controlled by a single company,
          but no one controls the Nostr protocol.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Nostr gives you the freedom to move
        </h2>

        <p>
          Nostr is similar to email. No one controls the email protocol, and
          anyone can build a client (like Gmail, Hotmail, etc.) on top of it.
        </p>

        <p>
          No one controls the Nostr protocol, and anyone can build a client (like
          Damus, Amethyst, etc.) on top of it.
        </p>

        <p>
          If you don&apos;t like how a certain client works, you can seamlessly move
          your Nostr account to another client without losing your followers or
          content.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Bitcoin is built in
        </h2>

        <p>
          Bitcoin is built in natively to the Nostr protocol. If you see content
          you like, you can easily zap Bitcoin to someone as a thank you!
        </p>

        <p>
          On centralized platforms like Twitter and Facebook, the centralized
          company earns money from your content. But on open protocols like Nostr,
          you can earn better money (Bitcoin) from your content.
        </p>

        <h2 className="text-xl font-bold text-foreground mt-10 mb-4">
          Download a free client to join Nostr
        </h2>

        <div className="space-y-2 my-4">
          <p>
            <strong>iPhone</strong> —{" "}
            <a href="https://damus.io/" target="_blank" rel="noopener noreferrer">
              Damus
            </a>
          </p>
          <p>
            <strong>Android</strong> —{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amethyst
            </a>
          </p>
          <p>
            <strong>Web</strong> —{" "}
            <a href="https://snort.social/" target="_blank" rel="noopener noreferrer">
              Snort
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
