import type { Metadata } from "next";
import { Bot, BookOpen, Layers, Lock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TileIcon } from "@/components/icons";
import { PageHead } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "AI consulting and product engineering: private AI, document intelligence, RAG and agents.",
  alternates: { canonical: "/work-with-me" },
};

const services = [
  {
    title: "Private and local AI",
    body: "Run models inside your network when public inference isn't an option.",
    icon: Lock,
  },
  {
    title: "Document intelligence",
    body: "Extract and reconcile data from invoices, forms and contracts, with a human in the loop.",
    icon: BookOpen,
  },
  {
    title: "Knowledge and RAG",
    body: "Assistants grounded in your own documents, with citations and access control.",
    icon: Layers,
  },
  {
    title: "Agents and MCP",
    body: "Tool-using agents that act on your systems safely.",
    icon: Bot,
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <PageHead
        kicker="Work with me"
        title="Let's build something useful."
        lead="I take on a small number of consulting and product engineering engagements. You work directly with me, with no handoffs."
      />
      <section className="sec tight">
        <div className="wrap">
          <div className="cols2">
            {services.map((s) => (
              <div key={s.title} className="card">
                <TileIcon color="#3b82f6" icon={s.icon} size="md" />
                <h3>{s.title}</h3>
                <p className="muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec alt" id="contact">
        <div className="wrap cols2">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Get in touch</h2>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Tell me what you&apos;re working on. I usually reply within a couple of business days.
            </p>
            <p className="small mt">
              Or email{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
