import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skills and experience of Wasif Danesh.",
  alternates: { canonical: "/about" },
};

const skills = [
  {
    group: "AI / ML",
    items: ["Python", "PyTorch", "Transformers", "LangGraph", "MCP", "Fine-tuning", "RAG"],
  },
  { group: "Cloud & DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "DevSecOps"] },
  { group: "Product", items: ["Next.js", "React", "React Native", "Android", "APIs", "UX design"] },
  { group: "Security", items: ["OWASP", "Penetration testing", "Threat modelling"] },
];

export default function AboutPage() {
  return (
    <div className="container-page pt-16 sm:pt-24">
      <div className="grid gap-10 md:grid-cols-[1fr_16rem]">
        <div>
          <p className="eyebrow">About</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}.
          </h1>
          <div className="text-muted mt-6 max-w-2xl space-y-4 text-lg leading-relaxed">
            <p>
              I&apos;m a software engineer with more than 25 years of experience across enterprise
              systems, mobile, cloud and security, now focused on applied AI.
            </p>
            <p>
              I hold a Master of Computer Science (AI specialisation) from Monash University, and I
              build voice, vision and agent systems, from fine-tuning models to deploying the
              products around them.
            </p>
            <p>I&apos;m based in Australia and work remotely with teams around the world.</p>
          </div>
        </div>
        <Image
          src="/images/wasif-danesh.jpg"
          alt="Portrait of Wasif Danesh"
          width={256}
          height={256}
          className="size-48 rounded-2xl object-cover md:size-64"
        />
      </div>

      <section className="mt-20">
        <p className="eyebrow">Skills</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="rounded-card border-border bg-surface border p-6">
              <h2 className="font-semibold">{s.group}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className="bg-surface-2 text-muted rounded-md px-2.5 py-1 text-sm">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
