export const SITE_NAME = "Vote For Better Money";
export const SITE_URL = "https://voteforbetter.money";
export const SITE_DESCRIPTION =
  "Our money is broken. Prices keep going up. Bitcoin is better money — and you can vote for better money by using Bitcoin today.";
export const CONTACT_EMAIL = "hi@bitcoin.rocks";
export const GA_ID = "G-ZBZ0609EK2";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/learn", label: "Learn" },
  { href: "/how-to-use-bitcoin", label: "Use Bitcoin" },
  { href: "/flyers", label: "Flyers" },
] as const;

export const LEARN_ARTICLES = [
  {
    slug: "bitcoin-is-american",
    title: "Bitcoin is American",
    description:
      "Bitcoin upholds freedom and respects proof of work — core American values.",
    href: "/learn/bitcoin-is-american",
  },
  {
    slug: "bitcoin-is-sovereign",
    title: "Bitcoin is Sovereign",
    description:
      "Bitcoin is a new system, independent from politicians and their broken promises.",
    href: "/learn/bitcoin-is-sovereign",
  },
  {
    slug: "bitcoin-is-scarce",
    title: "Bitcoin is Scarce",
    description:
      "There will only ever be 21 million Bitcoin. No one can print more.",
    href: "/learn/bitcoin-is-scarce",
  },
  {
    slug: "bitcoin-is-decentralized",
    title: "Bitcoin is Decentralized",
    description:
      "No single entity — no government, no corporation — controls Bitcoin.",
    href: "/learn/bitcoin-is-decentralized",
  },
  {
    slug: "bitcoin-is-permissionless",
    title: "Bitcoin is Permissionless",
    description:
      "Anyone, anywhere can join the Bitcoin network. No one can stop you from accessing your money.",
    href: "/learn/bitcoin-is-permissionless",
  },
] as const;

export const EXTERNAL_LINKS = {
  fredM1: "https://fred.stlouisfed.org/series/M1SL",
  fredDebt: "https://fred.stlouisfed.org/series/GFDEBTN",
  bitcoinRocks: "https://bitcoin.rocks",
  bitcoinRocksWallets: "https://bitcoin.rocks/wallets",
  bitcoinRocksBusiness: "https://bitcoin.rocks/business/",
  cashApp: "https://cash.app/",
  strike: "https://strike.me/",
  river: "https://river.com/",
  blockstreamGreen: "https://blockstream.com/green/",
  bitcoinNode: "https://bitcoin.org/en/full-node",
  texasMining: "https://www.youtube.com/watch?v=48EIMlS0cIs",
  pennsylvaniaMining: "https://www.youtube.com/watch?v=GtrhfMacYE4",
  canadaTruckers: "https://www.youtube.com/watch?v=-gpaXXHEhQQ",
  nigeriaEndSars:
    "https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests",
  debanking: "https://archive.is/BHtRj",
} as const;
