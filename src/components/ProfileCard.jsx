import React, { useState } from "react";

// Sample components for demonstration
import BestPracticesArticle from '../article/BestPracticesArticle';
import ScalableMERNArticle from '../article/ScalableMERNArticle';
import SEOStrategiesArticle from '../article/SEOStrategiesArticle';
import WordPressSEOArticle from '../article/WordPressSEOArticle';

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState("Mern Stack Best Practices");

  // Object to map component names to actual components
  const componentsMap = {
    "Mern Stack Best Practices": <BestPracticesArticle />,
   "Scalable MERN Web Apps": <ScalableMERNArticle />,
   "Top SEO Strategies": <SEOStrategiesArticle />,
    "WordPress SEO": <WordPressSEOArticle />,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/4 p-5 fixed h-full">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          {Object.keys(componentsMap).map((name) => (
            <li
              key={name}
              className={`cursor-pointer p-3 rounded-lg ${
                activeComponent === name
                  ? "bg-blue-500"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveComponent(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-[25%] p-8 bg-gray-100">
        {componentsMap[activeComponent]}
      </div>
    </div>
  );
};

export default Sidebar;
