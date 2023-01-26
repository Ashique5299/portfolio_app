import React, { Fragment } from "react";
import PortfolioCardComponent from "./ProtfolioComponent/PortfolioCardComponent";
import allData from "../JsonData.json";
import TestimonialSliderComponent from "./TestimonialComponent/TestimonialSliderComponent";

function Ashiq() {
  return (
    <Fragment>
      {/* <div>
        <h1 className="Portfolio_header text-center text-5xl font-semibold">
          PORTFOLIO
        </h1>
        <h3 className="font-jost text-center  ">
          <span className="text-2xl text-primary">my</span>
          <span className="font-caveat text-4xl ml-2">Cases</span>
        </h3>
      </div>

      <div className="flex flex-wrap mx-20 mt-10">
        {allData.map((item) => (
          <div className="w-1/3 p-2" key={item.id}>
            <PortfolioCardComponent item={item} />
          </div>
        ))}
      </div>

      <div>
        <TestimonialSection />
      </div> */}
      <div className="m-10">
        <TestimonialSliderComponent />
      </div>
    </Fragment>
  );
}

export default Ashiq;
