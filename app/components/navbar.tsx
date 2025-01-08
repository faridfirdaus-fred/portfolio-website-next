"use client"


import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background text-gray-800 fixed w-full z-10">
      {/* Mobile Toggle Button */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden border">
        <button
          onClick={toggleSidebar}
          className="text-primary focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white space-y-2 px-4 py-2`}
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
      <div className="border hidden md:flex items-center w-full mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="h-10" // Ensure fixed height here
          style={{ objectFit: "contain" }} // Ensure correct fitting
              />
              <span className="-ml-6 font-semibold text-lg text-primary font-outfit">FARIDFRED</span> {/* Add margin to the left of the text */}
            </Link>
          </div>

          {/* Navigation Links Section */}
          <div className="space-x-8 flex items-center mx-auto">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Dark Mode Toggle Section */}
          <div className="flex items-center">
            <button className="bg-gray-800 text-white p-2 rounded-full">
              {/* Example Dark Mode Icon (could be replaced with an actual icon) */}
              🌙
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
