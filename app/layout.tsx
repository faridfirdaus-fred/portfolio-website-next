import type { Metadata } from "next";
import { Roboto, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://portfolio-website-next-coral.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Farid Firdaus | Software Engineer & Application Security",
    template: "%s | Farid Firdaus",
  },
  description:
    "Portfolio of Farid Firdaus. Software Engineer & Application Security (AppSec) researcher focused on resilient distributed backends, defensive web development, and secure software architecture.",
  keywords: [
    "Farid Firdaus",
    "Software Engineer",
    "Application Security",
    "AppSec",
    "Fullstack Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "OWASP",
    "faridfred",
    "Farid Fred",
  ],
  authors: [{ name: "Farid Firdaus", url: "https://github.com/faridfirdaus-fred" }],
  creator: "Farid Firdaus",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Farid Firdaus | Software Engineer & Application Security",
    description:
      "Software Engineer & Application Security (AppSec) researcher focused on resilient distributed backends and defensive web architectures.",
    siteName: "Farid Firdaus Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farid Firdaus | Software Engineer & Application Security",
    description:
      "Software Engineer & Application Security (AppSec) researcher focused on resilient distributed backends and defensive web architectures.",
    creator: "@freddem4rco",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farid Firdaus",
  alternateName: ["faridfred", "Farid Fred", "freddem4rco"],
  jobTitle: "Software Engineer & Application Security Researcher",
  email: "mailto:faridfirdaus.mail@gmail.com",
  url: siteUrl,
  sameAs: [
    "https://github.com/faridfirdaus-fred",
    "https://www.linkedin.com/in/farid-firdaus/",
    "https://x.com/freddem4rco",
    "https://www.instagram.com/rid.fir",
    "https://www.facebook.com/farid.forster.5",
    "https://www.reddit.com/user/Miserable-Yard4496/",
  ],
  knowsAbout: [
    "Software Engineering",
    "Application Security (AppSec)",
    "Web Development",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "OWASP Security Guidelines",
    "Distributed Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${roboto.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
