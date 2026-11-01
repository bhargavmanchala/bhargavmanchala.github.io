// Usage: npm run new-post -- "Post title" [category]
// Creates src/content/blog/<category>/<slug>.md from the template, ready to edit.
// The last argument is used as the category when a folder with that name exists;
// everything before it is the title. (This also copes with shells that split quoted titles.)
import fs from 'node:fs';
import path from 'node:path';

const root = path.join('src', 'content', 'blog');
const args = process.argv.slice(2).filter(Boolean);

if (args.length === 0) {
  console.error('Usage: npm run new-post -- "Post title" [category]');
  process.exit(1);
}

const last = args[args.length - 1];
const lastIsCategory = args.length > 1 && fs.existsSync(path.join(root, last)) && fs.statSync(path.join(root, last)).isDirectory();
const category = lastIsCategory ? last : 'notes';
const title = (lastIsCategory ? args.slice(0, -1) : args).join(' ');

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');
const today = new Date().toISOString().slice(0, 10);
const dir = path.join(root, category);
const file = path.join(dir, `${slug}.md`);

if (fs.existsSync(file)) {
  console.error(`Already exists: ${file}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(
  file,
  `---
title: ${title}
description: One sentence that summarises the post.
date: ${today}
tags: []
draft: true
---

Write your post here.
`,
);

console.log(`Created ${file}\nIt is a draft. Set draft: false when it is ready to publish.`);
