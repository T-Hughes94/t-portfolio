import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Load the theme from localStorage or default to light mode
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // ✅ Adds "dark" class to <html>
      localStorage.setItem("theme", "dark"); // ✅ Saves preference
    } else {
      document.documentElement.classList.remove("dark"); // ✅ Removes "dark" class from <html>
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

