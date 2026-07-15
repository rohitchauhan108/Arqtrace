import BLOG from "./blog.json";

function slugify(title) {
  return title
    .toString()
    .toLowerCase()
    .replace(/[’'“”]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const POSTS = BLOG.map((p) => ({ ...p, slug: slugify(p.title) }));

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return POSTS.map((p) => ({ slug: p.slug }));
}
