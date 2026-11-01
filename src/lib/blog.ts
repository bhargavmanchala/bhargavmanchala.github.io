import { getCollection, type CollectionEntry } from 'astro:content';
import { categoryOf } from '../data/categories';

export type Post = CollectionEntry<'blog'> & { category: string; minutes: number };

const WORDS_PER_MINUTE = 200;

// All published posts, newest first, with the category (from the folder) and reading time.
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries
    .map((entry) => ({
      ...entry,
      category: categoryOf(entry.id),
      minutes: Math.max(1, Math.round((entry.body ?? '').split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE)),
    }))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
