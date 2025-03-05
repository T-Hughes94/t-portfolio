import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // ✅ Import ThemeContext for Dark Mode
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

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode); // ✅ Correct state toggle
    console.log("Dark mode is now:", !darkMode); // ✅ Debugging log
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 z-50 transition-all duration-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        {/* Logo */}
        <a href="#main" className="text-2xl font-bold text-gray-900 dark:text-white">
          Terence <span className="text-blue-500 dark:text-neonBlue">Hughes</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <NavItem href="#about" label="About" Icon={AiOutlineCoffee} />
          <NavItem href="#technical" label="Skills" Icon={AiOutlineCode} />
          <NavItem href="#experience" label="Experience" Icon={GrProjects} />
          <NavItem href="#projects" label="Projects" Icon={AiOutlineProject} />
          <NavItem href="#education" label="Education" Icon={AiOutlineRead} />
          <NavItem href="mailto:your.email@example.com" label="Contact" Icon={AiOutlineMail} />
        </ul>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition-all duration-300"
        >
          {darkMode ? <AiOutlineSun size={22} className="text-yellow-400" /> : <AiOutlineMoon size={22} className="text-gray-800" />}
        </button>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open Menu"
          onClick={toggleNav}
          className="md:hidden p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
        >
          <AiOutlineMenu size={24} />
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${navOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeNav}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white dark:bg-gray-900 shadow-lg transform ${navOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-50`}
      >
        <div className="flex justify-end p-4">
          <button aria-label="Close Menu" onClick={toggleNav} className="p-2">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10">
          <NavItem href="#main" label="Home" Icon={AiOutlineHome} onClick={closeNav} />
          <NavItem href="#about" label="About" Icon={AiOutlineCoffee} onClick={closeNav} />
          <NavItem href="#technical" label="Skills" Icon={AiOutlineCode} onClick={closeNav} />
          <NavItem href="#experience" label="Experience" Icon={GrProjects} onClick={closeNav} />
          <NavItem href="#projects" label="Projects" Icon={AiOutlineProject} onClick={closeNav} />
          <NavItem href="#education" label="Education" Icon={AiOutlineRead} onClick={closeNav} />
          <NavItem href="mailto:your.email@example.com" label="Contact" Icon={AiOutlineMail} onClick={closeNav} />
        </ul>
      </div>
    </header>
  );
};

/** Small Component for Navigation Links */
const NavItem = ({ href, label, Icon, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200"
    >
      <Icon size={20} />
      <span className="hidden md:inline">{label}</span>
    </a>
  </li>
);

export default Navbar;

