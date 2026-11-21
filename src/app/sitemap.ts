import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-21");
  return [
    { url: site.siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.siteUrl}/traductor-tikuna`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
