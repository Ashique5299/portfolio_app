import React, { Fragment } from "react";
import banner from "../../Assets/Images/banner.png";
import pat1 from "../../Assets/Images/pat-1.png";
import pat2 from "../../Assets/Images/pat-2.png";
import CardInfo from "./CardInfo";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <Fragment>
      <div className="my-10 md:hidden dark:text-white">
        <div className="text-center">
          <h4 className="text-sm font-semibold">
            HELLO, <span className="text-[#29a587]">MY NAME IS</span>{" "}
          </h4>
          <h1 className="text-4xl font-semibold">
            <span className="text-[#29a587] text-stroke">ZOE</span>{" "}
            <span className="text-white text-stroke">MILLER</span>
          </h1>
          <h4 className="text-sm font-semibold">
            I AM{" "}
            <span className="font-caveat font-semibold text-2xl">
              Web Developer
            </span>
          </h4>
        </div>
        <div className="relative h-80">
          <img
            className="absolute w-28 top-12 left-1/2 translate-x-1/5 dark:invert"
            src={pat1}
            alt=""
          />
          <img
            className="absolute w-20 bottom-4 right-1/2 -translate-x-2/3 dark:invert"
            src={pat2}
            alt=""
          />
          <img
            className="absolute w-20 bottom-0 left-1/2 translate-x-1/2 dark:invert"
            src={pat2}
            alt=""
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#29a587] w-60 h-60 rounded-full" />
          <img
            className="absolute bottom-0 w-60 left-1/2 transform -translate-x-1/2 rounded-b-full"
            src={banner}
            alt=""
          />
          <CardInfo
            className="absolute bottom-16 right-1/2 -translate-x-16 scale-75"
            number={12}
            icon={"+"}
            text_upper={"YEARS OF"}
            text_lower={"EXPERIENCE"}
          />
          <CardInfo
            className="absolute bottom-24 left-1/2 translate-x-20 scale-75"
            number={330}
            icon={""}
            text_upper={"YEARS OF"}
            text_lower={"EXPERIENCE"}
          />
        </div>
        <p className="text-[#262626] dark:text-white text-center mx-12 text-md mt-8 opacity-70">
          From France, Paris. I have rich experience in web design, also I am
          good at wordpress. I love to talk with you about out unique
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <FaTwitter
            size="24px"
            className="hover:fill-[#29a587] cursor-pointer"
          />
          <FaFacebook
            size="24px"
            className="hover:fill-[#29a587] cursor-pointer"
          />
          <FaGithub
            size="24px"
            className="hover:fill-[#29a587] cursor-pointer"
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="border-black dark:border-white border-2 py-2 px-4 rounded-full drop-shadow-lg bg-[#f0ebe3] dark:bg-[#222831] opacity-80">
            DOWNLOAD CV
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="mt-6 w-0.5 h-16 rounded bg-black dark:bg-white"></div>
          <h3 className="font-semibold">MY SKILLS</h3>
        </div>
      </div>
      <div className="hidden dark:text-white md:grid md:grid-cols-2">
        <div>
          <div className="text-left">
            <h4 className="text-lg font-semibold">
              HELLO, <span className="text-[#29a587]">MY NAME IS</span>{" "}
            </h4>
            <h1 className="text-8xl font-semibold mt-4">
              <span className="text-[#29a587] text-stroke">ZOE</span>{" "}
              <span className="text-white text-stroke">MILLER</span>
            </h1>
            <h4 className="text-lg font-semibold mt-4">
              I AM{" "}
              <span className="font-caveat font-semibold text-4xl">
                Web Developer
              </span>
            </h4>
          </div>
          <p className="text-[#262626] dark:text-white text-left text-md mt-8 mr-2 opacity-70 text-lg z-10">
            From France, Paris. I have rich experience in web design, also I am
            good at wordpress. I love to talk with you about out unique
          </p>
          <div className="flex justify-start space-x-4 mt-8">
            <FaTwitter
              size="24px"
              className="hover:fill-[#29a587] cursor-pointer"
            />
            <FaFacebook
              size="24px"
              className="hover:fill-[#29a587] cursor-pointer"
            />
            <FaGithub
              size="24px"
              className="hover:fill-[#29a587] cursor-pointer"
            />
          </div>
          <div className="flex justify-start mt-8">
            <button className="border-black dark:border-white border-2 py-4 px-8 rounded-full drop-shadow-lg bg-[#f0ebe3] dark:bg-[#222831] opacity-80">
              DOWNLOAD CV
            </button>
            <div className="flex items-center space-x-4">
              <div className="h-0.5 w-16 rounded bg-black dark:bg-white"></div>
              <h3 className="font-semibold">MY SKILLS</h3>
            </div>
          </div>
        </div>
        <div className="relative h-[500px]">
          <img
            className="absolute w-48 -top-20 right-0 dark:invert"
            src={pat1}
            alt=""
          />
          <img
            className="absolute w-40 bottom-20 -left-20 dark:invert"
            src={pat2}
            alt=""
          />
          <img
            className="absolute w-40 bottom-0 right-0 dark:invert"
            src={pat2}
            alt=""
          />
          <div className="absolute bottom-0 left-0 bg-[#29a587] w-[580px] h-[580px] rounded-full" />
          <img
            className="absolute bottom-0 left-0 max-w-[580px] w-[580px] h-[675px] rounded-b-full"
            src={banner}
            alt=""
          />
          <CardInfo
            className="absolute bottom-16 right-1/2 -translate-x-16 scale-[1.5]"
            number={12}
            icon={"+"}
            text_upper={"YEARS OF"}
            text_lower={"EXPERIENCE"}
          />
          <CardInfo
            className="absolute bottom-24 left-1/2 translate-x-20  scale-[1.5]"
            number={330}
            icon={""}
            text_upper={"YEARS OF"}
            text_lower={"EXPERIENCE"}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default HeroSection;
