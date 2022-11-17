import React, { useState, useEffect } from "react";

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });

  return (
    <div
      name="about"
      id="about"
      className="hero w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white p-4"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className={width < 1300 ? "flex gap-3" : "grid gap-3"}>
          <p className="w-full text-sm sm:text-xl  text-justify">
            I'm Lmarl, 25, M, software enginner from General Trias, Cavite.
            Studied at Cavite State University, graduated with a degree of
            Bachelor of Science in Information Technology. I'm passionate to to
            begin my career in a high-level professional environment.
          </p>
          <br />
          <p className="w-full text-sm sm:text-xl text-justify">
            In the span of 6 years in exposure in IT, I learned C++, Java, SQL,
            PHP, C# (Unity) during college and in front-end development with
            HTML, CSS, JavaScript, ReactJS, TailwindCSS, Bootstrap. Also I
            studied SpringBoot, and other framework in order to be full-stack
            software engineer
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
