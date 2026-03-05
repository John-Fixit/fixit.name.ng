"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  label: string;
}

export function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="glass px-4 py-2 rounded-lg border-accent/20 dark:border-primary/20 text-accent font-bold text-sm shadow-[0_0_15px_rgba(108,99,255,0.1)] dark:shadow-[0_0_15px_rgba(108,99,255,0.1)]">
      {label}
    </span>
  );
}
