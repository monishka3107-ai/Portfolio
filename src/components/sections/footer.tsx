"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { site, sections } from "@/data/site";
import { scrollToSection } from "@/components/providers/smooth-scroll";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 font-mono text-sm text-accent">
              MY
            </span>
            Monishka Yadav
          </button>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className="transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {[
              { href: site.socials.github, label: "GitHub", icon: Github },
              { href: site.socials.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: `mailto:${site.email}`, label: "Email", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 pt-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind &amp; Framer Motion.
            </p>
            <button
              onClick={() => scrollToSection("home")}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
