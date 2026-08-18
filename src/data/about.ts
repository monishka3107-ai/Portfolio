import type { LucideIcon } from "lucide-react";
import { Puzzle, Sparkles, Hammer, TrendingUp } from "lucide-react";

export interface AboutCard {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: string;
}

export const aboutCards: AboutCard[] = [
  {
    id: "problems",
    title: "I like solving problems",
    body: "The part I enjoy most is breaking a messy problem into pieces I can actually reason about — then building my way to a clean solution.",
    icon: Puzzle,
    accent: "text-sky-400",
  },
  {
    id: "ai",
    title: "Curious about AI",
    body: "AI & ML is what pulled me into this field. I'm fascinated by how systems learn, and I want to build ones that are genuinely useful.",
    icon: Sparkles,
    accent: "text-emerald-400",
  },
  {
    id: "building",
    title: "I learn by building",
    body: "Tutorials are a start, but things click for me when I ship something real — even a small project teaches more than a dozen videos.",
    icon: Hammer,
    accent: "text-violet-400",
  },
  {
    id: "growth",
    title: "Always leveling up",
    body: "I treat every project and problem as a chance to get a little better. Consistent, honest progress matters more to me than shortcuts.",
    icon: TrendingUp,
    accent: "text-amber-400",
  },
];

export const aboutIntro =
  "I'm Monishka — a Computer Science student focused on AI & Machine Learning. I'm early in my journey, but I'm serious about the craft: writing thoughtful code, building real projects, and learning something with every one.";
