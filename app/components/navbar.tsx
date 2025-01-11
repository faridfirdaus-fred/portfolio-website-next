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

  // Effect for detecting scroll and changing the scrolling state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup event listener
  }, []);

  return (
    <nav
      className={`${
        scrolling ? "bg-primary text-secondary" : "bg-secondary text-primary"
      } fixed w-full z-50 top-0 transition-all duration-300 ease-in-out`}
    >
      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-primary bg-secondary focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <FaBars className="w-6 h-6" /> {/* Use the React icon */}
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-primary text-white space-y-2 px-4 py-2`}
      >
        <Link href="/" className="block px-2 py-1 hover:bg-gray-700 rounded">
          Home
        </Link>
        <Link
          href="/about"
          className="block px-2 py-1 hover:bg-gray-700 rounded"
        >
          About
        </Link>
        <Link
          href="/services"
          className="block px-2 py-1 hover:bg-gray-700 rounded"
        >
          Services
        </Link>
        <Link
          href="/contact"
          className="block px-2 py-1 hover:bg-gray-700 rounded"
        >
          Contact
        </Link>
      </div>

      {/* Navbar (Desktop) */}
      <div className="hidden md:flex items-center w-full mx-auto px-4 py-6 z-50">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* Section Kiri */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span
                className={`-ml-6 font-semibold text-xl ${
                  scrolling ? "text-secondary" : "text-primary"
                } font-outfit`}
              >
                fdiraf77@gmail.com
              </span>
            </Link>
          </div>

          {/* Section Kanan */}
          <div className="space-x-10 flex items-center text-lg font-semibold">
              <Link href="/" className="hover:scale-105">
                Home
              </Link>
            <Link href="/about" className="hover:scale-105">
              About
            </Link>
            <Link href="/work" className="hover:scale-105">
              Work
            </Link>
            <Link href="/contact" className="hover:scale-105">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
