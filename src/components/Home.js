import React, { useState, useEffect } from "react";
import HeaderPage from "./HeaderPage";
import About from "./about/About";
import Skills from "./skills/Skills";
import Navigation from "./templates/Navigation";

function Home() {
  const [stickyClass, setStickyClass] = useState("relative");

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50
        ? setStickyClass("sticky-top top-0 left-0 z-30")
        : setStickyClass("sticky-top top-0 left-0 z-30");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <>
      <div className={`h-16 w-full ${stickyClass}`}>
        <Navigation />
      </div>
      <div id="#">
        <HeaderPage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
    </>
  );
}

export default Home;
