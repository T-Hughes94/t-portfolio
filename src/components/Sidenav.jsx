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

const Sidenav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  // Define hover styles inline without a separate component
  const hoverStyles = [
    darkMode ? "hover:bg-purple-900 text-purple-300 shadow-[0_0_20px_#6b2bbf]" : "hover:bg-blue-900 text-blue-300 shadow-[0_0_20px_#1e3a8a]",
    darkMode ? "hover:bg-purple-800 text-purple-300 shadow-[0_0_20px_#7742d7]" : "hover:bg-blue-800 text-blue-300 shadow-[0_0_20px_#2563eb]",
    darkMode ? "hover:bg-purple-700 text-purple-300 shadow-[0_0_20px_#8b5cf6]" : "hover:bg-blue-700 text-blue-300 shadow-[0_0_20px_#3b82f6]",
    darkMode ? "hover:bg-purple-600 text-purple-300 shadow-[0_0_20px_#a78bfa]" : "hover:bg-blue-600 text-blue-300 shadow-[0_0_20px_#60a5fa]",
    darkMode ? "hover:bg-purple-500 text-purple-300 shadow-[0_0_20px_#c084fc]" : "hover:bg-blue-500 text-blue-300 shadow-[0_0_20px_#93c5fd]",
    darkMode ? "hover:bg-purple-400 text-purple-300 shadow-[0_0_20px_#e0aaff]" : "hover:bg-blue-400 text-blue-300 shadow-[0_0_20px_#bfdbfe]",
    darkMode ? "hover:bg-purple-300 text-purple-300 shadow-[0_0_20px_#f5d0fe]" : "hover:bg-blue-300 text-blue-300 shadow-[0_0_20px_#dbeafe]",
  ];

  // Define menu items with icons
  const menuItems = [
    { href: "#main", label: "Home", icon: <AiOutlineHome size={24} /> },
    { href: "#about", label: "About", icon: <AiOutlineCoffee size={24} /> },
    { href: "#technical", label: "Skills", icon: <AiOutlineCode size={24} /> },
    { href: "#experience", label: "Experience", icon: <GrProjects size={24} /> },
    { href: "#projects", label: "Projects", icon: <AiOutlineProject size={24} /> },
    { href: "#education", label: "Education", icon: <AiOutlineRead size={24} /> },
    { href: "mailto:your.email@example.com", label: "Contact", icon: <AiOutlineMail size={24} /> },
  ];

  return (
    <div>
      {/* Hamburger Menu */}
      <AiOutlineMenu
        onClick={toggleNav}
        className={`absolute top-4 left-4 z-[99] md:hidden text-3xl cursor-pointer transition-all ${
          darkMode ? "text-purple-400 hover:text-blue-400" : "text-blue-700 hover:text-blue-500"
        }`}
      />

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          className={`fixed w-full h-screen ${
            darkMode ? "bg-[#0a092d]" : "bg-[#1e3a8a]"
          } flex flex-col justify-center items-center z-20 transition-all duration-300`}
        >
          <AiOutlineClose
            onClick={closeNav}
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
          />

          {/* Map through menu items and apply hover styles dynamically */}
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={closeNav}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-500 cursor-pointer text-lg font-semibold bg-[#1b1f3b] text-white ${hoverStyles[index]}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 mt-6 text-lg font-bold transition-all duration-500 rounded-full shadow-lg ${
              darkMode
                ? "bg-purple-700 text-white hover:bg-purple-600 shadow-[0_0_25px_#9f7aea]"
                : "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_25px_#3b82f6]"
            }`}
          >
            {darkMode ? <AiOutlineMoon size={24} /> : <AiOutlineSun size={24} />}
          </button>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="md:block hidden fixed top-[18%] left-4 z-10">
        <div className="flex flex-col space-y-6">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`flex items-center gap-3 p-4 rounded-lg shadow-md transition-all duration-500 cursor-pointer text-lg font-semibold bg-[#1b1f3b] text-white ${hoverStyles[index]}`}
            >
              {item.icon}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 text-lg font-bold transition-all duration-500 rounded-full shadow-lg ${
              darkMode
                ? "bg-purple-700 text-white hover:bg-purple-600 shadow-[0_0_25px_#9f7aea]"
                : "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_0_25px_#3b82f6]"
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














