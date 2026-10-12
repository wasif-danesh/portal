import type { Metadata } from "next";
import { AppCard } from "@/components/AppCard";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Apps",
  description: "AI products and apps built by Wasif Danesh.",
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  return (
    <div className="container-page pt-16 sm:pt-24">
      <p className="eyebrow">Apps</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Products & experiments
      </h1>
      <p className="text-muted mt-4 max-w-xl text-lg">
        Everything I&apos;m building in the open, from voice to vision to enterprise tooling.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
