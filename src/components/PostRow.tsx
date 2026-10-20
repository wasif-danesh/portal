import Link from "next/link";
import { formatDate, type Post } from "@/lib/posts";

export function PostRow({ post }: { post: Post }) {
  return (
    <Link href={`/writing/${post.slug}`} className="post">
      <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
      <div>
        <h3>{post.title}</h3>
        <p className="muted">{post.description}</p>
        <p className="mono small muted">
          {post.readingMinutes} min read
          {post.tags.length > 0 && ` · ${post.tags.join(" · ")}`}
        </p>
      </div>
    </Link>
  );
}
