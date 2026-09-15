export interface BlogPost {
  title: string;
  date: string;
  body: string;
  video?: string;
}

export const posts: BlogPost[] = [
  {
    title: 'Ebb Tide Forever',
    date: '2026-09-15',
    body: 'eduardo is ebb tide forever',
    video: 'https://www.youtube.com/watch?v=DOOwp_pemRo',
  },
];

/** A short, title-based slug, e.g. "Ebb Tide Forever" -> "ebb-tide-forever". */
export const slugify = (s: string): string =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/** Convert a YouTube watch URL to its embed form. */
export const toEmbed = (url: string): string =>
  url.includes('watch?v=') ? url.replace('watch?v=', 'embed/').split('&')[0] : url;

/** Resolve a post by its date (e.g. /blog/2026-09-15) or its title slug (e.g. /blog/ebb-tide-forever). */
export const findPost = (id?: string): BlogPost | undefined =>
  posts.find((p) => p.date === id || slugify(p.title) === id);
