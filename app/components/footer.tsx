"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaEnvelope,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary px-8 md:px-44 py-10 space-x-10 bottom-0 text-opacity-80om-0  text-white md:mt-32">
      <div className="md:pl-24 grid grid-cols-1 gap-20 md:grid-cols-3 ">
        {/* First Section */}
        <div className="flex flex-col  items-start">
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <ul className="space-y-2">
            <li>Farid Firdaus</li>
            <li>Ciamis, West Java, Indonesia</li>
            <li>46261</li>
          </ul>
        </div>

        {/* Second Section */}
        <div className="flex flex-col items-start ">
          <h4 className="font-semibold text-lg mb-2">Social Media</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="mailto:fdiraf77@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                fdiraf77@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/farid-firdaus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                Farid Firdaus
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/riddd.fir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                riddd.fir
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/farid.forster.5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                EL Gato
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/faredrid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaX className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                faridfred
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/faridfirdaus-fred"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                faridfirdaus-fred
              </Link>
            </li>
            <li>
              <Link
                href="https://www.reddit.com/user/Miserable-Yard4496/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaReddit className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                faridfred
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@riddd.fir"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="inline-block w-5 h-5 text-opacity-80 mr-2 text-white hover:text-opacity-100" />
                riddd.fir
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg mb-2">Link</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="opacity-80 hover:opacity-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="opacity-80 hover:opacity-100">
                Work
              </Link>
            </li>
            <li>
              <Link href="/contact" className="opacity-80 hover:opacity-100">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center mx-auto">
        <p className="text-sm opacity-80">
          &copy; 2025 Farid Firdaus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
