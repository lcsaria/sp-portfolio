import React from "react";
import todoapp from "../assets/todoapp.png";
import bmical from "../assets/bmical.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todoapp,
      title: "Todo App",
      demo: "https://react-todo-app-nine-zeta.vercel.app/",
      code: "https://github.com/lcsaria/react-todo-app",
    },
    {
      id: 2,
      src: bmical,
      title: "BMI Calculator",
      demo: "https://bmi-calculator-lcs.vercel.app/",
      code: "https://github.com/lcsaria/bmi-calculator-lcs",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0">
          {portfolios.map(({ id, src, title, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="mt-3 flex flex-col items-center">{title}</div>
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="appearance-none w-1/2 display-none px-6 py-2 m-4 duration-200 hover:scale-105 hover:font-bold hover:font-xl hover:text-secondary"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="appearance-none w-1/2 display-none px-6 py-2 m-4 duration-200 hover:scale-105 hover:font-bold hover:font-xl hover:text-secondary"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
