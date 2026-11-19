import type { Metadata } from "next";
import WorkSection from "../components/workSection";

export const metadata: Metadata = {
  title: "Work & Projects | Farid Firdaus",
  description:
    "Explore software engineering, backend architecture, and application security projects built by Farid Firdaus.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <WorkSection />
    </main>
  );
}
