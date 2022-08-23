import React from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/about.css";

function HeaderPage() {
  return (
    <div className="p-5 bg-blue-300 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 sm:static">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-6xl">
                Hey, I'm Lmarl
              </h1>
              <p className="mt-4 text-4xl xl:text-2xl text-gray-500">
                <TypeAnimation
                  sequence={[
                    "Programmer",
                    5000,
                    "Musician",
                    5000,
                    "Table Tennis Player",
                    5000,
                  ]}
                  wrapper="p"
                  cursor={true}
                  repeat={Infinity}
                />
              </p>
              <button className="flex items-center mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
