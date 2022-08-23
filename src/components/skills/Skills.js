import React from "react";
import "../../styles/skills.css";
import Skillset from "./Skillset";

function Skills() {
  return (
    <div className="p-5 bg-blue-500 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="container py-3">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-7xl mx-auto px-3 sm:px-7 lg:px-8 sm:static">
              <h1 className="txt-right text-4xl font font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
                SKILLS
              </h1>
              <Skillset />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
