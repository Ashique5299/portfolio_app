import React from "react";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function HeaderButtonSection({ menuOpen }) {
  return (
    <div
      className={`absolute top-0 right-0 h-screen transition-all duration-700 ${
        menuOpen ? "w-[275px] md:w-[450px]" : "w-0"
      } bg-white z-20`}
    >
      <div className="flex flex-col justify-center h-full text-left">
        <div className="relative flex flex-col space-y-4 ml-10 md:ml-20 pl-8 py-4 md:pl-16 border-l-2 border-black">
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer ">
            HOME
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            SERVICES
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            SKILLS
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            WORKS
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            RESUME
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            TESTIMONIAL
          </h2>
          <h2 className="text-2xl font-semibold hover:text-[#29a587] cursor-pointer">
            CONTACT
          </h2>
          <div className="flex space-x-4">
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
        </div>
      </div>
    </div>
  );
}

export default HeaderButtonSection;
