import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  author: string;
  content: string; // raw markdown body
  /** Optional SEO overrides. The excerpt and title read well on the page but
   *  often exceed what Google shows, so a post may supply a tighter pair for
   *  the <title> and meta description without changing the visible copy. */
  metaTitle?: string;
  metaDescription?: string;
}

export interface Event {
  title: string;
  location: string;
  description: string;
  url: string;
  date?: string;
}

const contentDir = path.join(process.cwd(), "content");

export function getBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, "blog");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: data.slug || file.replace(/\.md$/, ""),
      title: data.title,
      excerpt: data.excerpt,
      tag: data.tag,
      author: data.author,
      content,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
    };
  });
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug || slug,
    title: data.title,
    excerpt: data.excerpt,
    tag: data.tag,
    author: data.author,
    content,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
  };
}

export function getEvents(): Event[] {
  const dir = path.join(contentDir, "events");
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      return JSON.parse(raw) as Event;
    })
    .sort((a, b) => {
      if (a.date && b.date) return a.date.localeCompare(b.date);
      return 0;
    });
}
