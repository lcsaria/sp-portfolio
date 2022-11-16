import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Lmarl, 25, M, software enginner from General Trias, Cavite.
          Studied at Cavite State University, graduated with a degree of
          Bachelor of Science in Information Technology. I'm passionate to to
          begin my career in a high-level professional environment.
        </p>

        <br />

        <p className="text-xl">
          In the span of 6 years in exposure, from college to work, I learned
          C++, Java, SQL, PHP, C# (Unity) during college and I'm interested in
          front-end development with HTML, CSS, JavaScript, ReactJS,
          TailwindCSS, Bootstrap. At this moment, I studied SpringBoot, and
          other framework in order to be full-stack software Engineer
        </p>
      </div>
    </div>
  );
};

export default About;
