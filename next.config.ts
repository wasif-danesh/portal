import type { NextConfig } from "next";

/**
 * Two ways to ship the same site:
 *  - default: a Node server (standalone), used by Docker, Render and Proxmox.
 *  - STATIC_EXPORT=1: plain files in out/, for static hosting such as Cloudflare.
 *    Build it with `npm run build:static`.
 */
const isStatic = process.env.STATIC_EXPORT === "1";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  output: isStatic ? "export" : "standalone",
  // Server-only routes are named route.api.ts, so a static build can leave them out.
  pageExtensions: isStatic ? ["tsx", "ts"] : ["tsx", "ts", "api.ts"],
  // No image server in a static build; the screenshots are already web-sized.
  images: { unoptimized: isStatic },
  poweredByHeader: false,
  reactStrictMode: true,
  agentRules: false,
  // Static hosting has no Next server, so redirects and headers are written to
  // out/_redirects and out/_headers by scripts/static-extras.mjs instead.
  ...(isStatic
    ? {}
    : {
        async redirects() {
          // The old portfolio "Apps" page is now the Wasify AI product suite.
          return [{ source: "/apps", destination: "/products", permanent: true }];
        },
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
