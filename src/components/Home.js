import React from "react";
import Navbar from "./templates/Navbar";

function Home() {
  const toAbout = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-base-100">
      {/*NAVBAR */}
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen" id="#home">
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="hidden lg:block rounded-lg shadow-2xl"
              alt="images"
            />
            <div>
              <h1 className="text-5xl font-bold text-primary">
                It's me, Lmarl
              </h1>
              <p className="text-xl py-6 text-secondary">
                Software Engineer with 2+ years of experience focused on
                front-end development. Currently, Jr. Java Developer who
                passionate in debugging and helping others especially in
                programming.
              </p>
              <button className="btn btn-primary" onClick={toAbout}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen" id="#about">
        <span className="text-primary">Lmarl</span>
      </div>
    </div>
  );
}

export default Home;
