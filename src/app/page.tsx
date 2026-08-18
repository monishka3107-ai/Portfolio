import type { Metadata } from "next";
import { Archivo_Black, Orbitron } from "next/font/google";
import { NeoCursor } from "@/components/neo/cursor";
import { NeoNav } from "@/components/neo/neo-nav";
import { NeoHero } from "@/components/neo/neo-hero";
import { NeoMarquee } from "@/components/neo/neo-marquee";
import { NeoProjects } from "@/components/neo/neo-projects";
import { NeoSkills } from "@/components/neo/neo-skills";
import { NeoCerts } from "@/components/neo/neo-certs";
import { NeoJourney } from "@/components/neo/neo-journey";
import { NeoContact } from "@/components/neo/neo-contact";
import { NeoFooter } from "@/components/neo/neo-footer";
import { site } from "@/data/site";

// Techno-brutalist type: heavy display + geometric techno.
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-techno",
  display: "swap",
});

export const metadata: Metadata = {
  title: { absolute: `${site.name} — AI · ML · Engineering` },
  description:
    "Portfolio of Monishka Yadav — a Computer Science (AI & ML) student, software developer, and problem solver building intelligent systems and clean software.",
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

export default function Home() {
  return (
    <div className={`${archivoBlack.variable} ${orbitron.variable} min-h-screen bg-neo-bg text-white`}>
      <StructuredData />
      <NeoCursor />
      <NeoNav />
      <main>
        <NeoHero />
        <NeoMarquee />
        <NeoProjects />
        <NeoSkills />
        <NeoCerts />
        <NeoJourney />
        <NeoContact />
      </main>
      <NeoFooter />
    </div>
  );
}
