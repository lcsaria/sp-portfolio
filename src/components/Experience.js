import React from "react";
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import js from "../assets/javascript.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import springboot from "../assets/springboot.svg";
import java from "../assets/java.svg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      icon: html,
      title: "HTML",
      style: "shadow-orange-300 bg-orange-500",
    },
    {
      id: 2,
      icon: css,
      title: "CSS",
      style: "shadow-blue-300 bg-blue-500",
    },
    {
      id: 3,
      icon: js,
      title: "Javascript",
      style: "shadow-gray-400 bg-yellow-300",
    },
    {
      id: 4,
      icon: react,
      title: "React",
      style: "shadow-blue-500 bg-blue-300",
    },
    {
      id: 5,
      icon: spring,
      title: "Spring",
      style: "shadow-green-500 bg-green-300",
    },
    {
      id: 6,
      icon: springboot,
      title: "Springboot",
      style: "shadow-green-500 bg-green-300",
    },
    {
      id: 7,
      icon: java,
      title: "Java",
      style: "shadow-gray-500 bg-orange-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`flex shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={icon} alt="" className="w-10 mx-4" />
              <p className="mt-2 font-semibold text-base text-black">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
