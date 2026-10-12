import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/content";
import { ALL_INDUSTRIES } from "@/lib/industry-content";

const SITE = "https://www.dekorvai.com";

// Platform and solution slugs live in the DEDICATED_PAGES / DEDICATED_SOLUTIONS
// maps inside their [slug]/page.tsx files, which are not exported. Keep these
// two lists in step with those maps when a page is added or removed.
const PLATFORM_SLUGS = [
  "data-quality-profiling",
  "etl",
  "data-masking",
  "agentic-ai",
  "integrations",
];

const SOLUTION_SLUGS = [
  "master-data-management",
  "data-quality-governance",
  "compliance",
  "test-data-management",
  "system-consolidation",
  "s4hana-data-migration",
];

// There are no /platform, /solutions or /industries index routes, only the
// [slug] children, so listing the parents here would publish 404s.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const platform: MetadataRoute.Sitemap = PLATFORM_SLUGS.map((slug) => ({
    url: `${SITE}/platform/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const solutions: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((slug) => ({
    url: `${SITE}/solutions/${slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industries: MetadataRoute.Sitemap = Object.keys(ALL_INDUSTRIES).map(
    (slug) => ({
      url: `${SITE}/industries/${slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const posts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...platform, ...solutions, ...industries, ...posts];
}
