export interface Project {
  id: string;
  title: string;
  tagline: string;
  year: string;
  status: "Live" | "In Progress" | "Prototype";
  overview: string;
  problem: string;
  stack: string[];
  challenges: string[];
  learnings: string[];
  github?: string;
  demo?: string;
  /** Accent gradient for the card. */
  gradient: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "paceplanner",
    title: "PacePlanner",
    tagline: "A smarter way to plan study & project timelines",
    year: "2025",
    status: "Live",
    overview:
      "PacePlanner is a study planner that compares your time estimates against how long tasks actually take — so you learn your real pace instead of guessing. Built from scratch with plain HTML, CSS, and JavaScript, and deployed on GitHub Pages.",
    problem:
      "Students plan by gut feel and consistently underestimate how long things take, which leads to last-minute cramming. PacePlanner makes the gap between estimate and reality visible, so future plans get more honest over time.",
    stack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Modeling and persisting estimate-vs-actual data in the browser with vanilla JavaScript — no framework to lean on.",
      "Keeping the interface calm and glanceable while still surfacing the estimate/actual comparison clearly.",
    ],
    learnings: [
      "How much you can build with just HTML, CSS, and JS when the data model is thought through first.",
      "That good UX for planning tools is mostly about reducing friction, not adding features.",
    ],
    github: "https://github.com/monishka3107-ai/paceplanner",
    demo: "https://monishka3107-ai.github.io/paceplanner/",
    gradient: "from-sky-500/25 via-blue-500/10 to-transparent",
    featured: true,
  },
  {
    id: "skill-gap-analyzer",
    title: "Skill Gap Analyzer",
    tagline: "Map where you are against where you want to be",
    year: "2025",
    status: "Live",
    overview:
      "Skill Gap Analyzer compares a learner's current skills against the requirements of a target role and highlights the highest-impact gaps to close first. Built as an interactive Python + Streamlit app so anyone can try it in the browser.",
    problem:
      "Aspiring engineers face an overwhelming amount of 'what to learn next' advice. The real question is narrower: for the role I want, which specific skills am I missing, and which matter most?",
    stack: ["Python", "Streamlit", "Machine Learning"],
    challenges: [
      "Structuring skills as comparable data so gaps can be scored, not just listed.",
      "Turning a raw gap score into recommendations that feel encouraging and concrete, inside a Streamlit UI.",
    ],
    learnings: [
      "Basics of representing domain knowledge as structured, queryable data.",
      "How quickly Streamlit lets you turn a Python idea into a shareable, interactive app.",
    ],
    github: "https://github.com/monishka3107-ai/skill-gap-analyzer",
    demo: "https://monishka3107-ai-skill-gap-analyzer-app-u2c46i.streamlit.app/",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    featured: true,
  },
];
