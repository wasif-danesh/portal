import type { Metadata } from "next";
import { PostRow } from "@/components/PostRow";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles and notes on AI, machine learning, agents and cloud engineering.",
  alternates: { canonical: "/writing" },
};

export default function WritingPage() {
  const posts = getAllPosts();
  return (
    <div className="container-page pt-16 sm:pt-24">
      <p className="eyebrow">Writing</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Articles & notes</h1>
      <p className="text-muted mt-4 max-w-xl text-lg">
        Notes on AI, machine learning, agents, cloud and security.{" "}
        <a href="/rss.xml" className="text-accent hover:underline">
          Subscribe via RSS
        </a>
        .
      </p>
      <div className="border-border mt-12 border-t">
        {posts.length === 0 ? (
          <p className="text-muted py-8">Nothing published yet.</p>
        ) : (
          posts.map((p) => <PostRow key={p.slug} post={p} />)
        )}
      </div>
    </div>
  );
}
