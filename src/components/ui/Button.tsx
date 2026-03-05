"use client";

import { forwardRef, cloneElement, isValidElement } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-bold transition-all rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:focus-visible:ring-offset-background";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90 hover:shadow-accent-glow active:scale-[0.98]",
  glass:
    "glass hover:bg-white/10 dark:hover:bg-white/10 text-slate-700 dark:text-text-primary",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (asChild && isValidElement(children)) {
      return (
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          {cloneElement(children as React.ReactElement<{ className?: string }>, {
            className: `${classes} ${(children as React.ReactElement<{ className?: string }>).props.className ?? ""}`.trim(),
          })}
        </motion.span>
      );
    }
    return (
      <motion.span
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <button ref={ref} className={classes} type="button" {...props}>
          {children}
        </button>
      </motion.span>
    );
  }
);

Button.displayName = "Button";
