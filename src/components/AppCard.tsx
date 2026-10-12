import { ArrowUpRight, AudioLines, Network, Palette } from "lucide-react";
import { statusLabel, type AppEntry } from "@/lib/apps";

const icons = { voice: AudioLines, vision: Palette, platform: Network } as const;
const dot: Record<AppEntry["status"], string> = {
  live: "bg-emerald-500",
  beta: "bg-sky-500",
  "in-development": "bg-amber-500",
  private: "bg-zinc-400",
};

export function AppCard({ app, className = "" }: { app: AppEntry; className?: string }) {
  const Icon = icons[app.icon];
  const body = (
    <>
      <div className="flex items-start justify-between">
        <span className="from-accent/20 to-accent-2/20 text-accent inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span className="border-border text-muted inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
          <span className={`size-1.5 rounded-full ${dot[app.status]}`} />
          {statusLabel[app.status]}
        </span>
      </div>
      <h3 className="mt-6 flex items-center gap-1.5 text-xl font-semibold tracking-tight">
        {app.name}
        {app.href && (
          <ArrowUpRight
            className="text-muted group-hover:text-accent size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </h3>
      <p className="text-accent mt-1 text-sm">{app.tagline}</p>
      <p className="text-muted mt-3 text-sm leading-relaxed">{app.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {app.tags.map((t) => (
          <li
            key={t}
            className="bg-surface-2 text-muted rounded-md px-2 py-1 font-mono text-[11px]"
          >
            {t}
          </li>
        ))}
      </ul>
    </>
  );

  const base = `group flex flex-col rounded-card border border-border bg-surface p-6 transition ${className}`;
  return app.href ? (
    <a
      href={app.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} hover:border-accent/50 hover:shadow-accent/5 hover:-translate-y-0.5 hover:shadow-lg`}
    >
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
}
