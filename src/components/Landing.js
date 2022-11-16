import React from "react";
import HeroImage from "../assets/HeroImage.png";
import { Link } from "react-scroll";

function Landing() {
  return (
    <div
      name="home"
      className="hero w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white p-3"
    >
      <div className="">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={HeroImage}
            className="hidden lg:block rounded-lg shadow-2xl"
            alt="images"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary">It's me, Lmarl</h1>
            <p className="text-xl py-6 text-secondary text-justify">
              Software Engineer with 2+ years of experience focused on front-end
              development. Currently, Jr. Java Developer who passionate in
              debugging and helping others especially in programming.
            </p>
            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="">
                  <i className="fa-solid fa-circle-arrow-right ml-2 group-hover:rotate-90 duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
