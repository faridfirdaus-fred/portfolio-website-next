import type { Metadata } from "next";
import ContactHub from "../components/contactHub";

export const metadata: Metadata = {
  title: "Contact & Connect | Farid Firdaus",
  description:
    "Get in touch with Farid Firdaus for software engineering opportunities, application security (AppSec) research, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <ContactHub />
    </main>
  );
}
