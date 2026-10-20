import type { Metadata } from "next";
import { PageHead } from "@/components/Section";
import { PostRow } from "@/components/PostRow";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and product notes on AI, privacy, agents and engineering.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHead
        kicker="Writing"
        title="Articles and product notes."
        lead={
          <>
            How Wasify AI is built, release notes, and thinking on local AI, privacy and
            engineering.{" "}
            <a href="/rss.xml" className="link">
              Subscribe via RSS
            </a>
            .
          </>
        }
      />
      <section className="sec tight">
        <div className="wrap narrow">
          <div className="posts">
            {posts.length === 0 ? (
              <p className="muted">Nothing published yet.</p>
            ) : (
              posts.map((p) => <PostRow key={p.slug} post={p} />)
            )}
          </div>
        </div>
      </section>
    </>
  );
}
