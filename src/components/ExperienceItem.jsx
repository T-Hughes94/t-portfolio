import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context

const ExperienceItem = ({ year, title, company, duration, details }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ol
      className={`relative border-l-4 ml-4 p-4 rounded-md transition-all duration-500 ${
        darkMode ? "border-gray-700 bg-gray-800 text-white" : "border-green-600 bg-white text-gray-900"
      }`}
    >
      <li className="mb-8">
        {/* Timeline Circle */}
        <div
          className={`absolute w-4 h-4 rounded-full -left-3 border-2 ${
            darkMode ? "bg-gray-400 border-gray-300" : "bg-green-500 border-green-700"
          }`}
        />
        
        {/* Experience Content */}
        <div className="ml-6">
          <p className="flex flex-wrap gap-4 items-center text-sm md:text-base">
            <span
              className={`inline-block px-3 py-1 font-semibold rounded-md ${
                darkMode ? "bg-blue-500 text-white" : "bg-green-600 text-white"
              }`}
            >
              {year}
            </span>
            <span className="text-lg font-semibold">{title}</span>
            <span className="text-sm font-normal">{company}</span>
            <span className="text-sm font-normal">{duration}</span>
          </p>
          <p className="mt-2 text-base">{details}</p>
        </div>
      </li>
    </ol>
  );
};

export default ExperienceItem;
