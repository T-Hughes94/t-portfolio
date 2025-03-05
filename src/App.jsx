import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/About";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeContext"; // ✅ Import Theme Context

// ✅ Dark Mode Test Component
const DarkModeTest = () => {
  return (
    <div className="p-10 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 text-center rounded-lg shadow-lg mt-10">
      Dark Mode Test: If this text turns white on a dark background, Dark Mode is working! 🌙
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-all duration-300">
        <Navbar />
        <Hero />
        <DarkModeTest /> {/* ✅ Confirms Dark Mode is working */}
        <AboutMe />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;






