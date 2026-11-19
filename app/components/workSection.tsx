"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaShieldAlt, FaCode } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  category: "all" | "appsec" | "software-engineering" | "fullstack";
  badge: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "appsec-rbac",
    title: "Secure Auth & RBAC Microservice",
    category: "appsec",
    badge: "AppSec & Defense",
    description:
      "Production-ready authentication and role-based access control engine. Features JWT rotation, Redis-backed brute force rate limiting, helmet security headers, and strict OWASP Top 10 mitigation.",
    tags: ["AppSec", "TypeScript", "Node.js", "Redis", "OWASP", "Docker"],
    githubUrl: "https://github.com/faridfirdaus-fred",
    liveUrl: "https://github.com/faridfirdaus-fred",
  },
  {
    id: "calcumat",
    title: "Calcumat Calculus Computation Engine",
    category: "software-engineering",
    badge: "Algorithms & Engine",
    description:
      "Interactive mathematical computation platform designed for numerical calculus, complex number transformations, and matrix determinant solving with real-time feedback.",
    tags: ["Software Engineering", "Algorithms", "JavaScript", "Math Engine"],
    image: "/calcumat.png",
    githubUrl: "https://github.com/faridfirdaus-fred/calculus-project",
    liveUrl: "https://faridfirdaus-fred.github.io/calculus-project/",
  },
  {
    id: "portfolio-next",
    title: "Tactile Editorial Portfolio Platform",
    category: "fullstack",
    badge: "Fullstack & Performance",
    description:
      "Personal portfolio platform engineered on Next.js 15 App Router & React 19. Designed for sub-100ms interactions, zero bundle bloat, tactile SVG grain overlay, and 100/100 Lighthouse metrics.",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Performance"],
    image: "/portfolio.png",
    githubUrl: "https://github.com/faridfirdaus-fred/portfolio-website-next",
    liveUrl: "https://portfolio-website-next-coral.vercel.app/",
  },
  {
    id: "owasp-lab",
    title: "Web Security Defense Lab & Threat Vectors",
    category: "appsec",
    badge: "Security Research",
    description:
      "Hands-on demonstration testbed detailing vulnerabilities (SQLi, Stored XSS, SSRF, IDOR) paired with concrete defensive mitigations, input sanitization routines, and architectural hardening.",
    tags: ["AppSec", "Vulnerability Research", "Threat Modeling", "Secure SDLC"],
    githubUrl: "https://github.com/faridfirdaus-fred",
    liveUrl: "https://github.com/faridfirdaus-fred",
  },
];

type CategoryKey = "all" | "appsec" | "software-engineering" | "fullstack";

const categoryFilters: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "appsec", label: "AppSec & Defense" },
  { key: "software-engineering", label: "Software Engineering" },
  { key: "fullstack", label: "Fullstack & Web" },
];

const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8">
      {/* Header */}
      <div className="text-left mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-wider uppercase mb-3">
          <FaShieldAlt className="w-3 h-3 text-primary" />
          <span>Curated Systems &amp; Security Projects</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-outfit text-primary">
          Engineered for Resilience &amp; Scale
        </h1>
        <p className="mt-3 text-base sm:text-lg opacity-80 max-w-2xl font-normal leading-relaxed">
          Exploring the intersection of software architecture, backend performance, and Application Security (AppSec). Each project illustrates secure-by-design principles.
        </p>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          {categoryFilters.map((filter) => {
            const isActive = activeFilter === filter.key;
            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-primary text-secondary shadow-sm"
                    : "bg-secondary text-primary border border-primary/25 hover:border-primary hover:bg-primary/5"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between rounded-3xl border border-primary/20 bg-[#E5E4E3] p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                {/* Visual Preview / Header Banner */}
                {project.image ? (
                  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-primary/15 bg-white mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-36 rounded-2xl border border-primary/15 bg-primary/5 p-6 mb-6 flex flex-col justify-center items-start">
                    <div className="p-3 rounded-xl bg-primary text-secondary mb-2">
                      {project.category === "appsec" ? (
                        <FaShieldAlt className="w-5 h-5" />
                      ) : (
                        <FaCode className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider opacity-60">
                      SECURE ARCHITECTURE SPECIFICATION
                    </span>
                  </div>
                )}

                {/* Badge & Title */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {project.badge}
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight font-outfit text-primary mb-3">
                  {project.title}
                </h2>

                <p className="text-sm sm:text-base opacity-80 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary/80 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-primary/15">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demonstration of ${project.title}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:opacity-75 transition-opacity py-1.5 px-3 rounded-lg border border-primary/20 bg-primary/5"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:opacity-75 transition-opacity py-1.5 px-3 rounded-lg border border-primary/20 hover:bg-primary/5"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default WorkSection;