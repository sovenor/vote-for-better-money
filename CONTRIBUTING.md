# Contributing to Vote For Better Money

Thank you for your interest in contributing! This project is free and open source under the [MIT License](LICENSE), and we welcome contributions from everyone.

## Ways to Contribute

- 🐛 **Report bugs** — Found something broken? Open an issue.
- 📝 **Improve content** — Fix typos, clarify explanations, or suggest better wording.
- 💡 **Suggest features** — Have an idea? Open an issue to discuss it.
- 🎨 **Improve design** — Better layouts, accessibility improvements, or responsive fixes.
- 🔧 **Write code** — Fix bugs, add features, or improve performance.
- 📊 **Add data sources** — Know of a useful public API or data set? Let us know.

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/<your-username>/vote-for-better-money.git
cd vote-for-better-money
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment

```bash
cp .env.example .env
```

Edit `.env` with your values:

```
TWELVEDATA_API_KEY=your_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> A free TwelveData API key can be obtained at [twelvedata.com](https://twelvedata.com). The site works without it — BTC price data just won't display.

### 4. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### 5. Make Your Changes

Create a new branch for your work:

```bash
git checkout -b your-branch-name
```

## Development Guidelines

### Tech Stack

- **Next.js 16** with the App Router (not Pages Router)
- **React 19** with server components by default
- **TypeScript** — all new code should be typed
- **Tailwind CSS v4** — use utility classes; avoid custom CSS unless necessary

### Code Style

- Run `npm run lint` before submitting to catch issues
- Use server components by default; only add `"use client"` when client-side interactivity is needed
- Keep components small and focused
- Add all shared strings and URLs to `lib/constants.ts`

### Content Guidelines

- **Tone:** Accessible and non-technical — written for everyday Americans, not crypto insiders
- **Political neutrality:** The site criticizes both parties equally for debt and inflation. Keep it that way.
- **Data-driven:** Back up claims with real data and credible sources
- **Action-oriented:** Content should lead toward actually using Bitcoin

### Project Structure

```
app/                        # Pages and API routes
components/                 # Reusable React components
lib/                        # API helpers and constants
public/                     # Static assets
```

## Submitting a Pull Request

1. **Push** your branch to your fork
2. **Open a pull request** against the `main` branch
3. **Describe your changes** — what you changed and why
4. **Link any related issues** if applicable

We'll review your PR and may suggest changes. Once everything looks good, we'll merge it in.

## Reporting Issues

When opening an issue, please include:

- A clear description of the problem or suggestion
- Steps to reproduce (for bugs)
- Screenshots if relevant
- Your browser/device info (for UI issues)

## Code of Conduct

Be kind, be respectful, and be constructive. We're all here because we believe in better money and open-source software. Let's keep it positive.

## Questions?

Reach out at [hi@bitcoin.rocks](mailto:hi@bitcoin.rocks) — we're happy to help you get started.
