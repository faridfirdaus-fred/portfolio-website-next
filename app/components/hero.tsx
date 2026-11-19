"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Button from "./button";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div
      ref={ref}
      className="w-full min-h-[90vh] md:min-h-screen pt-24 pb-12 flex flex-col md:flex-row items-center justify-center mx-auto max-w-6xl px-6 md:px-12"
    >
      {/* Left intro column */}
      <motion.div
        className="w-full md:w-3/5 flex flex-col items-start text-left z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-wider uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span>Available for Roles &amp; AppSec Research</span>
        </div>

        <p className="text-xl md:text-2xl font-bold opacity-75 font-outfit">
          Hi, I am
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-1 font-outfit text-primary">
          Farid Firdaus
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold opacity-90 text-primary">
          Software Engineer | Application Security
        </p>
        <p className="mt-4 text-base md:text-lg font-normal leading-relaxed opacity-85 max-w-xl">
          Focusing on robust backend engineering, resilient fullstack systems, and web application security (AppSec). Engineering dependable digital infrastructure with defensive security and OWASP principles baked in.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <Button href="/contact" variant="primary">
            Get in Touch
          </Button>
          <Button
            href="/cv/farid_firdaus_cv_english.pdf"
            variant="secondary"
            download="farid_firdaus_cv_english.pdf"
          >
            CV (EN)
          </Button>
          <Button
            href="/cv/farid_firdaus_cv_indonesia.pdf"
            variant="secondary"
            download="farid_firdaus_cv_indonesia.pdf"
          >
            CV (ID)
          </Button>
        </div>
      </motion.div>

      {/* Right portrait column */}
      <motion.div
        className="w-full md:w-2/5 flex justify-center items-center relative mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          {/* Subtle decorative blob background */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-4 -left-4 w-full h-full scale-125 z-0 opacity-15"
          >
            <path
              fill="#201315"
              d="M52.9,-54.9C67.3,-50.9,77.1,-33.1,73.8,-18C70.6,-2.9,54.3,9.6,44.9,26C35.5,42.4,32.9,62.7,23.6,67C14.4,71.3,-1.5,59.4,-12.2,48.9C-22.9,38.3,-28.5,29,-32.7,19.8C-36.8,10.6,-39.5,1.6,-43.1,-12.7C-46.6,-27,-51,-46.5,-44,-51.9C-37,-57.3,-18.5,-48.5,0.4,-48.9C19.2,-49.4,38.4,-59,52.9,-54.9Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* WebP Portrait */}
          <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl bg-primary/10">
            <Image
              src="/faridhero.webp"
              alt="Farid Firdaus | Software Engineer &amp; Application Security"
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
