import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Database,
  GitFork,
  Lock,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";

const models = [
  {
    key: "private",
    icon: Server,
    badge: Lock,
    eyebrow: "Local / private cloud",
    title: "Your data never leaves your walls",
    body: "Open-weight models run on hardware you control: on-premises, in your VPC or in a private cloud. Built for regulated and security-sensitive teams.",
    points: [
      "Prompts and documents stay inside your network",
      "No third-party inference provider in the data path",
      "Full control over access, logging and retention",
      "Works in air-gapped or restricted environments",
    ],
    tech: ["Llama", "Mistral", "Qwen", "vLLM", "Ollama", "GPU servers"],
    tone: "from-emerald-500/15 to-accent-2/10 text-emerald-500",
  },
  {
    key: "public",
    icon: Cloud,
    badge: Zap,
    eyebrow: "Public cloud",
    title: "Frontier models, zero infrastructure",
    body: "Managed model APIs and cloud AI platforms for the strongest models, fastest delivery and elastic scale, when your data policy allows it.",
    points: [
      "Access to the most capable frontier models",
      "Fastest path from idea to working product",
      "Scales up and down with demand, no hardware to run",
      "Lower upfront cost and less to maintain",
    ],
    tech: ["Model APIs", "AWS", "Azure", "GCP", "Serverless GPUs"],
    tone: "from-accent/20 to-accent-2/10 text-accent",
  },
] as const;

function FlowNode({
  icon: Icon,
  label,
  sub,
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`bg-surface flex items-center gap-3 rounded-2xl border px-4 py-3 ${
        accent ? "border-accent/50" : "border-border"
      }`}
    >
      <span className="bg-surface-2 text-accent inline-flex size-10 shrink-0 items-center justify-center rounded-xl">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-sm font-medium">{label}</span>
        <span className="text-muted block text-xs">{sub}</span>
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="text-muted flex items-center justify-center" aria-hidden="true">
      <ArrowRight className="size-5 rotate-90 md:rotate-0" />
    </div>
  );
}

export function DeploymentModels() {
  return (
    <section className="container-page mt-20" aria-labelledby="deployment-heading">
      <div className="max-w-2xl">
        <p className="eyebrow">Deployment models</p>
        <h2
          id="deployment-heading"
          className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          AI that runs where your data is allowed to live
        </h2>
        <p className="text-muted mt-3">
          Not every organisation can send data to a public inference API. I design and build for
          both worlds, and for the hybrid in between.
        </p>
      </div>

      {/* Two models */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {models.map((m) => {
          const Icon = m.icon;
          const Badge = m.badge;
          return (
            <article
              key={m.key}
              className="group rounded-card border-border bg-surface hover:border-accent/40 relative overflow-hidden border p-6 transition sm:p-8"
            >
              <div
                className={`pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br opacity-60 blur-3xl ${m.tone.split("text-")[0]}`}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${m.tone}`}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="border-border text-muted inline-flex size-9 items-center justify-center rounded-full border">
                    <Badge className="size-4" aria-hidden="true" />
                  </span>
                </div>
                <p className="eyebrow mt-6">{m.eyebrow}</p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight">{m.title}</h3>
                <p className="text-muted mt-3 text-sm leading-relaxed">{m.body}</p>
                <ul className="mt-5 space-y-2.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm">
                      <Check className="text-accent mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {m.tech.map((t) => (
                    <li
                      key={t}
                      className="bg-surface-2 text-muted rounded-md px-2 py-1 font-mono text-[11px]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* Hybrid */}
      <div className="rounded-card border-border bg-surface mt-4 border p-6 sm:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Hybrid</p>
            <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
              Route each request to the right place
            </h3>
          </div>
          <p className="text-muted max-w-md text-sm">
            Sensitive data stays on your private model. Everything else uses the best public one. A
            policy layer decides, so teams get both safety and capability.
          </p>
        </div>

        <div className="mt-8 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          <FlowNode icon={Database} label="Your data & users" sub="Documents, chats, APIs" />
          <Connector />
          <FlowNode icon={GitFork} label="Policy router" sub="Classify, redact, route" accent />
          <Connector />
          <div className="grid gap-3">
            <FlowNode icon={ShieldCheck} label="Private model" sub="Sensitive and regulated" />
            <FlowNode icon={Cloud} label="Public model" sub="General and high-capability" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link
          href="/work-with-me#contact"
          className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:opacity-90"
        >
          Discuss your requirements <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
        <p className="text-muted text-sm">
          Unsure which fits? We start from your data classification and compliance needs.
        </p>
      </div>
    </section>
  );
}
