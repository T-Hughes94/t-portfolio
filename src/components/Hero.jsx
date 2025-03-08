import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div id="hero" className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500 ${
          darkMode ? "bg-[url('/space.jpeg')]" : "bg-[url('/mountains.jpg')]"
        }`}
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 dark:bg-black/50" />

      {/* Content */}
      <div className="relative text-center text-white z-10 px-6 md:px-0">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Terence Hughes
        </h1>

        {/* Type Animation */}
        <h2 className="flex justify-center items-center text-xl sm:text-2xl pt-4">
          <TypeAnimation
            sequence={[
              "Developer 💻",
              1500,
              "Foodie 🌮",
              1500,
              "Nature Lover 🌿",
              1500,
              "Flatiron Graduate 🎓",
              1500,
            ]}
            wrapper="span"
            cursor={true}
            style={{ fontSize: "1em", paddingLeft: "5px" }}
            repeat={Infinity}
          />
        </h2>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-white hover:text-blue-400 transition duration-300 text-2xl sm:text-3xl" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-gray-400 transition duration-300 text-2xl sm:text-3xl" />
          </a>
          <a href="mailto:your.email@example.com">
            <AiOutlineMail className="text-white hover:text-red-400 transition duration-300 text-2xl sm:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
