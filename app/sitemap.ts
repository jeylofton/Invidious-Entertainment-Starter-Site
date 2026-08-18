import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

/* Generated at build time so newly published posts appear automatically.
   Replaces the old hand-maintained public/sitemap.xml. */

const SITE_URL = "https://invidiousentertainment.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/writing`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/writing/${post.slug}`,
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
