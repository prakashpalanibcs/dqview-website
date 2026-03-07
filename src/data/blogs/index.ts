import { BlogPost } from "./types";
import { blogPosts as en } from "./en";
import { blogPosts as nl } from "./nl";
import { blogPosts as de } from "./de";

export type { BlogPost };

const blogsByLocale: Record<string, BlogPost[]> = { en, nl, de };

export function getBlogPosts(locale: string): BlogPost[] {
  return blogsByLocale[locale] || blogsByLocale.en;
}

export function getBlogBySlug(locale: string, slug: string): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}
