import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ProjectItem = ({ img, title, demoLink, githubLink }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`relative flex flex-col items-center justify-between h-full w-full overflow-hidden rounded-xl border-4 transition-all duration-300 shadow-xl 
        ${
          darkMode
            ? "bg-gray-900 border-purple-600 shadow-purple-800"
            : "bg-white border-green-500 shadow-green-300"
        }`}
    >
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-52 object-cover rounded-t-lg transition-transform duration-500 hover:scale-105"
      />

      {/* Title */}
      <div className="text-center py-4 px-2">
        <h3 className="text-2xl font-bold tracking-wide">{title}</h3>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-around w-full px-4 pb-4 gap-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`w-full px-4 py-2 rounded-lg font-semibold transition duration-300 
              ${
                darkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-green-600 hover:bg-green-500 text-white"
              }`}
          >
            Demo
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`w-full px-4 py-2 rounded-lg font-semibold transition duration-300 
              ${
                darkMode
                  ? "bg-purple-600 hover:bg-purple-500 text-white"
                  : "bg-green-600 hover:bg-green-500 text-white"
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

