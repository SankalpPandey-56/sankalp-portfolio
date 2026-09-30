import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...PROJECTS.map((p) => ({
      url: `${base}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
