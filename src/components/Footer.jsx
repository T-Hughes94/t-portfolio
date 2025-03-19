import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"; // Social Icons

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-green-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-t border-gray-300 dark:border-gray-700 transition-all duration-300">
      <div className="max-w-[1040px] mx-auto text-center flex flex-col items-center">
        
        {/* Social Links */}
        <div className="flex gap-6 my-4">
          <a
            href="mailto:terencehughes450@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/terence-hughes-27204128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:scale-110 transition-all duration-300"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://github.com/T-Hughes94"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Terence Hughes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
