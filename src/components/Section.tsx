import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Section({
  eyebrow,
  title,
  href,
  hrefLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  hrefLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        </div>
        {href && (
          <Link
            href={href}
            className="text-muted hover:text-foreground hidden items-center gap-1.5 text-sm transition sm:inline-flex"
          >
            {hrefLabel ?? "View all"} <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}
