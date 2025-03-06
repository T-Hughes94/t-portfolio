import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { AiOutlineMenu, AiOutlineMoon } from "react-icons/ai";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  console.log("Dark mode state:", darkMode); // ✅ Log darkMode state

  return (
    <header className="fixed top-0 w-full bg-white text-gray-900 shadow-md transition-all duration-300">
      <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold">Terence Hughes</h1>

        {/* Dark Mode Toggle (disabled for now) */}
        <button
          aria-label="Toggle Dark Mode"
          className="p-2 bg-gray-200 rounded-full shadow-md transition-all duration-300"
          disabled
        >
          <AiOutlineMoon size={22} className="text-gray-800" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;




