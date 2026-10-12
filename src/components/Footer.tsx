import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const linkClass = "text-muted transition hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-border bg-surface/40 mt-24 border-t">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
            <Logo />
            <span>{site.name}</span>
          </Link>
          <p className="text-muted mt-4 max-w-xs text-sm leading-relaxed">
            AI engineer based in Australia, building products and writing about how they work.
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={linkClass}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div>
          <h2 className="eyebrow">Connect</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {site.social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  {s.label}
                  <ArrowUpRight className="size-3.5 opacity-60" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a href="/rss.xml" className={linkClass}>
                RSS feed
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="eyebrow">Get in touch</h2>
          <p className="text-muted mt-4 text-sm leading-relaxed">
            Have a project or an idea? I&apos;d love to hear about it.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-accent mt-4 inline-flex text-sm font-medium break-all hover:underline"
          >
            {site.email}
          </a>
          <div>
            <Link
              href="/work-with-me#contact"
              className="border-border hover:bg-surface-2 mt-5 inline-flex rounded-full border px-4 py-2 text-sm font-medium transition"
            >
              Work with me
            </Link>
          </div>
        </div>
      </div>

      <div className="border-border border-t">
        <div className="container-page text-muted flex flex-col gap-2 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Wasif Danesh. All rights reserved.</p>
          <p>ABN 14 116 228 753 · Operating as {site.brand}</p>
        </div>
      </div>
    </footer>
  );
}
