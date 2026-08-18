import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

/* ============================================================
   POSTS  — file-backed writing section.

   Every piece is a markdown file in /content/posts. To publish,
   add a .md file with the frontmatter block shown in
   content/posts/_template.md and deploy. No database, no CMS.

   Files whose name starts with "_" are ignored, so templates and
   notes can live alongside real posts. A post with `draft: true`
   is hidden from the site but stays in the repo.
   ============================================================ */

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const WORDS_PER_MINUTE = 200;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

type Frontmatter = Record<string, string>;

/* Minimal frontmatter reader: a --- fenced block of `key: value`
   lines. Deliberately not YAML — we only need flat strings, and
   this avoids another dependency. */
function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { data: {}, body: raw };

  const data: Frontmatter = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (key) data[key] = value.replace(/^["'](.*)["']$/, "$1");
  }

  return { data, body: match[2] };
}

function readPostFile(filename: string): Post | null {
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, body } = parseFrontmatter(raw);

  if (data.draft === "true") return null;
  if (!data.title || !data.date) return null;

  const words = body.split(/\s+/).filter(Boolean).length;

  return {
    slug: filename.replace(/\.md$/, ""),
    title: data.title,
    description: data.description ?? "",
    date: data.date,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    // Content is authored in this repo, never user-submitted, so the
    // rendered HTML is trusted.
    html: marked.parse(body, { async: false }),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
    .map(readPostFile)
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
