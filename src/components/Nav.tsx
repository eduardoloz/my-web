import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-100 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="/Home" className="text-xl text-sky-950 hover:text-sky-700 ml-2">
              Home
            </a>
            <a href="/blog" className="text-xl text-sky-950 hover:text-sky-700">
              Blog
            </a>
            <a href="/Projects" className="text-xl text-sky-950 hover:text-sky-700">
              Projects
            </a>
            <a href="/About" className="text-xl text-sky-950 hover:text-sky-700">
              About
            </a>
            {/* Smooth scroll to Contact Section */}
            <a href="/About#contact" className="text-xl text-sky-950 hover:text-sky-700">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-sky-950 focus:outline-none"
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://linkedin.com/in/eduardo-s-lozano"
              className="text-sky-950 hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/eduardoloz"
              className="text-sky-950 hover:text-sky-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
        <a href="/Home" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Home
        </a>
        <a href="/blog" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Blog
        </a>
        <a href="/Projects" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Projects
        </a>
        <a href="/About" className="block py-2 px-4 text-lg hover:bg-gray-200">
          About
        </a>
        {/* Smooth scroll to Contact Section */}
        <a href="/About#contact" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
