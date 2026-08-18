"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, MapPin, Clock, Send } from "lucide-react";
import { site } from "@/data/site";

/** Contact: message form (mailto) + get-in-touch panel. */
export function NeoContact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-sm border border-white/15 bg-neo-panel/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-neo-pink";
  const labelCls = "mb-2 block font-techno text-[10px] uppercase tracking-[0.25em] text-white/50";

  return (
    <section id="contact" className="border-t border-white/10 bg-neo-panel/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-4 font-techno text-xs uppercase tracking-[0.35em] text-neo-pink">
            05 / Get in Touch
          </p>
          <h2 className="font-display text-6xl uppercase tracking-tight text-white sm:text-7xl">
            Contact
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* form */}
          <form onSubmit={handleSubmit} className="rounded-sm border border-white/10 bg-neo-bg/60 p-7">
            <h3 className="mb-6 font-techno text-lg uppercase tracking-[0.2em] text-white">
              Send a Message
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="n-name" className={labelCls}>Name</label>
                <input id="n-name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="n-email" className={labelCls}>Email</label>
                <input id="n-email" type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com" className={field} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="n-subject" className={labelCls}>Subject</label>
              <input id="n-subject" value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="What's this about?" className={field} />
            </div>
            <div className="mt-5">
              <label htmlFor="n-message" className={labelCls}>Message</label>
              <textarea id="n-message" required rows={5} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me a little…" className={`${field} resize-none`} />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-sm border border-neo-pink py-3.5 font-techno text-sm uppercase tracking-[0.2em] text-neo-pink transition-colors hover:bg-neo-pink hover:text-neo-bg"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>

          {/* info */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <ContactItem icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
              <ContactItem icon={MapPin} label="Location" value="India" />
            </div>

            <div>
              <p className="mb-4 font-techno text-sm uppercase tracking-[0.2em] text-white">
                Connect with Me
              </p>
              <div className="flex gap-3">
                {[
                  { href: site.socials.github, icon: Github, label: "GitHub" },
                  { href: site.socials.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: site.socials.leetcode, icon: Code2, label: "LeetCode" },
                  { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a key={label} href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white/60 transition-colors hover:border-neo-pink hover:text-neo-pink">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-sm border border-white/10 bg-neo-bg/60 p-6"
            >
              <div className="mb-2 flex items-center gap-2 font-techno text-sm uppercase tracking-[0.15em] text-white">
                <Clock className="h-4 w-4 text-neo-pink" /> Availability
              </div>
              <p className="text-sm leading-relaxed text-white/55">
                Open to internships and collaboration. I usually reply within a day — feel free to
                reach out about opportunities or projects.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-neo-pink">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="font-techno text-[10px] uppercase tracking-[0.25em] text-white/45">{label}</p>
        <p className="text-white/85">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}
