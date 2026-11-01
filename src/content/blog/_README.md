# How the blog works

Every post is one Markdown file inside a **category folder**:

```
src/content/blog/
  agentic-ai/        <- category "Agentic AI"
  voice-ai/          <- category "Voice AI"
  engineering/       <- category "Engineering"
  notes/             <- category "Notes"
  _template.md       <- copy this to start a post (files starting with _ are ignored)
```

The folder name is the category. The file name becomes the URL:
`src/content/blog/voice-ai/my-first-agent.md` is published at `/blog/voice-ai/my-first-agent/`.

## Write a post

1. Copy `_template.md` into a category folder and rename it, for example `agentic-ai/how-i-test-agents.md`.
   Or run `npm run new-post -- "How I test agents" agentic-ai`.
2. Fill in the front matter (`title`, `description`, `date`, `tags`) and write the post below it.
3. Commit and push to `main`. GitHub Actions builds the site and publishes the post in about a minute.

You can also do step 1 and 3 entirely on github.com: open the category folder, choose
**Add file > Create new file**, paste the template, and commit.

## Drafts

Set `draft: true` in the front matter to keep a post out of the site until it is ready.

## New category

Create a new folder under `src/content/blog/`. It shows up as soon as it has one published post.
For a nicer title and description, add it to `src/data/categories.ts`.
