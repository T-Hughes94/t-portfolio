import React from 'react';

const Education = () => {
  return (
    <div id="education" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] dark:text-white">Education</h1>
      
      <div className="flex flex-col items-center mt-8">
        {/* Certificate Photo */}
        <img
          src="/certificate.jpg" // ✅ Reference public folder directly
          alt="Certificate"
          className="w-auto h-72 object-cover rounded-lg shadow-lg hover:scale-110 ease-in duration-200"
        />
        
        {/* Education Details */}
        <p className="text-center text-gray-700 dark:text-gray-300 mt-4">
          Certificate of Completion <br /> 
          Flatiron School, Denver, 2023
        </p>
      </div>
    </div>
  );
};

export default Education;
