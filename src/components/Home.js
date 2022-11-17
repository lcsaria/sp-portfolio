import React from "react";
import About from "./About";
import Navbar from "./templates/Navbar";
import DarkLight from "./templates/DarkLight";
import Landing from "./Landing";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

function Home() {
  return (
    <div className="bg-base-100">
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default Home;
