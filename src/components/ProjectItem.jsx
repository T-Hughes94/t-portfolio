import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context

const ProjectItem = ({ img, title, demoLink, githubLink }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative flex flex-col items-center justify-center h-auto w-full shadow-xl rounded-xl overflow-hidden group transition-all duration-300 ${
        darkMode
          ? "bg-gray-800 text-white shadow-gray-700"
          : "bg-white text-gray-900 shadow-gray-400"
      }`}
    >
      {/* Project Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Effect with Project Name */}
      <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full p-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            Demo
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
              darkMode
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
