import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pages are static, so the build date is when they last changed.
  const builtAt = new Date();
  const pages = [
    "",
    "/products",
    "/watch",
    "/privacy",
    "/architecture",
    "/roadmap",
    "/get",
    "/writing",
    "/about",
    "/work-with-me",
  ].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: builtAt,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/writing/${p.slug}`,
    lastModified: p.updated ?? p.date,
    priority: 0.6,
  }));
  const productPages = products.map((p) => ({
    url: `${site.url}/products/${p.slug}`,
    lastModified: builtAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...pages, ...productPages, ...posts];
}
