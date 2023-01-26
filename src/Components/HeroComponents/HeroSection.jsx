import React from "react";
import banner from "../../Assets/Images/banner.png";
import pat1 from "../../Assets/Images/pat-1.png";
import pat2 from "../../Assets/Images/pat-2.png";
import CardInfo from "./CardInfo";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="my-10">
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
          className="absolute w-28 top-12 left-1/2 translate-x-1/5"
          src={pat1}
          alt=""
        />
        <img
          className="absolute w-20 bottom-4 right-1/2 -translate-x-2/3"
          src={pat2}
          alt=""
        />
        <img
          className="absolute w-20 bottom-0 left-1/2 translate-x-1/2"
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
      <p className="text-[#262626] text-center mx-12 text-md mt-8 opacity-70">
        From France, Paris. I have rich experience in web design, also I am good
        at wordpress. I love to talk with you about out unique
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
        <FaGithub size="24px" className="hover:fill-[#29a587] cursor-pointer" />
      </div>
      <div className="flex justify-center mt-8">
        <button className="border-black border-2 py-2 px-4 rounded-full drop-shadow-lg bg-[#f0ebe3] opacity-80">
          DOWNLOAD CV
        </button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div className="mt-6 w-0.5 h-16 rounded bg-black"></div>
        <h3 className="font-semibold">MY SKILLS</h3>
      </div>
    </div>
  );
}

export default HeroSection;
