import type { Metadata } from "next";
import { FloatingNav } from "@/components/navigation/floating-nav";
import { ScrollProgress } from "@/components/navigation/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Journey } from "@/components/sections/journey";
import { CodingProfiles } from "@/components/sections/coding-profiles";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — ${site.role}` },
  description:
    "The premium (aurora/glass) portfolio of Monishka Yadav — AI & ML student, software developer, and problem solver.",
};

/** JSON-LD for rich search results. */
function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.tagline,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.socials.github, site.socials.linkedin, site.socials.leetcode],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Software Development",
      "Web Development",
      "Data Structures and Algorithms",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "B.Tech Computer Science (AI & ML)",
    },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function ClassicHome() {
  return (
    <>
      <StructuredData />

      {/* Accessibility: skip straight to content */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <FloatingNav />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <CodingProfiles />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
