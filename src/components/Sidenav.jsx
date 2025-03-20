import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineProject,
  AiOutlineRead,
  AiOutlineCoffee,
  AiOutlineCode,
  AiOutlineMoon,
  AiOutlineSun,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

// Navigation Button Component with Neon Effect
const NavItem = ({ href, label, Icon, onClick, darkMode, hoverColor }) => {
  const hoverStyles = {
    blue: darkMode ? "hover:bg-blue-700 text-blue-300" : "hover:bg-blue-400 text-blue-900",
    pink: darkMode ? "hover:bg-pink-700 text-pink-300" : "hover:bg-pink-400 text-pink-900",
    cyan: darkMode ? "hover:bg-cyan-700 text-cyan-300" : "hover:bg-cyan-400 text-cyan-900",
    yellow: darkMode ? "hover:bg-yellow-700 text-yellow-300" : "hover:bg-yellow-400 text-yellow-900",
    orange: darkMode ? "hover:bg-orange-700 text-orange-300" : "hover:bg-orange-400 text-orange-900",
    red: darkMode ? "hover:bg-red-700 text-red-300" : "hover:bg-red-400 text-red-900",
    lime: darkMode ? "hover:bg-lime-700 text-lime-300" : "hover:bg-lime-400 text-lime-900",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer text-lg font-semibold glow-effect ${
        darkMode
          ? `bg-[#1b1f3b] text-white ${hoverStyles[hoverColor]}`
          : `bg-green-700 text-white ${hoverStyles[hoverColor]}`
      }`}
    >
      <Icon size={24} />
      {label && <span>{label}</span>}
    </a>
  );
};

// Sidenav Component
const Sidenav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  return (
    <div>
      {/* Hamburger Menu */}
      <AiOutlineMenu
        onClick={toggleNav}
        className={`absolute top-4 left-4 z-[99] md:hidden text-3xl cursor-pointer transition-all ${
          darkMode ? "text-purple-400 hover:text-blue-400" : "text-green-700 hover:text-teal-500"
        }`}
      />

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          className={`fixed w-full h-screen ${
            darkMode ? "bg-[#0a092d]" : "bg-[#2e7d32]"
          } flex flex-col justify-center items-center z-20`}
        >
          <AiOutlineClose
            onClick={closeNav}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
          />

          <NavItem href="#main" label="Home" Icon={AiOutlineHome} onClick={closeNav} darkMode={darkMode} hoverColor="blue" />
          <NavItem href="#about" label="About" Icon={AiOutlineCoffee} onClick={closeNav} darkMode={darkMode} hoverColor="pink" />
          <NavItem href="#technical" label="Skills" Icon={AiOutlineCode} onClick={closeNav} darkMode={darkMode} hoverColor="cyan" />
          <NavItem href="#experience" label="Experience" Icon={GrProjects} onClick={closeNav} darkMode={darkMode} hoverColor="yellow" />
          <NavItem href="#projects" label="Projects" Icon={AiOutlineProject} onClick={closeNav} darkMode={darkMode} hoverColor="orange" />
          <NavItem href="#education" label="Education" Icon={AiOutlineRead} onClick={closeNav} darkMode={darkMode} hoverColor="red" />
          <NavItem href="mailto:your.email@example.com" label="Contact" Icon={AiOutlineMail} onClick={closeNav} darkMode={darkMode} hoverColor="lime" />

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 mt-6 text-lg font-bold transition-all duration-300 rounded-full shadow-lg ${
              darkMode
                ? "bg-purple-700 text-white hover:bg-purple-600 shadow-[0_0_15px_#9f7aea]"
                : "bg-green-500 text-white hover:bg-green-400 shadow-[0_0_15px_#32a852]"
            }`}
          >
            {darkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[25%] left-4 z-10">
        <div className="flex flex-col space-y-4">
          <NavItem href="#main" Icon={AiOutlineHome} darkMode={darkMode} hoverColor="blue" />
          <NavItem href="#about" Icon={AiOutlineCoffee} darkMode={darkMode} hoverColor="pink" />
          <NavItem href="#technical" Icon={AiOutlineCode} darkMode={darkMode} hoverColor="cyan" />
          <NavItem href="#experience" Icon={GrProjects} darkMode={darkMode} hoverColor="yellow" />
          <NavItem href="#projects" Icon={AiOutlineProject} darkMode={darkMode} hoverColor="orange" />
          <NavItem href="#education" Icon={AiOutlineRead} darkMode={darkMode} hoverColor="red" />
          <NavItem href="mailto:your.email@example.com" Icon={AiOutlineMail} darkMode={darkMode} hoverColor="lime" />

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 text-lg font-bold transition-all duration-300 rounded-full shadow-lg ${
              darkMode
                ? "bg-purple-700 text-white hover:bg-purple-600 shadow-[0_0_15px_#9f7aea]"
                : "bg-green-500 text-white hover:bg-green-400 shadow-[0_0_15px_#32a852]"
            }`}
          >
            {darkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;











