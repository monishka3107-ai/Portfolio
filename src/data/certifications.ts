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
    id: "anthropic-claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    year: "2026",
    description:
      "Certificate of completion covering the fundamentals of working with Claude — prompting, capabilities, and everyday workflows.",
    status: "earned",
  },
  {
    id: "anthropic-claude-cowork",
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    year: "2026",
    description:
      "Certificate of completion on using Claude Cowork to delegate and collaborate on real tasks with AI.",
    status: "earned",
  },
  {
    id: "ibm-python-data-science",
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2026",
    description:
      "Core Python for data work — data types, control flow, functions, and working with data using libraries like Pandas and NumPy.",
    status: "earned",
  },
  {
    id: "ibm-python-101-data-science",
    title: "Python 101 for Data Science",
    issuer: "IBM",
    year: "2026",
    description:
      "Introductory Python for data science — writing scripts, handling data structures, and reading and analysing data files.",
    status: "earned",
  },
  {
    id: "ibm-supervised-learning",
    title: "Supervised Learning Methods",
    issuer: "IBM",
    year: "2026",
    description:
      "Foundations of supervised machine learning — regression and classification models, training, and evaluating model performance.",
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
