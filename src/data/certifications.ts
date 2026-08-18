export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  status: "earned" | "in-progress";
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: "ibm-skillsbuild",
    title: "IBM SkillsBuild",
    issuer: "IBM",
    year: "2026",
    description:
      "Foundational learning across emerging technologies, professional skills, and applied problem solving.",
    status: "earned",
  },
  {
    id: "anthropic-claude",
    title: "Building with Claude",
    issuer: "Anthropic",
    year: "2026",
    description:
      "Hands-on certificate exploring how to build thoughtfully with Claude and modern AI tooling.",
    status: "earned",
  },
  {
    id: "future",
    title: "More on the way",
    issuer: "Ongoing",
    year: "2026",
    description:
      "Actively pursuing further certifications in machine learning and software engineering as I grow.",
    status: "in-progress",
  },
];
