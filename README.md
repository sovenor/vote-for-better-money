# Vote For Better Money

**Our money is broken. Bitcoin is better money.**

[Vote For Better Money](https://voteforbetter.money) is a free, open-source educational website that helps Americans understand why Bitcoin is better money. The site explains how inflation and money printing erode the value of the US dollar, and how Bitcoin's fixed supply of 21 million offers a superior alternative that anyone can start using today.

🌐 **Live site:** [voteforbetter.money](https://voteforbetter.money)

## Features

- **Real-time economic data** — Live stats from FRED (M1 money supply, national debt, CPI inflation), Bitcoin price from TwelveData, and Bitcoin supply from Mempool.space
- **Educational articles** — Learn why Bitcoin is American, Sovereign, Scarce, Decentralized, and Permissionless
- **Practical guide** — Step-by-step instructions for buying, earning, and self-custodying Bitcoin
- **Grassroots tools** — Downloadable flyers and shareable link pages for spreading the word
- **SEO optimized** — JSON-LD schemas, sitemap, Open Graph, Twitter Cards, and LLM-friendly content
- **Fast & responsive** — Dark-themed, mobile-first design with ISR caching

## Tech Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sovenor/vote-for-better-money.git
cd vote-for-better-money

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

Edit `.env` and add your API keys:

```
TWELVEDATA_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note:** A free TwelveData API key can be obtained at [twelvedata.com](https://twelvedata.com). Without it, the site still works — Bitcoin price data simply won't display.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/                        # Next.js App Router pages
├── api/stats/route.ts      # Stats API endpoint (FRED, TwelveData, Mempool)
├── learn/                  # Educational articles
├── how-to-use-bitcoin/     # Practical Bitcoin guide
├── flyers/                 # Downloadable flyer page
└── links/                  # Shareable links page
components/                 # Reusable React components
lib/                        # API helpers & constants
public/                     # Static assets (images, PDFs, robots.txt)
```

## Contributing

We welcome contributions! Whether it's fixing a typo, improving content, adding features, or suggesting ideas — we'd love your help.

Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

## License

This project is free and open source under the [MIT License](LICENSE).

## Contact

- 📧 **Email:** [hi@bitcoin.rocks](mailto:hi@bitcoin.rocks)
- 🌐 **Related:** [bitcoin.rocks](https://bitcoin.rocks)
