import React, { useState } from "react";

function ResumeComponent() {
  const [tab, setTab] = useState(1);

  const changeTab = (id) => {
    if (tab === id) {
      setTab(false);
    } else {
      setTab(id);
    }
  };

  return (
    <div className="mt-20 mx-2">
      <div className="text-center">
        <div className="text-3xl md:text-6xl font-jost font-semibold">
          RESUME
        </div>
        <div className="mt-4">
          <span className="text-lg font-semibold text-[#30cda6]">MY</span>
          <span className="text-xl md:text-2xl font-caveat font-bold ml-4">
            Story
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-16">
        <div>
          <h2 className="text-center text-xl md:text-4xl font-semibold my-8">
            EDUCATION
          </h2>
          <div className="w-full h-0.5 bg-black" />
          <div>
            <h2 className="font-semibold text-lg md:text-2xl ml-4 my-6">
              CoderHouse Courses
            </h2>
            <div
              className={`ml-4 overflow-hidden transition-all duration-700 ${
                tab === 1 ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-caveat font-semibold text-2xl md:text-3xl">
                  Backend Programming
                </h3>
                <h5 className="font-semibold text-sm md:text-lg">2014-2016</h5>
              </div>
              <p className="text-[#262626] my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                at qui dolores, eaque ipsa minima.
              </p>
            </div>
            <div className="w-full h-0.5 bg-black relative">
              <div
                className="absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex justify-center items-center border-2 border-black text-2xl cursor-pointer"
                onClick={() => changeTab(1)}
              >
                {tab === 1 ? "-" : "+"}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg md:text-2xl ml-4 my-6">
              CoderHouse Courses
            </h2>
            <div
              className={`ml-4 overflow-hidden transition-all duration-700 ${
                tab === 2 ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-caveat font-semibold text-2xl md:text-3xl">
                  Backend Programming
                </h3>
                <h5 className="font-semibold text-sm md:text-lg">2014-2016</h5>
              </div>
              <p className="text-[#262626] my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                at qui dolores, eaque ipsa minima.
              </p>
            </div>
            <div className="w-full h-0.5 bg-black relative">
              <div
                className="absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex justify-center items-center border-2 border-black text-2xl cursor-pointer"
                onClick={() => changeTab(2)}
              >
                {tab === 2 ? "-" : "+"}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-center text-xl md:text-4xl font-semibold my-8">
            EXPERIENCE
          </h2>
          <div className="w-full h-0.5 bg-black" />
          <div>
            <h2 className="font-semibold text-lg md:text-2xl ml-4 my-6">
              CoderHouse Courses
            </h2>
            <div
              className={`ml-4 overflow-hidden transition-all duration-700 ${
                tab === 4 ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-caveat font-semibold text-2xl md:text-3xl">
                  Backend Programming
                </h3>
                <h5 className="font-semibold text-sm md:text-lg">2014-2016</h5>
              </div>
              <p className="text-[#262626] my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                at qui dolores, eaque ipsa minima.
              </p>
            </div>
            <div className="w-full h-0.5 bg-black relative">
              <div
                className="absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex justify-center items-center border-2 border-black text-2xl cursor-pointer"
                onClick={() => changeTab(4)}
              >
                {tab === 4 ? "-" : "+"}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg md:text-2xl ml-4 my-6">
              CoderHouse Courses
            </h2>
            <div
              className={`ml-4 overflow-hidden transition-all duration-700 ${
                tab === 3 ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-caveat font-semibold text-2xl md:text-3xl">
                  Backend Programming
                </h3>
                <h5 className="font-semibold text-sm md:text-lg">2014-2016</h5>
              </div>
              <p className="text-[#262626] my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                at qui dolores, eaque ipsa minima.
              </p>
            </div>
            <div className="w-full h-0.5 bg-black relative">
              <div
                className="absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex justify-center items-center border-2 border-black text-2xl cursor-pointer"
                onClick={() => changeTab(3)}
              >
                {tab === 3 ? "-" : "+"}
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-lg md:text-2xl ml-4 my-6">
              CoderHouse Courses
            </h2>
            <div
              className={`ml-4 overflow-hidden transition-all duration-700 ${
                tab === 5 ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="font-caveat font-semibold text-2xl md:text-3xl">
                  Backend Programming
                </h3>
                <h5 className="font-semibold text-sm md:text-lg">2014-2016</h5>
              </div>
              <p className="text-[#262626] my-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                at qui dolores, eaque ipsa minima.
              </p>
            </div>
            <div className="w-full h-0.5 bg-black relative">
              <div
                className="absolute right-0 z-10 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex justify-center items-center border-2 border-black text-2xl cursor-pointer"
                onClick={() => changeTab(5)}
              >
                {tab === 5 ? "-" : "+"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeComponent;
