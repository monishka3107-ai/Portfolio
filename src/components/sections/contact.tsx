"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Check, ArrowUpRight, Copy } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

/**
 * Contact form. With no backend, it composes a pre-filled email via `mailto:`
 * on submit — reliable and deploy-ready anywhere. Swap the handler for a
 * Formspree/Resend endpoint later without changing the markup.
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent/50 focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="section-pad relative">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="text-gradient">together</span>
            </>
          }
          description="Have an opportunity, a question, or just want to say hi? I'd genuinely love to hear from you."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-5">
          {/* Left: quick links */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <SpotlightCard className="hairline">
                <div className="p-6">
                  <h3 className="text-base font-semibold">Reach me directly</h3>
                  <button
                    onClick={copyEmail}
                    className="group mt-3 flex w-full items-center justify-between gap-2 rounded-xl border border-border bg-card/50 px-4 py-3 text-left text-sm transition-colors hover:border-accent/40"
                  >
                    <span className="truncate">{site.email}</span>
                    {copied ? (
                      <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    )}
                  </button>
                </div>
              </SpotlightCard>

              <div className="grid flex-1 gap-4 sm:grid-cols-1">
                <SocialLink href={site.socials.github} icon={Github} label="GitHub" handle="@monishka3107-ai" />
                <SocialLink href={site.socials.linkedin} icon={Linkedin} label="LinkedIn" handle="Monishka Yadav" />
                <SocialLink href={`mailto:${site.email}`} icon={Mail} label="Email" handle="Say hello" />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.05} className="lg:col-span-3">
            <SpotlightCard className="hairline h-full">
              <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me a little about what you have in mind…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <Button as="button" type="submit" size="lg" className="w-full sm:w-auto sm:self-end">
                  {sent ? (
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Check className="h-4 w-4" /> Opening your mail app…
                    </motion.span>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      Send message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group hairline flex items-center gap-3 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted/40">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium">{label}</span>
        <span className="block text-xs text-muted-foreground">{handle}</span>
      </span>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}
