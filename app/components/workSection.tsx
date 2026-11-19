"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShieldAlt,
  FaCode,
  FaTerminal,
  FaServer,
  FaLock,
} from "react-icons/fa";

export type ProjectCategory =
  | "all"
  | "appsec"
  | "systems"
  | "fullstack"
  | "software-engineering";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "egcloud-caas",
    title: "EGCloud Container-as-a-Service (CaaS) Platform",
    category: "fullstack",
    badge: "Enterprise Cloud & CaaS",
    description:
      "Modern frontend platform for the EGDev CaaS cloud infrastructure deployed at egcloud.id. Features cloud container provisioning, orchestration monitoring, and unified administrative dashboard control.",
    tags: ["Cloud Infrastructure", "CaaS", "Next.js", "Enterprise Architecture", "DevOps"],
    liveUrl: "https://egcloud.id",
    isPrivate: true,
  },
  {
    id: "hotspot-linux",
    title: "Linux 5 GHz Hotspot Kernel Patch (Intel Wi-Fi 6)",
    category: "systems",
    badge: "Linux Kernel & Networking",
    description:
      "Kernel-level driver patch for Intel Wi-Fi 6 (AX200/AX201 iwlmvm module) on Ubuntu/Linux that circumvents restrictive Location Aware Regulatory (LAR) to enable high-speed 5 GHz AP / hotspot mode.",
    tags: ["Linux Kernel", "Kernel Module Patching", "Networking", "C", "Bash", "Ubuntu"],
    githubUrl: "https://github.com/faridfirdaus-fred/hotspot-linux",
    isPrivate: false,
  },
  {
    id: "clevo-backlight",
    title: "Clevo Laptop RGB Keyboard Backlight Driver & CLI",
    category: "systems",
    badge: "Hardware & Linux Drivers",
    description:
      "Low-level Linux hardware utility and CLI controller for Clevo laptop barebones (NP50RNA and similar). Communicates with hardware registers to control single-zone RGB states, brightness, and colors.",
    tags: ["Linux Drivers", "Hardware Interface", "C", "CLI Tool", "System Automation"],
    githubUrl: "https://github.com/faridfirdaus-fred/clevo-backlight",
    isPrivate: false,
  },
  {
    id: "firdauscipher",
    title: "Firdaus Cipher Lab | Cryptographic Algorithms Suite",
    category: "appsec",
    badge: "Cryptography & Security Lab",
    description:
      "Client-side cryptographic testbed implementing 8 classic and contemporary cipher algorithms for text and binary streams in TypeScript, paired with an independent Ruby verification suite.",
    tags: ["Cryptography", "AppSec", "TypeScript", "Ruby", "Binary Analysis", "Security"],
    githubUrl: "https://github.com/faridfirdaus-fred/firdauscipher",
    isPrivate: false,
  },
  {
    id: "pqc-tls-research",
    title: "Post-Quantum TLS 1.3 & QUIC Handshake Research",
    category: "appsec",
    badge: "PQC Research & Protocols",
    description:
      "Empirical benchmark evaluating Post-Quantum Cryptography key exchange over TLS 1.3 across HTTP/3 (QUIC) and HTTP/2, measuring packet fragmentation, handshake latency, and packet loss impact.",
    tags: ["Post-Quantum Cryptography", "TLS 1.3", "HTTP/3 QUIC", "Packet Analysis", "AppSec"],
    isPrivate: true,
  },
  {
    id: "sdn-forensic-framework",
    title: "Automated SDN Forensic Investigation Framework",
    category: "appsec",
    badge: "Network Security & Forensics",
    description:
      "End-to-end forensic telemetry framework for Software-Defined Networks (SDN). Ingests OpenFlow traffic, correlates attack paths, performs anomaly detection, and reconstructs incident timelines.",
    tags: ["Network Forensics", "SDN", "Anomaly Detection", "AppSec", "Python", "Incident Response"],
    githubUrl: "https://github.com/faridfirdaus-fred/sdn-forensic-framework",
    isPrivate: false,
  },
  {
    id: "baren-platform",
    title: "Baren Official Game Platform & Admin Engine",
    category: "fullstack",
    badge: "Serverless Cloud Architecture",
    description:
      "Official web platform and management control panel for the Baren game ecosystem. Engineered with Next.js 16, Drizzle ORM, and Neon Serverless Postgres, deployed on Cloudflare Workers edge runtime.",
    tags: ["Next.js", "Drizzle ORM", "Neon Postgres", "Cloudflare Workers", "TypeScript"],
    githubUrl: "https://github.com/faridfirdaus-fred/baren",
    isPrivate: false,
  },
  {
    id: "hybrid-computing-analyzer",
    title: "Distributed Hybrid Computing Performance Analyzer",
    category: "software-engineering",
    badge: "Distributed Systems & Concurrency",
    description:
      "High-performance benchmark suite pairing a FastAPI backend with a Next.js visualization dashboard to measure execution bottlenecks across thread pools, multiprocessing, and MPI (mpi4py).",
    tags: ["Distributed Systems", "FastAPI", "MPI (mpi4py)", "Next.js", "Python", "Concurrency"],
    githubUrl: "https://github.com/faridfirdaus-fred/hybrid-computing-analyzer",
    isPrivate: false,
  },
  {
    id: "ig-unfollow-checker",
    title: "Instagram Client-Side Relationship & Privacy Tool",
    category: "software-engineering",
    badge: "Zero-Knowledge Utility",
    description:
      "Lightweight, zero-credential follower inspection tool featuring a floating interactive interface. Parses exported JSON files completely within the client browser without external telemetry or ban risk.",
    tags: ["Privacy", "Zero-Knowledge", "TypeScript", "React", "Client-Side Processing"],
    githubUrl: "https://github.com/faridfirdaus-fred/ig-unfollow-checker",
    isPrivate: false,
  },
  {
    id: "calcumat",
    title: "Calcumat Calculus Computation Engine",
    category: "software-engineering",
    badge: "Algorithms & Mathematics",
    description:
      "Interactive mathematical computation platform designed for numerical calculus, complex number transformations, and matrix determinant solving with real-time algorithmic calculations.",
    tags: ["Algorithms", "Math Engine", "JavaScript", "Tailwind CSS", "Educational Tech"],
    image: "/calcumat.png",
    githubUrl: "https://github.com/faridfirdaus-fred/calculus-project",
    liveUrl: "https://faridfirdaus-fred.github.io/calculus-project/",
    isPrivate: false,
  },
  {
    id: "rapor-digital",
    title: "Rapor Digital Academic Evaluation Platform",
    category: "fullstack",
    badge: "RBAC & Data Processing",
    description:
      "Academic grade reporting platform with multi-tier role-based access control (administrators, teachers, students), Excel batch import/export pipelines, and secure session management.",
    tags: ["RBAC", "Express.js", "React", "Data Pipelines", "Authentication", "REST API"],
    githubUrl: "https://github.com/faridfirdaus-fred/rapor-digital",
    isPrivate: false,
  },
  {
    id: "portfolio-next",
    title: "Tactile Editorial Portfolio Platform",
    category: "fullstack",
    badge: "High-Performance Web Platform",
    description:
      "Personal portfolio platform engineered on Next.js 15 App Router & React 19. Designed for sub-100ms interactions, zero bundle bloat, tactile SVG grain overlay, and 100/100 Lighthouse performance metrics.",
    tags: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Performance"],
    image: "/portfolio.png",
    githubUrl: "https://github.com/faridfirdaus-fred/portfolio-website-next",
    liveUrl: "https://portfolio-website-next-coral.vercel.app/",
    isPrivate: false,
  },
];

