import React from "react";
import headerLogo from "/assets/headerLogo.svg"; //absolute path for the same image (root (udama) eke idan path eka)
//import HeaderLogoo from "../../../public/assets/headerLogo.svg"; //relative path for the same image (inna thana idan path eka)

const Navbar = () => {
  return (
    <header className="absolute">
      <div className="flex items-center justify-between py-4">
        <img
          className="pl-8 "
          src={headerLogo}
          style={{ height: "38px" }}
          alt=""
        />

        <ul className="flex items-center justify-between flex-1 gap-16 text-xl font-bold pl-80 nav-links max-lg:hidden">
          <li className="nav-link">Home</li>
          <li className="nav-link">Men</li>
          <li className="nav-link">Women</li>
          <li className="nav-link">Kids</li>
          <li className="nav-link">Sports</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
