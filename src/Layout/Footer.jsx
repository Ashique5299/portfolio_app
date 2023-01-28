import React from "react";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-10">
      <div className="mt-6 w-full h-0.5 rounded-full bg-[#262626] opacity-20"></div>
      <div className="flex flex-col space-y-4 mt-20 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="flex justify-center space-x-4">
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
        <h3 className="text-center font-semibold">
          2022 <span className="text-[#29a587]"> LUIQUE</span>, ALL RIGHTS
          RESERVERED
        </h3>
        <h3 className="text-center font-semibold">
          DEVELOPED BY <span className="text-[#29a587]"> BSLTHEMES</span>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