const categoryFilters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "appsec", label: "AppSec & Cryptography" },
  { key: "systems", label: "Systems & Linux" },
  { key: "fullstack", label: "Fullstack & Cloud" },
  { key: "software-engineering", label: "Software & Distributed Tools" },
];

const WorkSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case "appsec":
        return <FaShieldAlt className="w-5 h-5" />;
      case "systems":
        return <FaTerminal className="w-5 h-5" />;
      case "fullstack":
        return <FaServer className="w-5 h-5" />;
      default:
        return <FaCode className="w-5 h-5" />;
    }
  };

  return (
    <section id="work" className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8">
      {/* Header */}
      <div className="text-left mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-wider uppercase mb-3">
          <FaShieldAlt className="w-3 h-3 text-primary" />
          <span>Curated Systems, Kernel &amp; Security Engineering</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-outfit text-primary">
          Engineered for Resilience &amp; Scale
        </h1>
        <p className="mt-3 text-base sm:text-lg opacity-80 max-w-2xl font-normal leading-relaxed">
          A showcase of real-world software architecture, Linux kernel driver patching, cryptography labs, and enterprise cloud systems.
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
                {/* Visual Preview / Architecture Banner */}
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
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-xs font-mono font-bold tracking-wider opacity-60">
                      SYSTEM SPECIFICATION &amp; ARCHITECTURE
                    </span>
                  </div>
                )}

                {/* Badge & Meta */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {project.badge}
                  </span>
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold opacity-60 uppercase">
                      <FaLock className="w-2.5 h-2.5" />
                      <span>Proprietary</span>
                    </span>
                  )}
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
                      aria-label={`View live site or deployment of ${project.title}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:opacity-75 transition-opacity py-1.5 px-3 rounded-lg border border-primary/20 bg-primary/5"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>{project.isPrivate ? "Live Platform" : "Live Demo"}</span>
                    </a>
                  )}

                  {/* Strictly omit Source Code button for private / company repos */}
                  {project.githubUrl && !project.isPrivate && (
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

                  {project.isPrivate && (
                    <span className="text-xs font-mono opacity-50 ml-auto">
                      Private Repository
                    </span>
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
