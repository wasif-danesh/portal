import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Library, FlaskConical } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { ProductTile, TileIcon } from "@/components/icons";
import { PageHead, Section } from "@/components/Section";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Chat, Notebook, Images, Video, Voice and Music in Wasify AI.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHead
        kicker="Products"
        title="One app. Six ways to create."
        lead="Chat, Notebook, Images, Video, Voice and Music share one library and one set of models, so they work together."
      />
      <section className="sec tight">
        <div className="wrap">
          <div className="pgrid">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="pcard"
                style={{ "--c": p.color } as React.CSSProperties}
              >
                <div className="pimg">
                  <Image
                    src={`/images/product/${p.img}.jpg`}
                    alt=""
                    width={1600}
                    height={p.img === "voice" ? 1125 : 1000}
                    sizes="(min-width: 800px) 560px, 100vw"
                  />
                </div>
                <div className="pbody">
                  <ProductTile color={p.color} icon={p.icon} size="md" />
                  <h3>{p.name}</h3>
                  <p className="muted">{p.lead}</p>
                  <span className="more">
                    Explore {p.name} <ArrowRight className="ic sm" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section kicker="Across the whole app" title="Shared by every product" alt>
        <div className="cols3">
          <div className="card">
            <TileIcon color="#3b82f6" icon={Library} size="md" />
            <h3>Library</h3>
            <p className="muted">
              Everything you make lands in one place, searchable by meaning in any language.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#14b8a6" icon={Layers} size="md" />
            <h3>Models</h3>
            <p className="muted">
              See, pick and manage the models behind each product, and what each one needs.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#8b5cf6" icon={FlaskConical} size="md" />
            <h3>
              Train <span className="chip">soon</span>
            </h3>
            <p className="muted">Teach Wasify AI your own style with a few examples.</p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
