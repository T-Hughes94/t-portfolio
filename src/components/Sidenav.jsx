import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineMail, AiOutlineProject, AiOutlineRead, AiOutlineCoffee, AiOutlineCode, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

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
        className={`absolute top-4 left-4 z-[99] md:hidden text-3xl cursor-pointer ${
          darkMode ? "text-purple-400" : "text-green-700"
        }`}
      />

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          className={`fixed w-full h-screen ${
            darkMode ? "bg-[#121933]" : "bg-[#2e7d32]"
          } flex flex-col justify-center items-center z-20`}
        >
          <AiOutlineClose
            onClick={closeNav}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
          />

          <NavItem href="#main" label="Home" Icon={AiOutlineHome} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="#about" label="About" Icon={AiOutlineCoffee} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="#technical" label="Skills" Icon={AiOutlineCode} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="#experience" label="Experience" Icon={GrProjects} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="#projects" label="Projects" Icon={AiOutlineProject} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="#education" label="Education" Icon={AiOutlineRead} onClick={closeNav} darkMode={darkMode} />
          <NavItem href="mailto:your.email@example.com" label="Contact" Icon={AiOutlineMail} onClick={closeNav} darkMode={darkMode} />

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 mt-6 text-lg font-bold transition-all duration-300 rounded-full shadow-lg ${
              darkMode ? "bg-purple-700 text-white hover:bg-purple-600" : "bg-green-500 text-white hover:bg-green-400"
            }`}
          >
            {darkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[25%] left-4 z-10">
        <div className="flex flex-col space-y-4">
          <NavItem href="#main" Icon={AiOutlineHome} darkMode={darkMode} />
          <NavItem href="#about" Icon={AiOutlineCoffee} darkMode={darkMode} />
          <NavItem href="#technical" Icon={AiOutlineCode} darkMode={darkMode} />
          <NavItem href="#experience" Icon={GrProjects} darkMode={darkMode} />
          <NavItem href="#projects" Icon={AiOutlineProject} darkMode={darkMode} />
          <NavItem href="#education" Icon={AiOutlineRead} darkMode={darkMode} />
          <NavItem href="mailto:your.email@example.com" Icon={AiOutlineMail} darkMode={darkMode} />

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 text-lg font-bold transition-all duration-300 rounded-full shadow-lg ${
              darkMode ? "bg-purple-700 text-white hover:bg-purple-600" : "bg-green-500 text-white hover:bg-green-400"
            }`}
          >
            {darkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

/** Reusable Navigation Item */
const NavItem = ({ href, label, Icon, onClick, darkMode }) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-200 cursor-pointer ${
      darkMode
        ? "bg-[#1b1f3b] text-white hover:bg-purple-800"
        : "bg-green-700 text-white hover:bg-green-600"
    }`}
  >
    <Icon size={24} />
    {label && <span className="text-lg">{label}</span>}
  </a>
);

export default Sidenav;







