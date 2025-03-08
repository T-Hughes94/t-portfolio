import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import ProjectItem from "./ProjectItem";
import toonRaterImg from "/src/assets/2.png";
import pocketChefImg from "/src/assets/pocketChef.png";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      className={`max-w-[1040px] mx-auto md:pl-20 p-6 py-16 rounded-lg shadow-lg transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-extrabold text-center tracking-wide drop-shadow-lg">
        Projects
      </h1>

      <p className="text-center py-4 text-lg">
        Check out some of my recent work!
      </p>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-10">
        <ProjectItem
          img={pocketChefImg}
          title="Pocket Chef"
          demoLink="https://www.loom.com/share/abaaddc84a8e45d491d0fe74f05b2b76"
          githubLink="https://github.com/T-Hughes94/python-p4-project-template/tree/Testing"
        />
        <ProjectItem
          img={toonRaterImg}
          title="Toon Rater"
          demoLink="https://www.loom.com/share/269cbaeaefc94ab0858f9f9af09ac168"
          githubLink="https://github.com/T-Hughes94/Toon-Rater1"
        />
      </div>
    </div>
  );
};

export default Projects;
