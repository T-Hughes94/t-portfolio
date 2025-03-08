import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import resume from "/src/assets/resume.pdf";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      id="about"
      className={`max-w-[1040px] mx-auto md:pl-20 p-6 py-16 text-center rounded-lg shadow-lg transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
        About Me
      </h1>

      {/* Profile Picture */}
      <img
        src="https://avatars.githubusercontent.com/u/133562544?v=4"
        alt="Profile Picture"
        className="w-64 h-64 rounded-full mx-auto mt-6 hover:scale-110 ease-in duration-200 shadow-lg"
      />

      {/* Bio */}
      <p className="text-lg mt-6 max-w-[80%] mx-auto">
        Hi, I'm <span className="font-bold text-blue-500 dark:text-neonBlue">Terence Hughes</span>, 
        a passionate developer based in New York, blending technology with creativity to build modern web applications.
      </p>

      <p className="text-md mt-4 max-w-[90%] mx-auto">
        With a background in the culinary arts, I bring a unique perspective to software development—balancing precision and creativity.
        When I'm not coding, I love hiking, exploring space science, and playing music.
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-8 mt-6">
        <a
          href="mailto:terencehughes450@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full shadow-lg hover:scale-110 ease-in duration-200 bg-gray-200 dark:bg-gray-800"
        >
          <AiOutlineMail size={30} className="text-gray-900 dark:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/terence-hughes-27204128a/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full shadow-lg hover:scale-110 ease-in duration-200 bg-gray-200 dark:bg-gray-800"
        >
          <FaLinkedinIn size={30} className="text-gray-900 dark:text-white" />
        </a>
        <a
          href="https://github.com/T-Hughes94"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full shadow-lg hover:scale-110 ease-in duration-200 bg-gray-200 dark:bg-gray-800"
        >
          <FaGithub size={30} className="text-gray-900 dark:text-white" />
        </a>
      </div>

      {/* Resume Button */}
      <div className="mt-8">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md text-white dark:text-gray-900 
          bg-green-600 dark:bg-blue-400 hover:bg-green-700 dark:hover:bg-blue-500"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default About;
