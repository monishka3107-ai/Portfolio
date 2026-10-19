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
  /** Screenshot shown at the top of the card (in /public). */
  image?: string;
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
    image: "/preview-paceplanner.jpg",
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
    image: "/preview-skill-gap.jpg",
    gradient: "from-emerald-500/25 via-teal-500/10 to-transparent",
    featured: true,
  },
  {
    id: "karmic",
    title: "KarMic",
    tagline: "Your work, your account — a voice-first wage ledger",
    year: "2026",
    status: "Prototype",
    overview:
      "KarMic is a voice-first wage and attendance ledger for domestic workers in India. A worker says what happened, in Hindi, out loud — \"Sharma ji ke ghar 20 din kaam kiya, 2000 mile\" — and KarMic splits it into work, payments, advances and leave, then keeps the running balance for every household she works in.",
    problem:
      "Domestic workers often juggle three to six households, each with its own wage, pay date, working days, advances and leave — all tracked in their heads. That is how disputes start and wages go unpaid. KarMic does the bookkeeping and can explain exactly how every amount was calculated.",
    stack: ["React", "TypeScript", "FastAPI", "SQLAlchemy", "Web Speech API", "LLM", "PWA"],
    challenges: [
      "Turning free-form spoken Hindi/Hinglish into structured ledger entries without guessing — unknown households trigger a question instead of a silent assumption.",
      "Designing for low-literacy users: one big mic button, Hindi-first UI, and a confirmation screen that quotes the worker's own words back before anything is saved.",
      "Keeping the whole app working offline with a mock LLM mode and a rule-based fallback extractor.",
    ],
    learnings: [
      "How to use an LLM for extraction only, while keeping all money arithmetic deterministic and explainable.",
      "That designing for a specific, underserved user changes almost every product decision.",
    ],
    github: "https://github.com/monishka3107-ai/KarMic",
    image: "/preview-karmic.jpg",
    gradient: "from-amber-500/25 via-orange-500/10 to-transparent",
    featured: true,
  },
  {
    id: "pashuvision",
    title: "PashuVision",
    tagline: "AI livestock breed identification for SIH 2026",
    year: "2026",
    status: "Live",
    overview:
      "PashuVision is an AI-powered system that classifies images of cattle and buffalo into their exact breed. Built for Smart India Hackathon 2026, it pairs a species router (cattle vs buffalo) with breed classifiers, served through a Flask web app.",
    problem:
      "Accurate breed identification matters for livestock records, breeding programs and government schemes, but it usually depends on expert inspection. PashuVision lets anyone get a breed prediction from a single photo.",
    stack: ["Python", "PyTorch", "EfficientNet-B4", "YOLOv8", "Flask", "TypeScript"],
    challenges: [
      "Imbalanced breed data — solved with augmentation until every breed reached 350 images.",
      "Background bias from grass, fences and people — solved by cropping the animal out with YOLOv8 before training.",
      "Training a large EfficientNet-B4 model efficiently using mixed precision and cosine annealing.",
    ],
    learnings: [
      "How much data preparation drives model accuracy compared with architecture choice.",
      "Building and shipping an end-to-end ML pipeline as a team under hackathon deadlines.",
    ],
    github: "https://github.com/VenomDevX/PashuVision",
    demo: "https://classification-for-cattle-and-buffa.vercel.app",
    image: "/preview-pashuvision.jpg",
    gradient: "from-rose-500/25 via-pink-500/10 to-transparent",
    featured: true,
  },
];
