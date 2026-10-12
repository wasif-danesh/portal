# wasifyai.com — portal

Portfolio, apps and writing of Wasif Danesh. Next.js (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Node 22.

## Develop

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
npm run check                # lint + typecheck + format check
npm run build && npm start
```

## Structure

```
src/app/          routes (/, /apps, /writing, /writing/[slug], /about, /work-with-me, api, sitemap, rss)
src/components/   UI components
src/lib/          site config (site.ts), apps data (apps.ts), MDX loader (posts.ts)
content/writing/  blog posts as .mdx (frontmatter validated with zod at build time)
public/           static assets, favicons
```

## Content

- **New post:** add `content/writing/<slug>.mdx` with `title`, `description`, `date`, optional `tags`, `draft`.
  Drafts show in dev only.
- **New app:** add an entry to `src/lib/apps.ts`.
- **Nav / socials / email:** `src/lib/site.ts`.

## Deploy

**Render:** New → Blueprint → select this repo (`render.yaml`). Set env vars in the dashboard.
Add the custom domain `wasifyai.com` under Settings → Custom Domains.

**Proxmox / any Docker host:**

```bash
cp .env.example .env && docker compose up -d --build   # serves on :3000
```

Put a reverse proxy (Caddy / Nginx Proxy Manager / Cloudflare Tunnel) in front for TLS.
Health check: `GET /api/health`.

`NEXT_PUBLIC_*` variables are inlined at build time, so rebuild after changing them.
