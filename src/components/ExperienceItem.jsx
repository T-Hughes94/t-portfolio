import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ExperienceItem = ({ year, title, company, duration, details }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ol className="relative border-l-4 pl-6 group">
      <li
        className={`relative transition-all duration-300 p-6 rounded-lg shadow-md 
          ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-white hover:shadow-purple-600"
              : "bg-white border-green-600 text-gray-900 hover:shadow-green-400"
          }`}
      >
        {/* Circle Dot */}
        <div
          className={`absolute w-4 h-4 rounded-full top-6 -left-2 border-2 transition-all duration-300 group-hover:scale-125 ${
            darkMode
              ? "bg-purple-500 border-purple-300"
              : "bg-green-500 border-green-300"
          }`}
        />

        {/* Header Row */}
        <div className="flex flex-wrap gap-4 items-center mb-2 text-sm sm:text-base">
          <span
            className={`px-3 py-1 font-semibold rounded-md ${
              darkMode ? "bg-blue-500 text-white" : "bg-green-600 text-white"
            }`}
          >
            {year}
          </span>
          <span className="font-semibold text-lg">{title}</span>
          <span className="italic text-sm">{company}</span>
          <span className="text-sm">{duration}</span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base">{details}</p>
      </li>
    </ol>
  );
};

export default ExperienceItem;

