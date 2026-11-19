"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolling(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = scrolling
    ? "bg-primary text-secondary shadow-md border-b border-primary/20"
    : "bg-[#E5E4E3]/85 text-primary backdrop-blur-md border-b border-primary/10";

  return (
    <nav
      className={`${navClasses} fixed w-full z-50 top-0 transition-all duration-200 ease-in-out`}
    >
      {/* Mobile Bar */}
      <div className="flex items-center justify-between px-6 py-4 md:hidden">
        <Link
          href="mailto:faridfirdaus.mail@gmail.com"
          className="font-outfit font-semibold text-sm truncate max-w-[220px]"
        >
          faridfirdaus.mail@gmail.com
        </Link>
        <button
          onClick={toggleSidebar}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="p-2 rounded-lg border border-current/20 focus:outline-none focus:ring-2 focus:ring-current"
        >
          <FaBars className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-primary text-secondary border-t border-secondary/10 px-6 py-4 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
          <Link
            href="/work"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Work
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-lg font-medium hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center w-full px-8 py-5">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* Email / Brand */}
          <div className="flex items-center">
            <Link
              href="mailto:faridfirdaus.mail@gmail.com"
              className="font-semibold text-lg font-outfit hover:opacity-80 transition-opacity"
            >
              faridfirdaus.mail@gmail.com
            </Link>
          </div>

          {/* Nav links */}
          <div className="space-x-8 flex items-center text-base font-semibold tracking-wide">
            <Link
              href="/"
              className="hover:opacity-75 transition-opacity px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="hover:opacity-75 transition-opacity px-2 py-1"
            >
              Work
            </Link>
            <Link
              href="/contact"
              className="hover:opacity-75 transition-opacity px-2 py-1"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
