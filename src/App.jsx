import React from "react";
import "./App.css";
import Sidenav from "./components/Sidenav";
import About from "./components/About";
import Experience from "./components/Experience";
import TechnicalSkills from "./components/TechnicalSkills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import ThemeProvider from "./components/ThemeContext"; // ✅ Import Theme Context



function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-all duration-300">
        <StarsBackground /> 
        <Sidenav />
        <Hero />
        <About />
        <TechnicalSkills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    // </ThemeProvider>
  );
}

export default App;






