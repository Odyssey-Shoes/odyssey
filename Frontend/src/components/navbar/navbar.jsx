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
          <a href="/"><li className="nav-link">Home</li></a>
          <a href="/men"><li className="nav-link">Men</li></a>
          <a href="/women"><li className="nav-link">Women</li></a>
          <a href="/kids"><li className="nav-link">Kids</li></a>
          <a href="/sports"><li className="nav-link">Sports</li></a>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
