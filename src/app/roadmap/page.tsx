import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHead } from "@/components/Section";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "What is built and what is coming next in Wasify AI.",
  alternates: { canonical: "/roadmap" },
};

const columns = [
  {
    title: "Built",
    chip: "Built",
    done: true,
    items: [
      "Chat with edit, versions and attachments",
      "Notebooks with citations and a Studio",
      "Images: create and edit",
      "Video: from words, and animate a picture",
      "Voice: speech both ways",
      "Music with lyrics",
      "One searchable library",
      "Models screen",
    ],
  },
  {
    title: "Testing now",
    chip: "Now",
    items: [
      "Hands-on testing in the real Mac window",
      "Fixing bugs from that pass",
      "Listening checks for voice and music",
    ],
  },
  {
    title: "Next",
    chip: "Next",
    items: [
      "A simpler way to choose models",
      "Web edition parity with the desktop app",
      "Early-access invitations",
    ],
  },
  {
    title: "Later",
    chip: "Later",
    items: [
      "Train: teach it your style",
      "Motion graphics",
      "3D models from a picture",
      "Agents for whole tasks",
      "Your own cloud key",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHead
        kicker="Roadmap"
        title="What's built, and what's next."
        lead="Wasify AI v1 is in progress: desktop first, Mac first, English first. Here is where each part stands."
      />
      <section className="sec tight">
        <div className="wrap cols4">
          {columns.map((c) => (
            <div key={c.title} className="card">
              <span className={`chip ${c.done ? "ok" : ""}`}>{c.chip}</span>
              <h3>{c.title}</h3>
              <ul className="list">
                {c.items.map((i) => (
                  <li key={i}>
                    {c.done ? (
                      <Check className="ic sm" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="ic sm" aria-hidden="true" />
                    )}{" "}
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="note">
            <h3>Changelog</h3>
            <p className="muted">
              Release notes will appear here, newest first, and also in the RSS feed. This is where
              &ldquo;what&apos;s new&rdquo; lives once there are releases to show.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
