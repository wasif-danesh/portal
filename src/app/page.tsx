import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AppCard } from "@/components/AppCard";
import { DeploymentModels } from "@/components/DeploymentModels";
import { PostRow } from "@/components/PostRow";
import { Section } from "@/components/Section";
import { apps } from "@/lib/apps";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  const featured = apps.filter((a) => a.featured);
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
        <Image
          src="/images/hero-ai.png"
          alt=""
          width={900}
          height={900}
          priority
          className="pointer-events-none absolute -top-24 -right-24 -z-10 hidden w-[44rem] max-w-none [mask-image:radial-gradient(circle,#000_30%,transparent_70%)] opacity-40 mix-blend-screen lg:-right-10 dark:block"
        />
        <div className="container-page pt-20 sm:pt-28">
          <p className="eyebrow reveal">AI engineer · Australia</p>
          <h1
            className="reveal mt-5 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            I build AI products and write about{" "}
            <span className="gradient-text">how they work.</span>
          </h1>
          <p
            className="reveal text-muted mt-6 max-w-xl text-lg leading-relaxed"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Hi, I&apos;m {site.name}. Voice, vision and agent systems, from research through to
            production. This is where my apps, articles and experiments live.
          </p>
          <div
            className="reveal mt-9 flex flex-wrap gap-3"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <Link
              href="/apps"
              className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:opacity-90"
            >
              See the apps <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/writing"
              className="border-border hover:bg-surface-2 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium transition"
            >
              Read the writing
            </Link>
          </div>
        </div>
      </section>

      {/* Apps */}
      <Section eyebrow="Apps" title="Things I've built" href="/apps" hrefLabel="All apps">
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </Section>

      {/* Deployment models */}
      <DeploymentModels />

      {/* Writing */}
      {posts.length > 0 && (
        <Section eyebrow="Writing" title="Latest articles" href="/writing">
          <div className="border-border border-t">
            {posts.map((p) => (
              <PostRow key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      {/* About */}
      <section className="container-page mt-20">
        <div className="rounded-card border-border bg-surface grid items-center gap-8 border p-6 sm:grid-cols-[auto_1fr] sm:p-10">
          <Image
            src="/images/wasif-danesh.jpg"
            alt="Portrait of Wasif Danesh"
            width={160}
            height={160}
            className="size-28 rounded-2xl object-cover sm:size-40"
          />
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Engineer first, with 25+ years of shipping software.
            </h2>
            <p className="text-muted mt-3 max-w-2xl leading-relaxed">
              Master of Computer Science (AI) at Monash University, with a background spanning
              cloud, security and mobile. I like taking an idea from a notebook to something people
              actually use.
            </p>
            <Link
              href="/about"
              className="text-accent mt-5 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              More about me <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
