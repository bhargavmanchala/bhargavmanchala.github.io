// Single source of truth for the résumé and website pages.
// Sources: résumé (Sept update) for metrics and technical detail, LinkedIn for titles and dates.

export const profile = {
  name: 'Bhargav Manchala',
  title: 'Senior Innovation Engineer - Agentic AI',
  company: 'Cloudangles',
  location: 'Hyderabad, Telangana, India',
  email: 'bhargavmanchala1534@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bhargavmanchala/',
  github: 'https://github.com/bhargavmanchala',
};

export const projects = [
  {
    name: 'TalentXpress.ai',
    kind: 'AI-native hiring platform',
    role: 'Platform lead, team of 4',
    href: 'https://talentxpress.ai',
    blurb: 'A hiring platform for employers and job seekers, built to take early-round screening off recruiters.',
    bullets: [
      'Voice agents run conversational interviews, with computer-vision proctoring to protect interview integrity.',
      'Telephony-based screening lowers the cost and turnaround of each candidate screen.',
      'Replaced two paid tools, KEKA Hire and SpeedExam, for a 14+ person recruiting team.',
    ],
    stack: 'React, FastAPI, MySQL, AWS',
  },
  {
    name: 'VoiceAngles',
    kind: 'Enterprise voice automation platform',
    role: 'Lead engineer',
    href: undefined,
    blurb: 'AI voice agents that hold real phone conversations for banking, customer support and energy teams.',
    bullets: [
      'A custom multi-agent voice system built on LiveKit, Twilio and LLM APIs.',
      'A knowledge base gives each agent the client’s context, compliance rules and style guide.',
      'Helps Marketing qualify leads faster through outbound calls.',
    ],
    stack: 'LiveKit, Twilio, LLM APIs, React, FastAPI',
  },
  {
    name: 'LLMOps AppDesign',
    kind: 'Agentic AI automation platform',
    role: 'Builder',
    href: undefined,
    blurb: 'An internal platform for turning a business requirement into working automation.',
    bullets: [
      '15+ use cases across energy, BFSI, retail, support and voice.',
      'Each one delivered with a demo and documentation.',
    ],
    stack: 'LangChain, LangGraph, Langflow, n8n, Python',
  },
];

export const roles = [
  {
    title: 'Senior Innovation Engineer - Agentic AI',
    dates: '08/2026 — Present',
    current: true,
    bullets: ['Leading agentic AI work across TalentXpress.ai and voice agents.'],
  },
  {
    title: 'Innovation Engineer - Agentic AI Solutions',
    dates: '05/2026 — 08/2026',
    current: false,
    bullets: [
      'Platform lead for TalentXpress.ai, leading a team of 4 engineers.',
      'Ran customer demos and workshops, and supported pricing and go-to-market planning.',
    ],
  },
  {
    title: 'Software Engineer Trainee',
    dates: '08/2025 — 05/2026',
    current: false,
    bullets: [
      'Lead engineer on VoiceAngles and builder of the LLMOps use cases.',
      'Received the Ascend Quality Delivery: Safe Hands award.',
    ],
  },
  {
    title: 'Intern',
    dates: '03/2025 — 08/2025',
    current: false,
    bullets: [
      'Built RAG applications: an HR chatbot, an AI CV parser and transcript automation.',
      'Integrated meeting-notes generation with Microsoft Teams, used daily by internal teams.',
    ],
  },
];

export const skills = [
  ['Agentic AI and LLMs', ['LangChain', 'LangGraph', 'Langflow', 'n8n', 'RAG', 'LLMOps']],
  ['Voice AI', ['Speech-to-Text', 'Text-to-Speech', 'LiveKit', 'Twilio', 'Telephony']],
  ['Full-stack', ['React', 'Node.js', 'FastAPI', 'MySQL', 'REST APIs']],
  ['Cloud and tools', ['AWS', 'Docker', 'GitHub']],
  ['Languages', ['Python', 'JavaScript', 'C']],
];

export const education = {
  degree: 'B.E. in Computer Science and Engineering',
  school: 'Osmania University',
  year: '2025',
  detail: 'CGPA 9.0 / 10',
};

export const other = {
  title: 'Co-Founder, Vervue',
  dates: '09/2024 — 02/2025',
  detail: 'Early-stage startup, developed through the K-Hub deep tech incubator.',
};
