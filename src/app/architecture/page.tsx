import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Boxes, Cloud, Cpu, Layers, Server, ShieldCheck } from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CtaBand } from "@/components/CtaBand";
import { TileIcon } from "@/components/icons";
import { Section } from "@/components/Section";
import { StatusChip, StatusLegend } from "@/components/StatusChip";
import {
  checks,
  environments,
  faq,
  profileRows,
  repo,
  resilience,
  security,
} from "@/lib/architecture";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How Wasify AI is built: one engine shared by the desktop and web apps, Kubernetes in the cloud, and what is built today versus still ahead.",
  alternates: { canonical: "/architecture" },
};

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function ArchitecturePage() {
  return (
    <>
      <section className="phead">
        <div className="glow sm" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">Architecture</p>
          <h1>
            One engine. <span className="grad">On your computer or in the cloud.</span>
          </h1>
          <p className="lead">
            The Wasify AI desktop app and web app run the same engine. What differs is where each
            one keeps its data and where the models run. This page shows how it fits together, and
            what&apos;s built today versus still ahead.
          </p>
          <ul className="chips" style={{ marginTop: "1.5rem" }}>
            <li className="chipl">
              <StatusChip status="built" /> One shared engine
            </li>
            <li className="chipl">
              <StatusChip status="built" /> Kubernetes chart
            </li>
            <li className="chipl">
              <StatusChip status="planned" /> OpenTofu infrastructure as code
            </li>
          </ul>
        </div>
      </section>

      <Section
        kicker="The big picture"
        title="Same engine, two ways to run it"
        lead="Switch between the desktop path and the web path to see which parts each one uses."
      >
        <ArchitectureDiagram />
      </Section>

      <Section
        kicker="One engine, two profiles"
        title="The engine doesn't know where it's running"
        lead="Products never ask which profile they're in. The profile is just the set of adapters behind interfaces the engine already had."
        alt
      >
        <div className="tscroll">
          <table className="ptable">
            <thead>
              <tr>
                <th scope="col" />
                <th scope="col">Desktop</th>
                <th scope="col">Web (cloud)</th>
              </tr>
            </thead>
            <tbody>
              {profileRows.map((r) => (
                <tr key={r.what}>
                  <th scope="row">{r.what}</th>
                  <td>{r.desktop}</td>
                  <td>{r.web}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        kicker="Built to keep working"
        title="Designed so one failure doesn't lose your work"
        lead="The web profile is built around a few simple rules, so that any piece can be replaced or restarted."
      >
        <div className="cols3">
          {resilience.map((r) => (
            <div key={r.title} className="card">
              <StatusChip status={r.status} />
              <h3>{r.title}</h3>
              <p className="muted">{r.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="How it's deployed"
        title="Kubernetes everywhere, with the same images"
        lead="One set of container images and Helm charts runs in every environment. What changes between them is configuration, never code."
        alt
      >
        <div className="cols3">
          {environments.map((e, i) => (
            <div key={e.name} className="card">
              <TileIcon
                color={["#3b82f6", "#14b8a6", "#8b5cf6"][i]}
                icon={[Cpu, Server, Cloud][i]}
                size="md"
              />
              <h3
                style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}
              >
                {e.name} <StatusChip status={e.status} />
              </h3>
              <p className="small mono" style={{ color: "var(--accent)" }}>
                {e.where}
              </p>
              <p className="muted" style={{ marginTop: "0.6rem" }}>
                {e.detail}
              </p>
            </div>
          ))}
        </div>
        <ul className="chips mt2">
          {[
            "Helm",
            "Argo CD",
            "Gateway API",
            "KEDA",
            "NVIDIA GPU Operator",
            "cert-manager",
            "External Secrets",
            "AWS",
            "Google Cloud",
            "Azure",
          ].map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        kicker="Infrastructure as code"
        title="OpenTofu, one module per target"
        lead="Decided and designed. The modules themselves are next."
      >
        <div className="split">
          <div>
            <TileIcon color="#8b5cf6" icon={Layers} size="md" />
            <h3 style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
              The plan <StatusChip status="planned" />
            </h3>
            <p className="muted">
              Each target (a home lab, Google Cloud, AWS and Azure) gets one OpenTofu module, and
              every module exposes the same outputs: a cluster, CPU and GPU node pools, Postgres,
              Redis, a storage bucket and DNS. Everything above that layer is identical everywhere.
            </p>
          </div>
          <div className="stack">
            {[
              ["Infrastructure", "OpenTofu modules per target, with identical outputs", "planned"],
              [
                "Cluster add-ons",
                "Gateway API, cert-manager, ExternalDNS, External Secrets, GPU Operator, KEDA, Argo CD",
                "planned",
              ],
              [
                "The platform",
                "The same Helm charts and images, with values per environment",
                "built",
              ],
            ].map(([t, d, s]) => (
              <div
                key={t}
                className="lay"
                style={{ "--c": s === "built" ? "#14b8a6" : "#8b5cf6" } as React.CSSProperties}
              >
                <div>
                  <h4>{t}</h4>
                </div>
                <div>
                  <p className="muted small">{d}</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    <StatusChip status={s as "built" | "planned"} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        kicker="Security by design"
        title="Private by default, careful by design"
        lead="These are the rules the engine is built around."
        alt
      >
        <div className="cols2">
          {security.map((s) => (
            <div key={s.title} className="card">
              <StatusChip status={s.status} />
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        kicker="How it's checked"
        title="Checked, and written down in public"
        lead="Every architectural decision is recorded, and the code and deployment configuration are open to read."
      >
        <div className="cols2">
          {checks.map((c) => (
            <div key={c.title} className="card">
              <TileIcon color="#14b8a6" icon={ShieldCheck} size="sm" />
              <h3>{c.title}</h3>
              <p className="muted">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="cols2 mt2">
          {[
            {
              href: repo.decisions,
              t: "Decision records",
              d: "Why each choice was made, in writing.",
              i: Boxes,
            },
            {
              href: repo.architecture,
              t: "Architecture notes",
              d: "The full design, as it stands today.",
              i: Layers,
            },
            {
              href: repo.deploy,
              t: "Deployment config",
              d: "The Helm chart, Argo CD and monitoring setup.",
              i: Server,
            },
            {
              href: repo.home,
              t: "The repository",
              d: "All of the code behind Wasify AI.",
              i: Cpu,
            },
          ].map((l) => (
            <a key={l.t} className="card" href={l.href} {...external}>
              <TileIcon color="#3b82f6" icon={l.i} size="sm" />
              <h3 style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
                {l.t} <ArrowUpRight className="ic sm" aria-hidden="true" />
              </h3>
              <p className="muted">{l.d}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section kicker="Questions" title="Good questions" alt>
        <div className="faq narrow">
          {faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
          <p className="small muted mt2">
            Want to talk about a private deployment?{" "}
            <Link className="link" href="/work-with-me#contact">
              Get in touch
            </Link>
            .
          </p>
          <StatusLegend />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
