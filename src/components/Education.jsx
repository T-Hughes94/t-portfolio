import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="education"
      className={`relative w-full py-24 px-4 sm:px-8 transition-all duration-500 ${
        darkMode
          ? "bg-[url('/stars.jpg')] bg-cover bg-fixed bg-center"
          : "bg-[url('/leaves.jpg')] bg-cover bg-fixed bg-center"
      }`}
    >
      <div className="max-w-4xl mx-auto rounded-xl px-8 py-12 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-2xl transition-all duration-500 text-center">
        <h2 className="text-4xl font-extrabold tracking-wide drop-shadow-md text-gray-900 dark:text-white">
          Education
        </h2>

        {/* Certificate Photo */}
        <div className="mt-8">
          <img
            src="/certificate.jpg"
            alt="Certificate"
            className="mx-auto w-full max-w-md h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Education Details */}
        <p className="mt-6 text-lg font-medium text-gray-800 dark:text-gray-300">
          Certificate of Completion
          <br />
          <span className="italic">Flatiron School, Denver — 2023</span>
        </p>
      </div>
    </section>
  );
};

export default Education;

