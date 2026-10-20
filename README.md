# wasifyai.com — Wasify AI website

The marketing site for **Wasify AI** (chat, documents, images, video, voice and music in one app), plus the author's profile and blog. Next.js (App Router) · React 19 · Tailwind CSS v4 · TypeScript · Node 22.

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
src/app/          routes: / · /products · /products/[slug] · /watch · /privacy · /roadmap · /get · /writing · /writing/[slug] · /about · /work-with-me · api · sitemap · rss
src/components/   UI components
src/lib/          site config (site.ts), products (products.ts), film chapters (film.ts), MDX loader (posts.ts)
content/writing/  blog posts as .mdx (frontmatter validated with zod at build time)
public/           favicons; images/product (app screenshots); media (the intro film, captions, poster)
```

## Content

- **New post:** add `content/writing/<slug>.mdx` with `title`, `description`, `date`, optional `tags`, `draft`.
  Drafts show in dev only.
- **Products:** edit `src/lib/products.ts`. Each entry feeds the home page, `/products` and its own page. Only claim what the app does today.
- **Screenshots:** drop a 1600px-wide JPG in `public/images/product/` and reference its name in the product entry.
- **The film:** `public/media/wasify-ai-intro.mp4` with `.vtt` captions; chapter times are in `src/lib/film.ts`.
- **Waitlist and contact:** both post to `/api/contact` (Formspree). Set `FORMSPREE_ID` in the environment.
- **Design tokens:** the product's blue template, in `src/app/globals.css` (dark by default, light via the toggle).
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
