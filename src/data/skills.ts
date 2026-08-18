import type { LucideIcon } from "lucide-react";
import { Braces, Code2, Cpu, Wrench, GraduationCap } from "lucide-react";

export interface SkillGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  /** Tailwind gradient used for the group's accent glow. */
  gradient: string;
  skills: string[];
  /** Bento sizing hint. */
  span: "sm" | "md" | "lg";
}

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming",
    icon: Braces,
    gradient: "from-sky-500/20 to-blue-500/10",
    skills: ["Python", "C", "JavaScript", "TypeScript"],
    span: "md",
  },
  {
    id: "web",
    title: "Web Development",
    icon: Code2,
    gradient: "from-violet-500/20 to-fuchsia-500/10",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    span: "lg",
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: Cpu,
    gradient: "from-emerald-500/20 to-teal-500/10",
    skills: ["Machine Learning", "Artificial Intelligence"],
    span: "sm",
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    gradient: "from-amber-500/20 to-orange-500/10",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
    span: "md",
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: GraduationCap,
    gradient: "from-rose-500/20 to-pink-500/10",
    skills: ["Data Structures & Algorithms", "System Design Fundamentals"],
    span: "sm",
  },
];
