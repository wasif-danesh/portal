import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ProductTile } from "@/components/icons";
import { Section } from "@/components/Section";
import { Window } from "@/components/Window";
import { getProduct, products } from "@/lib/products";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProduct((await params).slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.lead,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: `${p.name} | Wasify AI`, description: p.lead },
  };
}

export default async function ProductPage({ params }: Props) {
  const p = getProduct((await params).slug);
  if (!p) notFound();

  return (
    <>
      <section className="phead" style={{ "--c": p.color } as React.CSSProperties}>
        <div className="glow sm" aria-hidden="true" />
        <div className="wrap">
          <p className="crumb">
            <Link href="/products">Products</Link> / {p.name}
          </p>
          <div className="phero">
            <div>
              <ProductTile color={p.color} icon={p.icon} />
              <h1>
                {p.name}: <span className="grad">{p.tag}</span>
              </h1>
              <p className="lead">{p.lead}</p>
              <p>
                <Link className="btn btn-p lg" href="/get">
                  Get early access
                </Link>
                <Link className="btn btn-g lg" href="/watch">
                  Watch the film
                </Link>
              </p>
            </div>
            <Window img={p.img} tilt priority alt={`${p.name} in Wasify AI`} />
          </div>
        </div>
      </section>

      <Section kicker="What it does" title="Made simple.">
        <div className="cols2">
          {p.features.map((f) => (
            <div key={f.title} className="card">
              <h3>{f.title}</h3>
              <p className="muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="sec alt">
        <div className="wrap cols2">
          <div>
            <p className="eyebrow">Also included</p>
            <h2>The details that matter</h2>
            <ul className="list lg">
              {p.extras.map((e) => (
                <li key={e}>
                  <Check className="ic sm" aria-hidden="true" /> {e}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Try saying</p>
            <h2>Start with a sentence</h2>
            <ul className="tries">
              {p.tries.map((t) => (
                <li key={t} className="try">
                  “{t}”
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section
        kicker="Works together"
        title="Part of one app"
        lead="Everything you make is saved to one library, and each product can use the others."
      >
        <div className="chips">
          {products
            .filter((o) => o.slug !== p.slug)
            .map((o) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="chipl">
                <ProductTile color={o.color} icon={o.icon} size="xs" />
                {o.name}
              </Link>
            ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
