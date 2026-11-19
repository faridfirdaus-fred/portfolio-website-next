"use client";

import React, { useState } from "react";
import {
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaReddit,
  FaChevronDown,
  FaShieldAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "./contactForm";

const faqs = [
  {
    question: "What technical areas do you focus on?",
    answer:
      "My core focus is Software Engineering (backend architecture, TypeScript, Node.js, distributed microservices, Next.js) and Application Security (AppSec, OWASP Top 10 defenses, secure authentication, API vulnerability assessments, and defensive coding).",
  },
  {
    question: "Are you open to remote or hybrid opportunities?",
    answer:
      "Yes, I am fully equipped and experienced with asynchronous and remote collaboration workflows across global time zones, as well as hybrid or on-site arrangements in Indonesia.",
  },
  {
    question: "How do you integrate security into the development lifecycle?",
    answer:
      "Security is prioritized from day zero (Secure SDLC): threat modeling during design, strict validation and sanitization, least-privilege access control (RBAC), security headers, dependency scanning, and defensive code audits before deployment.",
  },
  {
    question: "How can we collaborate on open source or security research?",
    answer:
      "You can reach out directly through the contact form or email for responsible disclosure, technical peer reviews, open-source initiatives, or joint research projects.",
  },
];

const ContactHub: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const email = "faridfirdaus.mail@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-8">
      {/* Page Header */}
      <div className="text-left mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold tracking-wider uppercase mb-3">
          <FaShieldAlt className="w-3 h-3 text-primary" />
          <span>Get In Touch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-outfit text-primary">
          Let&apos;s Build Something Resilient
        </h1>
        <p className="mt-3 text-base sm:text-lg opacity-80 max-w-2xl font-normal leading-relaxed">
          Open for full-time software engineering roles, application security research, contract architecture, and technical collaborations.
        </p>
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Info & Social Grid (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Card */}
          <div className="rounded-3xl border border-primary/20 bg-[#E5E4E3] p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight font-outfit text-primary mb-4">
              Direct Contact
            </h2>

            {/* Email Box with One-Click Copy */}
            <div className="p-4 rounded-2xl border border-primary/20 bg-white/70 mb-5">
              <span className="block text-xs uppercase tracking-wider font-bold opacity-60 mb-1 font-outfit">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="font-mono text-sm sm:text-base font-semibold text-primary truncate hover:underline"
                >
                  {email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-xl border border-primary/20 hover:bg-primary hover:text-secondary transition-all cursor-pointer shrink-0"
                >
                  {copied ? (
                    <FaCheck className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <FaCopy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <span className="text-xs text-emerald-700 font-semibold mt-1 block">
                  Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Location & Timezone Details */}
            <div className="space-y-3 text-sm opacity-85">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-4 h-4 text-primary shrink-0" />
                <span>Ciamis, West Java, Indonesia (UTC+7)</span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="w-4 h-4 text-primary shrink-0" />
                <span>Typical response time: within 24 hours</span>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="mt-6 pt-5 border-t border-primary/15 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-semibold text-primary/90">
                Active for Opportunities &amp; AppSec Projects
              </span>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="rounded-3xl border border-primary/20 bg-[#E5E4E3] p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold tracking-tight font-outfit text-primary mb-4">
              Verified Profiles
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold">
              <a
                href="https://github.com/faridfirdaus-fred"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaGithub className="w-4 h-4 shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/farid-firdaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaLinkedin className="w-4 h-4 shrink-0" />
                <span className="truncate">LinkedIn</span>
              </a>
              <a
                href="https://x.com/freddem4rco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaXTwitter className="w-4 h-4 shrink-0" />
                <span className="truncate">@freddem4rco</span>
              </a>
              <a
                href="https://www.instagram.com/rid.fir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaInstagram className="w-4 h-4 shrink-0" />
                <span className="truncate">@rid.fir</span>
              </a>
              <a
                href="https://www.facebook.com/farid.forster.5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaFacebook className="w-4 h-4 shrink-0" />
                <span className="truncate">Farid Fred</span>
              </a>
              <a
                href="https://www.reddit.com/user/Miserable-Yard4496/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl border border-primary/15 bg-white/60 hover:bg-primary hover:text-secondary transition-all"
              >
                <FaReddit className="w-4 h-4 shrink-0" />
                <span className="truncate">Reddit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 Cols) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="mt-20 pt-12 border-t border-primary/20">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-outfit text-primary">
            Frequently Discussed
          </h2>
          <p className="text-sm opacity-75 mt-1 font-normal">
            Quick context on engineering engagements, collaboration, and security practices.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-primary/20 bg-[#E5E4E3] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg font-outfit text-primary cursor-pointer hover:bg-primary/5 transition-colors"
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base opacity-85 leading-relaxed font-normal border-t border-primary/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactHub;