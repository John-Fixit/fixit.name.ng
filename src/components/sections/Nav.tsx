"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { site, navLinks } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { OpenToWorkBadge } from "@/components/ui/OpenToWorkBadge";
import { TerminalIcon, MenuIcon, CloseIcon, SunIcon, MoonIcon } from "@/components/ui/Icons";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 glass border-b border-accent/10 dark:border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center gap-2 font-display font-bold tracking-tight text-slate-900 dark:text-text-primary text-lg md:text-xl"
          onClick={() => setOpen(false)}
        >
          <span className="size-8 md:size-9 bg-accent rounded-lg flex items-center justify-center text-white">
            <TerminalIcon className="size-4 md:size-5" />
          </span>
          <span>{site.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <OpenToWorkBadge variant="badge" className="shrink-0" />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-text-muted hover:text-accent dark:hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-text-muted hover:text-accent hover:bg-white/5 dark:hover:bg-white/5 transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </button>
          <Button asChild>
            <a href={site.cvUrl} download>
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <OpenToWorkBadge variant="badge" className="shrink-0 max-w-[140px] truncate" />
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-text-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="size-5" />
            ) : (
              <MoonIcon className="size-5" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2 rounded-lg text-slate-700 dark:text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-white/5 dark:border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-2 bg-background-light/95 dark:bg-background/95 backdrop-blur-xl">
              <div className="pb-2 border-b border-slate-200 dark:border-white/10">
                <OpenToWorkBadge variant="badge" />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-slate-700 dark:text-text-primary hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={site.cvUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2"
              >
                <Button variant="primary" size="md" className="w-full">
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
