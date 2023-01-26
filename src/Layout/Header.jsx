import React from "react";
import { HiOutlineMoon, HiMenuAlt4 } from "react-icons/hi";
import Logo from "../Assets/Images/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center my-8 md:mx-8">
      <a href="/">
        <img className="w-24 md:w-32" src={Logo} alt="" />
      </a>
      <div className="flex justify-between items-center space-x-4 mx-3 md:space-x-8">
        <a href="/">
          <span>
            <HiOutlineMoon className="h-6 w-6" />
          </span>
        </a>
        <a href="/">
          <HiMenuAlt4 className="h-6 w-10" />
        </a>
      </div>
    </div>
  );
}

export default Header;
