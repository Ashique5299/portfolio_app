import React from "react";
import { HiOutlineMoon, HiMenuAlt4 } from "react-icons/hi";
import Logo from "../Assets/Images/logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center px-5 py-8 md:p-8">
      <div>
        <a href="/">
          <img className="w-32" src={Logo} alt="" />
        </a>
      </div>
      <div className="flex justify-between items-center space-x-8 px-3">
        <div>
          <a href="/">
            <span>
              <HiOutlineMoon className="h-6 w-6" />
            </span>
          </a>
        </div>
        <div>
          <a href="/">
            <HiMenuAlt4 className="h-6 w-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
