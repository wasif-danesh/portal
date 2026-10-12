import { ArrowUpRight, AudioLines, Network, Palette } from "lucide-react";
import { statusLabel, type AppEntry } from "@/lib/apps";
import { GitHubIcon } from "./GitHubIcon";

const icons = { voice: AudioLines, vision: Palette, platform: Network } as const;
const dot: Record<AppEntry["status"], string> = {
  live: "bg-emerald-500",
  beta: "bg-sky-500",
  "in-development": "bg-amber-500",
  private: "bg-zinc-400",
};

export function AppCard({ app, className = "" }: { app: AppEntry; className?: string }) {
  const Icon = icons[app.icon];

  const title = (
    <>
      {app.name}
      {app.href && (
        <ArrowUpRight
          className="text-muted group-hover:text-accent size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  return (
    <article
      className={`group border-border bg-surface rounded-card relative flex flex-col border p-6 transition ${
        app.href
          ? "hover:border-accent/50 hover:shadow-accent/5 hover:-translate-y-0.5 hover:shadow-lg"
          : ""
      } ${className}`}
    >
      <div className="flex items-start justify-between">
        <span className="from-accent/20 to-accent-2/20 text-accent inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="border-border text-muted inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
          <span className={`size-1.5 rounded-full ${dot[app.status]}`} />
          {statusLabel[app.status]}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-semibold tracking-tight">
        {app.href ? (
          <a
            href={app.href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:rounded-card flex items-center gap-1.5 after:absolute after:inset-0"
          >
            {title}
          </a>
        ) : (
          <span className="flex items-center gap-1.5">{title}</span>
        )}
      </h3>
      <p className="text-accent mt-1 text-sm">{app.tagline}</p>
      <p className="text-muted mt-3 text-sm leading-relaxed">{app.description}</p>

      <div className="mt-5 flex items-end justify-between gap-3">
        <ul className="flex flex-wrap gap-2">
          {app.tags.map((t) => (
            <li
              key={t}
              className="bg-surface-2 text-muted rounded-md px-2 py-1 font-mono text-[11px]"
            >
              {t}
            </li>
          ))}
        </ul>
        {app.repo && (
          <a
            href={app.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${app.name} source code on GitHub`}
            title="View source on GitHub"
            className="border-border text-muted hover:text-foreground hover:border-accent/60 relative z-10 inline-flex size-9 shrink-0 items-center justify-center rounded-full border transition"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
    </article>
  );
}
