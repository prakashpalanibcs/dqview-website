/**
 * One-time migration script: converts TypeScript blog data to markdown files.
 * Uses tsx to import the TS modules directly.
 * Run with: npx tsx scripts/migrate-blogs.mjs
 */

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const locales = ["en", "nl", "de"];

function postToMarkdown(post) {
  const frontmatter = [
    "---",
    `title: "${post.title.replace(/"/g, '\\"')}"`,
    `excerpt: "${post.excerpt.replace(/"/g, '\\"')}"`,
    `tag: "${post.tag}"`,
    `author: "${post.author}"`,
    `slug: "${post.slug}"`,
    "---",
    "",
  ].join("\n");

  const body = post.sections
    .map((section) => {
      let md = "";
      if (section.heading) {
        md += `## ${section.heading}\n\n`;
      }
      // Convert bullet points to markdown lists
      let content = section.content;
      content = content.replace(/\u2022 /g, "- ");
      md += content;
      return md;
    })
    .join("\n\n");

  return frontmatter + body + "\n";
}

// Main
for (const locale of locales) {
  const mod = await import(`../src/data/blogs/${locale}.ts`);
  const posts = mod.blogPosts;

  console.log(`${locale}: Found ${posts.length} posts`);

  for (const post of posts) {
    const mdContent = postToMarkdown(post);
    const outDir = join(root, "content", "blog", locale);
    mkdirSync(outDir, { recursive: true });
    const outPath = join(outDir, `${post.slug}.md`);
    writeFileSync(outPath, mdContent, "utf-8");
    console.log(`  -> ${outPath.replace(root + "/", "")}`);
  }
}

console.log("\nMigration complete!");
