import React, { useState } from "react";
import List from "./data";

function Skillset() {
  const [showModal, setShowModal] = useState(false);

  const btnShow = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <div className="mt-5 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 items-center">
      {List.map((data) => {
        return (
          <div>
            <button
              key={data.key}
              className="w-full p-4 text-uppercase inline-flex items-center btn-wide py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg rounded-md mb-2"
            >
              <div className="ml-5 text-center">
                <i className={data.icon} />
                <span>{data.skillName}</span>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Skillset;
