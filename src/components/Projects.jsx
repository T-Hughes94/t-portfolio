import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ProjectItem from "./ProjectItem";
import toonRaterImg from "/src/assets/2.png";
import pocketChefImg from "/src/assets/pocketChef.png";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`relative w-full py-24 px-4 sm:px-8 transition-all duration-500 ${
        darkMode
          ? "bg-[url('/stars.jpg')] bg-cover bg-fixed bg-center"
          : "bg-[url('/leaves.jpg')] bg-cover bg-fixed bg-center"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-lg text-white dark:text-white">
          Projects
        </h2>
        <p className="text-lg mt-4 text-white/90 dark:text-gray-200">
          Check out some of my recent work!
        </p>

        <div className="grid sm:grid-cols-2 gap-10 mt-12">
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
    </section>
  );
};

export default Projects;

