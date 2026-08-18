import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Terminal,
  Globe,
  Binary,
  Hammer,
  BrainCircuit,
  Target,
} from "lucide-react";

export interface Milestone {
  id: string;
  period: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: "done" | "current" | "upcoming";
}

export const milestones: Milestone[] = [
  {
    id: "start",
    period: "The Beginning",
    title: "Started Engineering",
    description:
      "Began my B.Tech in Computer Science (AI & ML) at Dronacharya College of Engineering, Gurgaon — curious about how software actually gets built.",
    icon: Rocket,
    status: "done",
  },
  {
    id: "python",
    period: "First Language",
    title: "Learning Python",
    description:
      "Picked up Python as my first serious language — from syntax and logic to writing small programs that solved real little problems.",
    icon: Terminal,
    status: "done",
  },
  {
    id: "web",
    period: "Building for the Web",
    title: "Exploring Web Development",
    description:
      "Fell for the immediacy of the web — HTML, CSS, JavaScript, then React and Next.js. Seeing an idea render instantly was addictive.",
    icon: Globe,
    status: "done",
  },
  {
    id: "dsa",
    period: "Fundamentals",
    title: "Practicing DSA",
    description:
      "Working through data structures and algorithms — 100+ problems solved on LeetCode — to think more clearly about problems and write more deliberate code.",
    icon: Binary,
    status: "current",
  },
  {
    id: "projects",
    period: "Applying It",
    title: "Building Projects",
    description:
      "Turned learning into shipping — projects like PacePlanner and Skill Gap Analyzer that connect ideas to working products.",
    icon: Hammer,
    status: "current",
  },
  {
    id: "aiml",
    period: "Going Deeper",
    title: "AI / ML Journey",
    description:
      "Diving into machine learning fundamentals and how intelligent systems are designed, trained, and applied responsibly.",
    icon: BrainCircuit,
    status: "current",
  },
  {
    id: "future",
    period: "What's Next",
    title: "Internship & Beyond",
    description:
      "Working toward an internship where I can contribute, learn from experienced engineers, and grow into an AI engineer.",
    icon: Target,
    status: "upcoming",
  },
];
