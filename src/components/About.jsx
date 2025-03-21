import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import resume from "/src/assets/resume.pdf";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="about"
      className={`relative w-full py-24 px-4 sm:px-8 transition-all duration-500 ${
        darkMode
          ? "bg-[url('/stars.jpg')] bg-cover bg-fixed bg-center"
          : "bg-[url('/leaves.jpg')] bg-cover bg-fixed bg-center"
      }`}
    >
      {/* Glass-style overlay container */}
      <div
        className={`max-w-4xl mx-auto rounded-xl px-8 py-12 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-2xl transition-all duration-500`}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Bio Section */}
        <p className="text-lg leading-relaxed text-center text-gray-800 dark:text-gray-200 mb-4">
          Hey, I’m{" "}
          <span className="font-bold text-blue-600 dark:text-blue-400">
            Terence Hughes
          </span>
          , a full-stack developer from NYC. I’m passionate about building elegant, accessible, and meaningful web experiences.
        </p>
        <p className="text-md text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          I started as a chef, and now I code like I cook — with flavor and discipline. Whether it's crafting clean layouts or integrating APIs, I value thoughtful design and a solid user experience. I also love music, nature, and all things outer space.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="mailto:terencehughes450@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-110 transition duration-200"
          >
            <AiOutlineMail size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/terence-hughes-27204128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-110 transition duration-200"
          >
            <FaLinkedinIn size={24} className="text-gray-800 dark:text-white" />
          </a>
          <a
            href="https://github.com/T-Hughes94"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md hover:scale-110 transition duration-200"
          >
            <FaGithub size={24} className="text-gray-800 dark:text-white" />
          </a>
        </div>

        {/* Resume Button */}
        <div className="mt-8 flex justify-center">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full font-semibold text-white dark:text-gray-900 
              bg-blue-600 dark:bg-blue-300 hover:bg-blue-700 dark:hover:bg-blue-400 shadow-md transition-all duration-300"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;


