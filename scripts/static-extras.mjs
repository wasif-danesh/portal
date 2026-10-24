// Runs after a static build (npm run build:static). Static hosts like Cloudflare read
// redirects and headers from plain files next to the pages instead of from Next.js.
import { writeFileSync, existsSync } from "node:fs";

const out = "out";
if (!existsSync(out)) {
  console.error(`No ${out}/ folder. Run "npm run build:static" instead of calling this directly.`);
  process.exit(1);
}

// The old portfolio "Apps" page is now the product suite.
writeFileSync(`${out}/_redirects`, ["/apps /products 301", ""].join("\n"));

writeFileSync(
  `${out}/_headers`,
  [
    "/*",
    "  X-Content-Type-Options: nosniff",
    "  X-Frame-Options: SAMEORIGIN",
    "  Referrer-Policy: strict-origin-when-cross-origin",
    "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
    "",
    "/_next/static/*",
    "  Cache-Control: public, max-age=31536000, immutable",
    "",
  ].join("\n"),
);

console.log(`Wrote ${out}/_redirects and ${out}/_headers`);
