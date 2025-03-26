// src/components/Hero.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center opacity-40 transition-all duration-500 z-0 ${
          darkMode ? "bg-[url('/space.jpeg')]" : "bg-[url('/mountains.jpg')]"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-0" />

      {/* Main Content */}
      <div className="relative w-full max-w-6xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-wide drop-shadow-lg">
            Terence Hughes
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold">
            <TypeAnimation
              sequence={["Developer 💻", 1500, "Foodie 🌮", 1500, "Nature Lover 🌿", 1500, "Flatiron Graduate 🎓", 1500]}
              wrapper="span"
              cursor={true}
              className="inline-block"
              repeat={Infinity}
            />
          </h2>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-blue-400 transition duration-300 text-3xl" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white hover:text-gray-400 transition duration-300 text-3xl" />
            </a>
            <a href="mailto:your.email@example.com">
              <AiOutlineMail className="text-white hover:text-red-400 transition duration-300 text-3xl" />
            </a>
          </div>
        </div>

        {/* Sun/Moon Orb */}
        <div className="hidden md:flex justify-center">
          <div className="relative w-full h-full md:w-90 md:h-84 rounded-full overflow-hidden perspective-[1000px] transform-style-preserve-3d">
            <img
              src={darkMode ? "/moon_processed.jpg" : "/sun_processed.jpg"}
              alt={darkMode ? "Moon" : "Sun"}
              className="w-full h-full object-cover rounded-full animate-float3d shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




