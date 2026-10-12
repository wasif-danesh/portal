import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/apps", "/writing", "/about", "/work-with-me"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/writing/${p.slug}`,
    lastModified: p.updated ?? p.date,
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
