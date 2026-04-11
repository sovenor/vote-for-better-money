import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix Turbopack root detection
  turbopack: {
    root: __dirname,
  },

  // Image optimization
  images: {
    formats: ["image/webp"],
  },

  // Redirects for retired/consolidated pages
  async redirects() {
    return [
      // why.html → homepage (preserves query params automatically)
      { source: "/why", destination: "/", permanent: true },
      // Archived pages → homepage
      { source: "/contest", destination: "/", permanent: true },
      { source: "/meetup-box", destination: "/", permanent: true },
      { source: "/meetup-box-success", destination: "/", permanent: true },
      { source: "/get-involved", destination: "/", permanent: true },
      { source: "/stickers", destination: "/", permanent: false },
      { source: "/sticker-files", destination: "/", permanent: true },
      { source: "/sticker-success", destination: "/", permanent: true },
      // Legacy redirects
      { source: "/getinvolved", destination: "/", permanent: true },
      { source: "/use-bitcoin", destination: "/how-to-use-bitcoin", permanent: true },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
