"use client";

interface OpenToWorkBadgeProps {
  variant?: "badge" | "banner";
  className?: string;
}

export function OpenToWorkBadge({ variant = "badge", className = "" }: OpenToWorkBadgeProps) {
  if (variant === "banner") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 text-sm text-slate-600 dark:text-text-muted ${className}`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Open to full-time &amp; remote roles · March 2026
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold ${className}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      Available for Work
    </span>
  );
}
