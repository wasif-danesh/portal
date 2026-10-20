import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/writing/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date.toISOString(),
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    dateModified: (post.updated ?? post.date).toISOString(),
    author: { "@type": "Person", name: site.author, url: site.url },
    mainEntityOfPage: `${site.url}/writing/${post.slug}`,
  };

  return (
    <article className="wrap pt-12 sm:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/writing"
        className="text-muted hover:text-foreground inline-flex items-center gap-1.5 text-sm"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> All writing
      </Link>
      <header className="mt-8 max-w-3xl">
        <p className="text-muted font-mono text-xs">
          <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time> ·{" "}
          {post.readingMinutes} min read
        </p>
        <h1 className="mt-3 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-muted mt-4 text-lg">{post.description}</p>
      </header>
      <div className="prose prose-neutral dark:prose-invert prose-headings:tracking-tight prose-a:text-accent mt-10 max-w-3xl">
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
        />
      </div>
    </article>
  );
}
