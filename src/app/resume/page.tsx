import type { Metadata } from "next";
import { Nav } from "@/components/sections/Nav";
import { ResumeView } from "@/components/sections/ResumeView";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "John Adeoye (Adeoye John) — Frontend Developer resume. React, TypeScript, Node.js, Next.js. Experience at Clan Africa, NCAA, freelance. Lagos, Nigeria.",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="relative z-10 min-h-screen">
        <ResumeView />
      </main>
    </>
  );
}
