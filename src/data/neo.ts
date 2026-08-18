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
    title: "Telco Churn Analysis",
    tags: ["SQL Server", "Power BI", "Excel"],
    description:
      "Telecom churn analysis on 7,043 customers using SQL Server, Power BI & Excel — surfacing key churn drivers and building retention dashboards.",
    github: "https://github.com/monishka3107-ai/TELCO-CHURN-ANALYSIS",
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
