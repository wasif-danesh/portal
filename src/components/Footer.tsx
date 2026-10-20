import Link from "next/link";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div>
          <Link href="/" className="brand">
            <Logo />
            {site.name}
          </Link>
          <p className="muted small mt">
            One app for everything you create with AI, running on your own computer.
          </p>
        </div>
        <div>
          <h4 className="eyebrow">Products</h4>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link href={`/products/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Explore</h4>
          <ul>
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/work-with-me">Work with me</Link>
            </li>
            <li>
              <Link href="/get">Early access</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow">Connect</h4>
          <ul>
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/rss.xml">RSS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-b">
        <span>© {new Date().getFullYear()} Wasif Danesh · ABN 14 116 228 753</span>
        <span>Wasify AI is built in Australia</span>
      </div>
    </footer>
  );
}
