"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Command,
  Search,
  CornerDownLeft,
  Github,
  Linkedin,
  Mail,
  FileText,
  Moon,
  Sun,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "next-themes";
import { sections, site } from "@/data/site";
import { scrollToSection } from "@/components/providers/smooth-scroll";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  hint?: string;
  group: "Navigate" | "Links" | "Actions";
  icon: React.ReactNode;
  perform: () => void;
}

/**
 * Cmd/Ctrl+K command palette. Fully keyboard-driven:
 * arrows to move, enter to run, esc to close. Filters as you type.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTheme, resolvedTheme } = useTheme();

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const items = useMemo<CommandItem[]>(() => {
    const nav: CommandItem[] = sections.map((s) => ({
      id: `nav-${s.id}`,
      label: `Go to ${s.label}`,
      hint: "Section",
      group: "Navigate",
      icon: <ArrowRight className="h-4 w-4" />,
      perform: () => {
        close();
        scrollToSection(s.id);
      },
    }));

    const links: CommandItem[] = [
      {
        id: "link-github",
        label: "GitHub",
        hint: "Open profile",
        group: "Links",
        icon: <Github className="h-4 w-4" />,
        perform: () => window.open(site.socials.github, "_blank", "noopener"),
      },
      {
        id: "link-linkedin",
        label: "LinkedIn",
        hint: "Open profile",
        group: "Links",
        icon: <Linkedin className="h-4 w-4" />,
        perform: () => window.open(site.socials.linkedin, "_blank", "noopener"),
      },
      {
        id: "link-email",
        label: "Email me",
        hint: site.email,
        group: "Links",
        icon: <Mail className="h-4 w-4" />,
        perform: () => (window.location.href = `mailto:${site.email}`),
      },
      {
        id: "link-resume",
        label: "View Résumé",
        hint: "PDF",
        group: "Links",
        icon: <FileText className="h-4 w-4" />,
        perform: () => window.open(site.resumeUrl, "_blank", "noopener"),
      },
    ];

    const actions: CommandItem[] = [
      {
        id: "action-theme",
        label: `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`,
        hint: "Toggle",
        group: "Actions",
        icon: resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />,
        perform: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
    ];

    return [...nav, ...links, ...actions];
  }, [close, resolvedTheme, setTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) => i.label.toLowerCase().includes(q) || i.hint?.toLowerCase().includes(q),
    );
  }, [items, query]);

  // Global open shortcut + toggle.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // Focus input + lock scroll when open.
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  function onListKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.perform();
    }
  }

  // Group filtered items preserving group order.
  const groups = useMemo(() => {
    const order: CommandItem["group"][] = ["Navigate", "Links", "Actions"];
    return order
      .map((g) => ({ group: g, items: filtered.filter((i) => i.group === g) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  let runningIndex = -1;

  return (
    <>
      {/* Trigger pill (also visible in nav) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="hidden items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="ml-1 inline-flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px]">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="glass relative w-full max-w-xl overflow-hidden rounded-2xl shadow-soft-lg"
              onKeyDown={onListKeyDown}
            >
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section, link, or action…"
                  className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  aria-label="Search commands"
                />
                <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                  ESC
                </kbd>
              </div>

              <div className="max-h-[46vh] overflow-y-auto p-2">
                {groups.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No results for “{query}”.
                  </p>
                )}
                {groups.map(({ group, items: groupItems }) => (
                  <div key={group} className="mb-1">
                    <p className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {group}
                    </p>
                    {groupItems.map((item) => {
                      runningIndex += 1;
                      const idx = runningIndex;
                      const active = idx === activeIndex;
                      return (
                        <button
                          key={item.id}
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={item.perform}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                            active ? "bg-accent/15 text-foreground" : "text-muted-foreground",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-7 w-7 items-center justify-center rounded-md border border-border",
                              active ? "border-accent/40 text-accent" : "",
                            )}
                          >
                            {item.icon}
                          </span>
                          <span className="flex-1 font-medium text-foreground/90">{item.label}</span>
                          {item.hint && (
                            <span className="text-xs text-muted-foreground">{item.hint}</span>
                          )}
                          {active && <CornerDownLeft className="h-3.5 w-3.5 text-muted-foreground" />}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
