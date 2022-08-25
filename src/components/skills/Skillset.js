import React from "react";
import List from "./data";

function Skillset() {
  return (
    <div className="mt-5 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 text-uppercase">
      {List.map((data) => {
        return (
          <div
            key={data.key}
            className="inline-flex items-center px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg rounded-md sm:mr-3 mb-3 "
          >
            <i className={data.icon} />
            <p>{data.skillName}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Skillset;
