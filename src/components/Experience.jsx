import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext"; // Import Theme Context
import ExperienceItem from "./ExperienceItem";

// Experience Data
const data = [
  {
    year: "2024",
    title: "Kitchen Manager",
    company: "Puttery",
    duration: "Current",
    details:
      "Oversee day-to-day kitchen operations in multiple departments, including the line, prep kitchen, and dishwashing areas. Delegate tasks among staff to ensure productivity and proper sanitation when handling food products, while also maintaining a clean environment and equipment. Communicate effectively to avoid confusion and ensure everyone is on the same page throughout the working day. Collaborate with front-of-house staff and managers to create the best possible experience for guests.",
  },
  {
    year: "2021",
    title: "Sous Chef",
    company: "bartaco",
    duration: "2 years",
    details:
      "Developed new menu items that incorporated diverse cultural flavors, enhancing customer satisfaction. Managed a team of 10 cooks, improving kitchen efficiency through effective delegation and scheduling. Demonstrated best practices while training others to ensure consistent quality.",
  },
  {
    year: "2019",
    title: "Glazier",
    company: "Aurora Glazing Solutions",
    duration: "2 years",
    details:
      "Participated in the installation and customization of high-end retail storefronts across the United States. Conducted comprehensive on-site assessments and measurements before installing architectural metal and glass systems. Implemented strategic solutions to optimize the installation process. Collaborated on large-scale projects from conceptual stages through planning and execution, ensuring successful outcomes while meeting strict deadlines.",
  },
];

const Experience = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      id="experience"
      className={`max-w-[1040px] mx-auto md:pl-20 p-6 py-16 rounded-lg shadow-lg transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-100 text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-extrabold text-center tracking-wide drop-shadow-lg">
        Experience
      </h1>

      <div className="mt-8">
        {data.map((item, idx) => (
          <ExperienceItem
            key={idx}
            year={item.year}
            title={item.title}
            company={item.company}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
