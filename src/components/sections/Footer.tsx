"use client";

import Link from "next/link";
import { footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        <p className="text-sm text-slate-500 dark:text-text-muted text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          John Adeoye (Adeoye John · Fixit).
          Frontend Developer, Lagos, Nigeria. All rights reserved. Built with
          Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-6 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
