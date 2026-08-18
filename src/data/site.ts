/**
 * Single source of truth for personal + brand information.
 * Update values here to propagate across the whole site.
 */

export const site = {
  name: "Monishka Yadav",
  role: "AI & ML Student",
  tagline: "Aspiring AI Engineer • Software Developer • Problem Solver",
  degree: "B.Tech Computer Science Engineering (AI & ML)",
  // Rotating hero titles.
  titles: ["Software Developer", "AI Builder", "Problem Solver", "Lifelong Learner"],
  email: "monishka310307@gmail.com",
  location: "India",
  // Placeholder handles — update with real profiles.
  socials: {
    github: "https://github.com/monishka3107-ai",
    linkedin: "https://www.linkedin.com/in/monishka-yadav-0466b334a/",
    leetcode: "https://leetcode.com/u/Monishkay31/",
  },
  githubUsername: "monishka3107-ai",
  resumeUrl: "/resume.pdf",
  url: "https://monishka-yadav.vercel.app",
} as const;

/** Section anchors used by the nav, command palette, and scroll spy. */
export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "profiles", label: "Profiles" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];
