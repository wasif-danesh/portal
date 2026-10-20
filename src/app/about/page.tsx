import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Wasif Danesh, the engineer building Wasify AI: background, skills and experience.",
  alternates: { canonical: "/about" },
};

const skills = [
  {
    group: "AI / ML",
    items: ["Python", "PyTorch", "Transformers", "LangGraph", "MCP", "Fine-tuning", "RAG"],
  },
  { group: "Cloud and DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "OpenTofu"] },
  { group: "Product", items: ["Next.js", "React", "Tauri", "APIs", "UX design"] },
  { group: "Security", items: ["OWASP", "Penetration testing", "Threat modelling"] },
];

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.author,
  url: `${site.url}/about`,
  jobTitle: "AI Engineer",
  alumniOf: "Monash University",
  address: { "@type": "PostalAddress", addressCountry: "AU" },
  sameAs: site.social.map((s) => s.href),
};

export default function AboutPage() {
  const link = site.social;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <section className="phead">
        <div className="glow sm" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">About</p>
          <div className="about">
            <div>
              <h1>Hi, I&apos;m {site.author}.</h1>
              <p className="lead">
                I&apos;m a software engineer with more than 25 years of experience across enterprise
                systems, mobile, cloud and security, now building Wasify AI.
              </p>
              <p className="muted">
                I hold a Master of Computer Science (AI specialisation) from Monash University.
                I&apos;m based in Australia, and I build voice, vision and agent systems, from
                fine-tuning models to shipping the products around them.
              </p>
              <p>
                <Link className="btn btn-p" href="/work-with-me">
                  Work with me
                </Link>
                {link
                  .filter((l) => l.label === "LinkedIn" || l.label === "GitHub")
                  .map((l) => (
                    <a
                      key={l.href}
                      className="btn btn-g"
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
              </p>
            </div>
            <Image
              className="portrait"
              src="/images/wasif-danesh-portrait.jpg"
              alt={`Portrait of ${site.author}`}
              width={560}
              height={720}
              priority
            />
          </div>
        </div>
      </section>

      <Section kicker="Skills" title="What I work with">
        <div className="cols2">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3>{s.group}</h3>
              <ul className="chips" style={{ marginTop: "1rem" }}>
                {s.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="Beyond the product"
        title="Consulting"
        lead="I take on a small number of consulting engagements, including AI that must run in a private cloud or on premises."
        alt
      >
        <Link className="btn btn-g" href="/work-with-me">
          Work with me <ArrowRight className="ic sm" aria-hidden="true" />
        </Link>
      </Section>
    </>
  );
}
