import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AiOutlineMenu, AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    console.log("Dark mode is now:", !darkMode);
  };

  return (
    <header className={`fixed top-0 w-full shadow-md transition-all duration-300 
      ${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-800" : "bg-white text-gray-900 shadow-gray-300"}`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Terence Hughes</h1>

        {/* 🌙 Dark Mode Toggle */}
        <button
          aria-label="Toggle Dark Mode"
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition-all duration-300"
        >
          {darkMode ? (
            <AiOutlineSun size={22} className="text-yellow-400" />
          ) : (
            <AiOutlineMoon size={22} className="text-gray-800" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;





