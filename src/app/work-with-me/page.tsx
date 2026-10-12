import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "AI consulting and product engineering: document processing, RAG, agents, voice and vision.",
  alternates: { canonical: "/work-with-me" },
};

const services = [
  {
    title: "Document processing",
    body: "Pipelines that extract, validate and reconcile data from invoices, forms and contracts, with a human in the loop where it matters.",
  },
  {
    title: "Private knowledge & RAG",
    body: "Retrieval-augmented assistants grounded in your own documents, with citations and permission-aware access.",
  },
  {
    title: "Agents & MCP",
    body: "Tool-using agents and Model Context Protocol integrations that act on your systems safely, with deterministic fallbacks.",
  },
  {
    title: "Voice & vision",
    body: "Conversational voice, speech synthesis, computer vision and generative media, from prototype to GPU inference.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="container-page pt-16 sm:pt-24">
      <p className="eyebrow">Work with me</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Let&apos;s build something useful.
      </h1>
      <p className="text-muted mt-4 max-w-xl text-lg">
        I take on a small number of consulting and product engineering engagements. You work
        directly with me, with no handoffs.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-card border-border bg-surface border p-6">
            <h2 className="font-semibold tracking-tight">{s.title}</h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      <section id="contact" className="mt-20 grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="text-muted mt-3">
            Tell me what you&apos;re working on. I usually reply within a couple of business days.
          </p>
          <p className="mt-6 text-sm">
            Or email{" "}
            <a href={`mailto:${site.email}`} className="text-accent hover:underline">
              {site.email}
            </a>
          </p>
        </div>
        <div className="rounded-card border-border bg-surface border p-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
