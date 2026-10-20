import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, Cpu, Layers, Scale, Server, ShieldCheck, Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { TileIcon } from "@/components/icons";
import { PageHead, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy and architecture",
  description: "Where Wasify AI runs: your computer, your private cloud, or the public cloud.",
  alternates: { canonical: "/privacy" },
};

const layers = [
  {
    title: "Your screen",
    desc: "Desktop app (Mac first), or the web app in a browser.",
    items: ["Desktop window", "Web", "Tablet", "Phone"],
    c: "#3b82f6",
  },
  {
    title: "Interface",
    desc: "The same screens everywhere.",
    items: ["React", "Next.js", "TypeScript"],
    c: "#14b8a6",
  },
  {
    title: "Engine",
    desc: "Runs each product and keeps its state.",
    items: ["FastAPI", "LangGraph", "Model gateway"],
    c: "#8b5cf6",
  },
  {
    title: "Models",
    desc: "Language, image, video, voice and music models.",
    items: ["Local LLMs", "ComfyUI", "Speech", "Music"],
    c: "#ec4899",
  },
  {
    title: "Your data",
    desc: "Your library, notebooks and search index.",
    items: ["Local files", "PostgreSQL + vectors"],
    c: "#f97316",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHead
        kicker="Privacy and architecture"
        title="AI that runs where your data is allowed to live."
        lead="Not every organisation can send data to a public inference API. Wasify AI is designed to run on your computer, in your private cloud, or in the public cloud, and the choice is yours."
      />

      <Section kicker="Three ways to run it" title="Choose where it lives">
        <div className="cols3">
          <div className="card hl">
            <TileIcon color="#14b8a6" icon={Cpu} size="md" />
            <h3>On your computer</h3>
            <p className="muted">
              The desktop app starts the engine and models on your Mac. Nothing leaves it unless you
              say so.
            </p>
            <span className="chip ok">The default</span>
          </div>
          <div className="card">
            <TileIcon color="#3b82f6" icon={Server} size="md" />
            <h3>Your private cloud</h3>
            <p className="muted">
              For teams that can&apos;t use public inference: run the same containers on your own
              hardware or private cloud, with your data inside your network.
            </p>
            <span className="chip">Designed for</span>
          </div>
          <div className="card">
            <TileIcon color="#8b5cf6" icon={Cloud} size="md" />
            <h3>Public cloud</h3>
            <p className="muted">
              Use managed models and elastic GPUs on AWS, Azure or Google Cloud, with your own key,
              when your data policy allows.
            </p>
            <span className="chip">Designed for</span>
          </div>
        </div>
      </Section>

      <Section
        kicker="How it's built"
        title="A simple stack, in layers"
        lead={
          <>
            The architecture is still in draft, so this shows the design rather than a finished
            system.{" "}
            <Link href="/architecture" className="link">
              See the full architecture
            </Link>
            .
          </>
        }
        alt
      >
        <div className="stack">
          {layers.map((l) => (
            <div key={l.title} className="lay" style={{ "--c": l.c } as React.CSSProperties}>
              <div>
                <h4>{l.title}</h4>
                <p className="muted small">{l.desc}</p>
              </div>
              <div className="chips">
                {l.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="For teams" title="Built to scale and repeat">
        <div className="cols3">
          <div className="card">
            <TileIcon color="#3b82f6" icon={Layers} size="md" />
            <h3>Same images everywhere</h3>
            <p className="muted">
              One set of container images runs on a laptop, a home lab and managed Kubernetes.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#14b8a6" icon={Scale} size="md" />
            <h3>Scales with demand</h3>
            <p className="muted">
              Stateless services and a job queue for media, so GPU workers scale on queue depth.
            </p>
          </div>
          <div className="card">
            <TileIcon color="#8b5cf6" icon={ShieldCheck} size="md" />
            <h3>Infrastructure as code</h3>
            <p className="muted">
              OpenTofu describes each environment so deployments are repeatable and under version
              control.
            </p>
          </div>
        </div>
      </Section>

      <section className="sec">
        <div className="wrap">
          <div className="note">
            <h3>Our promises</h3>
            <ul className="list">
              {[
                "Prompts, documents and creations stay on your computer by default.",
                "Web search is off until you allow it. Microphone audio is not kept.",
                "If anything ever has to leave your computer, the app says so first.",
              ].map((t) => (
                <li key={t}>
                  <Check className="ic sm" aria-hidden="true" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
