"use client";

import { useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: { duration?: number; staggerChildren?: number; delayChildren?: number };
}

export function ScrollReveal({
  children,
  className = "",
  variants = defaultVariants,
  transition = { duration: 0.5 },
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
