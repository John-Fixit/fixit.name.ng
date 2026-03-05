import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        surface: "#111118",
        accent: "#6C63FF",
        highlight: "#F59E0B",
        "text-primary": "#F0F0F5",
        "text-muted": "#8B8B9E",
        "background-light": "#F5F5F8",
        "surface-light": "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(108, 99, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(108, 99, 255, 0.5)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        slideIn: "slideIn 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "radial-gradient(circle at 2px 2px, rgba(108, 99, 255, 0.05) 1px, transparent 0)",
        "grid-pattern-light":
          "radial-gradient(circle at 2px 2px, rgba(108, 99, 255, 0.08) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      boxShadow: {
        "accent-glow": "0 0 30px rgba(108, 99, 255, 0.4)",
        "accent-glow-lg": "0 0 40px rgba(108, 99, 255, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
