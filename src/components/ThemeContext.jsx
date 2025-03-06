import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // ✅ Load the theme from localStorage OR default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Loads from storage
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // ✅ Adds dark mode
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // ✅ Removes dark mode
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;




