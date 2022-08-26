import React from "react";
import { TypeAnimation } from "react-type-animation";

import "../styles/about.css";

function HeaderPage() {
  return (
    <div
      class="min-h-screen"
      style={{ background: "linear-gradient(90deg, #2f2bff 0%, #201db6 100%)" }}
    >
      <div className="mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div class="container px-5 p-5 lg:mt-48 md:mt-32 xs:text-center">
          <h1 class="text-6xl font-bold mb-2 text-emerald-200">
            Hey, I'm Lmarl
          </h1>
          <h3 class="text-2xl mb-8 text-black-300">
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
          </h3>

          <button class="bg-white font-bold rounded-full py-2 px-8 shadow-lg uppercase tracking-wider">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
