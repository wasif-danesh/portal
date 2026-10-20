"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nav">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-md focus:bg-[var(--accent)] focus:px-3 focus:py-1.5 focus:text-[var(--on-accent)]"
      >
        Skip to content
      </a>
      <div className="wrap nav-in">
        <Link href="/" className="brand">
          <Logo />
          {site.name}
        </Link>

        <nav className="links" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-r">
          <ThemeToggle />
          <Link href="/get" className="btn btn-p sm">
            Get early access
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="ic sm" /> : <Menu className="ic sm" />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" aria-label="Mobile" className={`mobile ${open ? "open" : ""}`}>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/get" onClick={() => setOpen(false)}>
          Get early access
        </Link>
      </nav>
    </header>
  );
}
