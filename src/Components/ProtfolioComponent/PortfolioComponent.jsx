import React from "react";
import pat2 from "../../Assets/Images/pat-2.png";
import work7 from "../../Assets/Images/work7.jpg";
import work1 from "../../Assets/Images/work1.jpeg";
import work2 from "../../Assets/Images/work4.jpeg";
import work3 from "../../Assets/Images/work5.jpeg";
import work4 from "../../Assets/Images/work6.jpeg";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";

function PortfolioComponent() {
  const [tab, setTab] = useState(1);

  const changeTab = (id) => {
    setTab(id);
  };

  return (
    <div className="mt-20 dark:text-white">
      <div className="text-center mb-10">
        <div className="text-3xl md:text-6xl font-jost font-semibold">
          PORTFOLIO
        </div>
        <div className="mt-4">
          <span className="text-lg font-semibold text-[#30cda6]">MY</span>
          <span className="text-xl md:text-2xl font-caveat font-bold ml-4">
            Projects
          </span>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <h3
          className={`text-sm font-bold cursor-pointer ${
            tab === 1 ? "text-[#30cda6] underline" : ""
          }`}
          onClick={() => changeTab(1)}
        >
          ALL
        </h3>
        <h3
          className={`text-sm font-bold cursor-pointer ${
            tab === 2 ? "text-[#30cda6] underline" : ""
          }`}
          onClick={() => changeTab(2)}
        >
          UI UX DESIGN
        </h3>
        <h3
          className={`text-sm font-bold cursor-pointer ${
            tab === 3 ? "text-[#30cda6] underline" : ""
          }`}
          onClick={() => changeTab(3)}
        >
          PHOTOGRAPHY
        </h3>
        <h3
          className={`text-sm font-bold cursor-pointer ${
            tab === 4 ? "text-[#30cda6] underline" : ""
          }`}
          onClick={() => changeTab(4)}
        >
          DEVELOPMENT
        </h3>
        <h3
          className={`text-sm font-bold cursor-pointer ${
            tab === 5 ? "text-[#30cda6] underline" : ""
          }`}
          onClick={() => changeTab(5)}
        >
          BRANDING
        </h3>
      </div>
      {tab === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work1} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {tab === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work2} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {tab === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work3} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {tab === 5 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52 w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work4} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
          <div className="p-4">
            <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden">
              <div className="h-52  w-full overflow-hidden flex justify-center items-center rounded-md">
                <img src={work7} alt="" />
              </div>
              <h4 className="font-semibold text-sm mt-6 text-[#29a587]">
                DEVELOPMENT
              </h4>
              <div>
                <h2 className="font-bold mt-2 text-2xl">Explore</h2>
                <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                  Web designers craft the overall vision & plan for website
                  layout. Professional logo developement: Business, Company, or
                  Personal
                </p>
              </div>
              <div className="flex mt-20 group space-x-2 cursor-pointer">
                <h4 className="font-semibold">View Project</h4>
                <BsArrowRightShort
                  size="24px"
                  className=" fill-[#29a587] cursor-pointer group-hover:translate-x-2"
                />
              </div>
              <img
                className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
                src={pat2}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button className="border-black dark:border-white border-2 py-2 px-4 rounded-full drop-shadow-lg bg-white dark:bg-[#1d222a] opacity-80">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default PortfolioComponent;
