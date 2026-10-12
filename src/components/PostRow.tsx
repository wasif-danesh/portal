import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostRow({ post }: { post: Post }) {
  return (
    <Link
      href={`/writing/${post.slug}`}
      className="group border-border grid gap-1 border-b py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
    >
      <time dateTime={post.date.toISOString()} className="text-muted font-mono text-xs sm:pt-1.5">
        {formatDate(post.date)}
      </time>
      <div>
        <h3 className="group-hover:text-accent text-lg font-medium tracking-tight transition">
          {post.title}
        </h3>
        <p className="text-muted mt-1 text-sm">{post.description}</p>
        <p className="text-muted mt-2 font-mono text-[11px]">
          {post.readingMinutes} min read
          {post.tags.length > 0 && ` · ${post.tags.join(" · ")}`}
        </p>
      </div>
    </Link>
  );
}
