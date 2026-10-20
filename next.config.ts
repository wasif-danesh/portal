import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Self-contained server bundle: small Docker image for Render / Proxmox.
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  agentRules: false,
  async redirects() {
    // The old portfolio "Apps" page is now the Wasify AI product suite.
    return [{ source: "/apps", destination: "/products", permanent: true }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
