import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FilmPlayer } from "@/components/FilmPlayer";
import { PageHead } from "@/components/Section";

export const metadata: Metadata = {
  title: "Watch the film",
  description: "The 93-second Wasify AI film, made on a Mac with Wasify AI itself.",
  alternates: { canonical: "/watch" },
};

export default function WatchPage() {
  return (
    <>
      <PageHead
        kicker="Watch"
        title="The Wasify AI film"
        lead="93 seconds, made on a Mac with Wasify AI itself. The screens are the real app running real models on a laptop."
      />
      <section className="sec tight">
        <div className="wrap">
          <FilmPlayer />
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="note">
            <h3>Made with what it shows</h3>
            <p className="muted">
              The narration is a Wasify AI speech model, the music is a Wasify AI music model, and
              the screen footage is the real desktop app. Model waits are shortened to a few
              seconds, and nothing on screen is mocked up, except the &ldquo;coming soon&rdquo;
              cards.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
