/**
 * Content for the /neo (techno-brutalist) portfolio variant.
 * Reuses the real data verified from Monishka's GitHub account.
 */

export const neoNav = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "certs", label: "Certs" },
  { id: "journey", label: "Journey" },
] as const;

/** Scrolling keyword strip under the hero. */
export const neoMarquee = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Development",
  "Data Analysis",
  "Problem Solving",
  "Web Development",
  "DSA",
];

export interface NeoProject {
  index: string;
  title: string;
  tags: string[];
  /** Short blurb shown alongside the preview on hover. */
  description: string;
  github?: string;
  demo?: string;
  /** Screenshot shown in the hover preview (in /public). */
  previewImage?: string;
}

export const neoProjects: NeoProject[] = [
  {
    index: "01",
    title: "PacePlanner",
    tags: ["HTML", "CSS", "JavaScript"],
    description:
      "A study planner that compares your time estimates against how long tasks actually take — so you learn your real pace instead of guessing.",
    github: "https://github.com/monishka3107-ai/paceplanner",
    demo: "https://monishka3107-ai.github.io/paceplanner/",
    previewImage: "/preview-paceplanner.png",
  },
  {
    index: "02",
    title: "Skill Gap Analyzer",
    tags: ["Python", "Streamlit", "Machine Learning"],
    description:
      "Compares your current skills against a target role and highlights the highest-impact gaps to close first — an interactive Python + Streamlit app.",
    github: "https://github.com/monishka3107-ai/skill-gap-analyzer",
    demo: "https://monishka3107-ai-skill-gap-analyzer-app-u2c46i.streamlit.app/",
    previewImage: "/preview-skill-gap.png",
  },
  {
    index: "03",
    title: "KarMic",
    tags: ["React", "FastAPI", "Speech", "LLM"],
    description:
      "A voice-first wage and attendance ledger for domestic workers in India — say what happened in Hindi and KarMic keeps the arithmetic across every household.",
    github: "https://github.com/monishka3107-ai/KarMic",
  },
  {
    index: "04",
    title: "PashuVision",
    tags: ["Python", "PyTorch", "YOLOv8", "Flask"],
    description:
      "AI livestock breed identification for Smart India Hackathon 2026 — classifies cattle and buffalo images into their exact breed with EfficientNet-B4.",
    github: "https://github.com/VenomDevX/PashuVision",
    demo: "https://classification-for-cattle-and-buffa.vercel.app",
  },
];

export interface NeoSkillBlock {
  label: string;
  items: string[];
}

export const neoSkills: NeoSkillBlock[] = [
  { label: "Languages", items: ["Python", "C", "JavaScript", "TypeScript"] },
  { label: "Web", items: ["HTML", "CSS", "React", "Next.js", "Tailwind"] },
  { label: "AI / Data", items: ["Machine Learning", "Artificial Intelligence", "Data Analysis"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "Power BI"] },
  { label: "Learning", items: ["Data Structures & Algorithms", "System Design"] },
];
