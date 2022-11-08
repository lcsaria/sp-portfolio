import React from "react";
import Navbar from "./templates/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      {/*NAVBAR */}
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen"></div>
    </div>
  );
}

export default Home;
