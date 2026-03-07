import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { JsonLd } from "@/components/seo/JsonLd";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixit.name.ng";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "John Adeoye | Frontend Developer & React Engineer — Lagos, Nigeria",
    template: "%s | John Adeoye",
  },
  description:
    "John Adeoye (Fixit) — Frontend Developer & Node.js engineer in Lagos, Nigeria. 3+ years building enterprise systems with React, TypeScript, Next.js. Available for full-time and remote roles.",
  keywords: [
    "John Adeoye",
    "Adeoye John",
    "Fixit",
    "John Fixit",
    "frontend developer",
    "Frontend Engineer",
    "developer",
    "React developer",
    "Node.js developer",
    "Node JS developer",
    "TypeScript developer",
    "Next.js developer",
    "Full-Stack Developer",
    "web developer",
    "Lagos Nigeria developer",
    "remote frontend developer",
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "portfolio",
    "software engineer",
  ],
  authors: [{ name: "John Adeoye", url: SITE_URL }],
  creator: "John Adeoye",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "John Adeoye — Frontend Developer",
    title: "John Adeoye | Frontend Developer & React Engineer — Lagos, Nigeria",
    description:
      "Frontend Developer with 3+ years building enterprise systems. React, TypeScript, Node.js. Open to full-time and remote roles.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Adeoye — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Adeoye | Frontend Developer & React Engineer",
    description:
      "Frontend Developer · React, TypeScript, Node.js · Lagos, Nigeria. Available for work.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
  classification: "Portfolio — Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;var d=!(t==='light'||(t!=='dark'&&!p));document.documentElement.classList.add(d?'dark':'light');})();`,
        }}
      />
      <body
        className={`${syne.variable} ${dmSans.variable} bg-background-light dark:bg-background text-slate-900 dark:text-text-primary selection:bg-accent selection:text-white min-h-screen`}
      >
        <JsonLd />
        <ThemeProvider>
          <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
