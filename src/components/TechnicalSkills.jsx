import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import jsLogo from "/src/assets/js-logo.png";
import pythonLogo from "/src/assets/python-logo.png";
import reactLogo from "/src/assets/react-logo.png";
import sqlLogo from "/src/assets/sql-logo.png";
import htmlLogo from "/src/assets/html-logo.png";
import cssLogo from "/src/assets/css-logo.png";
import sqlaLogo from "/src/assets/sqla-logo.png";
import tlwndLogo from "/src/assets/tlwnd-logo.png";
import flaskLogo from "/src/assets/flask-logo.png";

const skills = [
  { name: "JavaScript", logo: jsLogo, link: "https://www.javascript.com" },
  { name: "Python", logo: pythonLogo, link: "https://www.python.org" },
  { name: "React", logo: reactLogo, link: "https://reactjs.org" },
  { name: "SQL", logo: sqlLogo, link: "https://www.freecodecamp.org/news/sql-and-databases-full-course/" },
  { name: "HTML", logo: htmlLogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", logo: cssLogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "SQLAlchemy", logo: sqlaLogo, link: "https://www.sqlalchemy.org/" },
  { name: "Tailwind CSS", logo: tlwndLogo, link: "https://tailwindcss.com/" },
  { name: "Flask", logo: flaskLogo, link: "https://flask.palletsprojects.com/en/3.0.x/" },
];

const TechnicalSkills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="technical"
      className={`relative w-full py-24 px-4 sm:px-8 transition-all duration-500 ${
        darkMode
          ? "bg-[url('/stars.jpg')] bg-cover bg-fixed bg-center"
          : "bg-[url('/leaves.jpg')] bg-cover bg-fixed bg-center"
      }`}
    >
      <div
        className="max-w-6xl mx-auto rounded-xl px-8 py-12 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 shadow-2xl transition-all duration-500"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        <p className="text-lg text-center mt-4 text-gray-800 dark:text-gray-200">
          Languages & Frameworks I use. Click to learn more!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl shadow-md transition-all duration-300 
              hover:scale-105 hover:shadow-lg bg-white dark:bg-gray-800"
            >
              <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 mt-2 rounded-lg font-semibold transition-all duration-300 
                  text-white dark:text-gray-900 ${
                    darkMode
                      ? "bg-blue-400 hover:bg-blue-500"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
              >
                Learn {skill.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;

