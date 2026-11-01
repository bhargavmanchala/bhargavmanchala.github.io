// Blog categories. The folder name under src/content/blog/ is the category slug.
// To add a category: create the folder, then (optionally) add a title and description here.
// A folder that is not listed still works; it just gets a title made from its name.

export const categories: Record<string, { title: string; description: string }> = {
  'agentic-ai': {
    title: 'Agentic AI',
    description: 'Agents, LLM workflows and automation.',
  },
  'voice-ai': {
    title: 'Voice AI',
    description: 'Voice agents, speech and telephony.',
  },
  engineering: {
    title: 'Engineering',
    description: 'Building software and systems.',
  },
  notes: {
    title: 'Notes',
    description: 'Short notes and updates.',
  },
};

export const categoryOf = (id: string) => id.split('/')[0];

export const categoryInfo = (slug: string) =>
  categories[slug] ?? {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: '',
  };
