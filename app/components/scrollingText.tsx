"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";

// 5 pilar fokus Software Engineering & Application Security
const texts = [
  "Architecting robust backend services & resilient fullstack applications with security-first design.",
  "Bridging modern software development with Application Security (AppSec) to harden systems across the SDLC.",
  "Engineering scalable APIs, high-throughput microservices, and modern web architectures with TypeScript and Node.js.",
  "Defending systems against OWASP Top 10 vulnerabilities through threat modeling, security audits, and defensive programming.",
  "Deeply committed to system reliability, vulnerability research, and building dependable digital infrastructure."
];

// Komponen utama
const ScrollingText = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollX, setScrollX] = useState(40);
  const [rotateDeg, setRotateDeg] = useState(0);

  const handleInView = (index: number, inView: boolean) => {
    if (inView) setActiveIndex(index);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY;
          const maxScroll = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
          const scrollFraction = Math.min(1, Math.max(0, scrollPos / maxScroll));
          setScrollX(40 - scrollFraction * 40);
          setRotateDeg(scrollFraction * 12);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row py-12 md:items-center mt-12 md:mt-24 justify-center mx-auto max-w-6xl px-6 md:px-12 md:mb-28">
      {/* Bagian Kiri: Manifesto Focus */}
      <div className="md:w-8/12 w-full text-left space-y-10 md:space-y-16">
        <div className="inline-block">
          <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-1">
            Core Engineering Philosophy
          </p>
          <div className="h-0.5 w-16 bg-primary/40 rounded-full" />
        </div>
        {texts.map((text, index) => (
          <InViewText
            key={index}
            index={index}
            activeIndex={activeIndex}
            handleInView={handleInView}
            text={text}
          />
        ))}
      </div>

      {/* Bagian Kanan: GitHub Link Badge */}
      <div className="md:w-4/12 h-full flex flex-col justify-center items-center mt-16 md:mt-0">
        <motion.div
          className="text-7xl md:text-8xl text-primary/70 hover:text-primary transition-colors p-6 rounded-3xl border border-primary/10 bg-primary/5 shadow-sm hover:shadow-md"
          style={{
            transform: `translateX(${scrollX}px) rotate(${rotateDeg}deg)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <a
            href="https://github.com/faridfirdaus-fred"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Farid Firdaus on GitHub"
            className="block text-current focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
          >
            <FaGithub />
          </a>
        </motion.div>
        <p className="mt-4 text-xs tracking-wider uppercase opacity-60 font-semibold font-outfit">
          Explore Code on GitHub
        </p>
      </div>
    </div>
  );
};

// Komponen untuk setiap teks
interface InViewTextProps {
  index: number;
  activeIndex: number;
  handleInView: (index: number, inView: boolean) => void;
  text: string;
}

const InViewText = ({
  index,
  activeIndex,
  handleInView,
  text,
}: InViewTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    handleInView(index, inView);
  }, [inView, index, handleInView]);

  // Mengatur state animasi berdasarkan index
  const animateState =
    activeIndex === index
      ? "visible"
      : activeIndex > index
      ? "inactive"
      : "hidden";

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={animateState}
      variants={{
        hidden: { opacity: 0.2, y: 12 },
        visible: { opacity: 1, y: 0 },
        inactive: { opacity: 0.45, y: 0 },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-outfit text-primary"
    >
      {text}
    </motion.p>
  );
};

export default ScrollingText