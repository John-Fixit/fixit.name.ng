"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl border-white/5 dark:border-white/5 ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "0 0 30px rgba(108, 99, 255, 0.2)" } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
