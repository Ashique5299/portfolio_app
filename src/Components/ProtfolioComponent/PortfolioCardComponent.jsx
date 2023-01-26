import React from "react";
import { FaArrowRight } from "react-icons/fa";

function PortfolioCardComponent({ item }) {
  function seeProjectDeatils() {
    //
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img
        src={item.projectImage}
        className="rounded-t-lg h-40 w-full object-cover"
        alt="card header"
      />
      <h1>{item.heading}</h1>
      <p>{item.description}</p>
      <div className=" mt-4">
        <button
          className="relative flex justify-center items-center"
          onClick={seeProjectDeatils}
        >
          View Project
          <div className="relative ml-2 hover:ml-7">
            <span>
              <FaArrowRight />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PortfolioCardComponent;
