import React from "react";
import Slider from "react-slick";
import pat2 from "../../Assets/Images/pat-2.png";
import { BsArrowRightShort } from "react-icons/bs";

function MyServices() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:text-white">
      <div className="text-center my-10">
        <div className="text-3xl md:text-6xl font-jost font-semibold">
          WHAT I DO
        </div>
        <div className="mt-4">
          <span className="text-lg font-semibold text-[#30cda6]">MY</span>
          <span className="text-lg md:text-2xl font-caveat font-bold ml-4">
            SERVICES
          </span>
        </div>
      </div>
      <Slider {...settings} className="mx-4">
        <div className="p-4">
          <div className="relative w-full bg-white dark:bg-[#1d222a]  p-6 rounded-md overflow-hidden gap-5">
            <h4 className="font-semibold tex-">WEB DEVELOPMENT</h4>
            <div>
              <h2 className="font-bold mt-10 text-2xl">Web Design & Logo</h2>
              <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                Web designers craft the overall vision & plan for website
                layout. Professional logo developement: Business, Company, or
                Personal
              </p>
            </div>
            <div className="flex mt-20 space-x-2">
              <h4 className="font-semibold">See Pricing</h4>
              <BsArrowRightShort
                size="24px"
                className="fill-[#29a587] cursor-pointer"
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
          <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden gap-5">
            <h4 className="font-semibold tex-">WEB DEVELOPMENT</h4>
            <div>
              <h2 className="font-bold mt-10 text-2xl">Web Design & Logo</h2>
              <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                Web designers craft the overall vision & plan for website
                layout. Professional logo developement: Business, Company, or
                Personal
              </p>
            </div>
            <div className="flex mt-20 space-x-2">
              <h4 className="font-semibold">See Pricing</h4>
              <BsArrowRightShort
                size="24px"
                className="fill-[#29a587] cursor-pointer"
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
          <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden gap-5">
            <h4 className="font-semibold tex-">WEB DEVELOPMENT</h4>
            <div>
              <h2 className="font-bold mt-10 text-2xl">Web Design & Logo</h2>
              <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                Web designers craft the overall vision & plan for website
                layout. Professional logo developement: Business, Company, or
                Personal
              </p>
            </div>
            <div className="flex mt-20 space-x-2">
              <h4 className="font-semibold">See Pricing</h4>
              <BsArrowRightShort
                size="24px"
                className="fill-[#29a587] cursor-pointer"
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
          <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden gap-5">
            <h4 className="font-semibold tex-">WEB DEVELOPMENT</h4>
            <div>
              <h2 className="font-bold mt-10 text-2xl">Web Design & Logo</h2>
              <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                Web designers craft the overall vision & plan for website
                layout. Professional logo developement: Business, Company, or
                Personal
              </p>
            </div>
            <div className="flex mt-20 space-x-2">
              <h4 className="font-semibold">See Pricing</h4>
              <BsArrowRightShort
                size="24px"
                className="fill-[#29a587] cursor-pointer"
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
          <div className="relative w-full bg-white dark:bg-[#1d222a] p-6 rounded-md overflow-hidden gap-5">
            <h4 className="font-semibold tex-">WEB DEVELOPMENT</h4>
            <div>
              <h2 className="font-bold mt-10 text-2xl">Web Design & Logo</h2>
              <p className="text-[#262626] dark:text-white opacity-70 mt-4">
                Web designers craft the overall vision & plan for website
                layout. Professional logo developement: Business, Company, or
                Personal
              </p>
            </div>
            <div className="flex mt-20 space-x-2">
              <h4 className="font-semibold">See Pricing</h4>
              <BsArrowRightShort
                size="24px"
                className="fill-[#29a587] cursor-pointer"
              />
            </div>
            <img
              className="absolute w-24 h-24 -bottom-4 -right-4 dark:invert"
              src={pat2}
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default MyServices;
