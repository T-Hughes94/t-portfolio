import React, { useContext } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full px-4 py-8 transition-all duration-500 ${
        darkMode
          ? "bg-gray-900/80 backdrop-blur-md text-gray-100 border-t border-gray-700"
          : "bg-white/80 backdrop-blur-md text-gray-900 border-t border-gray-300"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="mailto:terencehughes450@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-900 hover:bg-green-500 hover:text-white"
            }`}
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/terence-hughes-27204128a/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-900 hover:bg-green-500 hover:text-white"
            }`}
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://github.com/T-Hughes94"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 shadow-md hover:scale-110 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-900 hover:bg-green-500 hover:text-white"
            }`}
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Terence Hughes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

