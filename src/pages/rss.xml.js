import rss from '@astrojs/rss';
import { getPosts } from '../lib/blog';
import { categoryInfo } from '../data/categories';
import { blogEnabled } from '../data/site.js';

export async function GET(context) {
  const posts = blogEnabled ? await getPosts() : []; // empty feed while the blog is disabled

  return rss({
    title: 'Bhargav Manchala',
    description: 'Notes on agentic AI, voice agents and building AI products.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
      categories: [categoryInfo(post.category).title, ...post.data.tags],
    })),
  });
}
