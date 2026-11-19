"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaReddit,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary px-8 md:px-24 py-14 text-secondary/90 md:mt-32 border-t border-primary/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* First Section */}
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg mb-3 text-secondary tracking-wide font-outfit">
            Farid Firdaus
          </h4>
          <ul className="space-y-1.5 text-sm opacity-80">
            <li>Software Engineer &amp; AppSec Researcher</li>
            <li>Ciamis, West Java, Indonesia • 46261</li>
            <li>Remote &amp; Hybrid Available</li>
          </ul>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg mb-3 text-secondary tracking-wide font-outfit">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:faridfirdaus.mail@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaEnvelope className="w-4 h-4 shrink-0" />
                <span>faridfirdaus.mail@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/faridfirdaus-fred"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaGithub className="w-4 h-4 shrink-0" />
                <span>faridfirdaus-fred</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/farid-firdaus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaLinkedin className="w-4 h-4 shrink-0" />
                <span>Farid Firdaus</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/freddem4rco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaXTwitter className="w-4 h-4 shrink-0" />
                <span>@freddem4rco (faridfred)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rid.fir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaInstagram className="w-4 h-4 shrink-0" />
                <span>Farid Firdaus (@rid.fir)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/farid.forster.5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaFacebook className="w-4 h-4 shrink-0" />
                <span>Farid Fred</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.reddit.com/user/Miserable-Yard4496/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors opacity-80 hover:opacity-100"
              >
                <FaReddit className="w-4 h-4 shrink-0" />
                <span>Reddit (faridfred)</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg mb-3 text-secondary tracking-wide font-outfit">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="opacity-80 hover:opacity-100 transition-opacity">
                Work &amp; Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                Contact &amp; Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-secondary/10 text-center max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs opacity-70 gap-2">
        <p>&copy; {new Date().getFullYear()} Farid Firdaus. All rights reserved.</p>
        <p>Crafted with Next.js, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
