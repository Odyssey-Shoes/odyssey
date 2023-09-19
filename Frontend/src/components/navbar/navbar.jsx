import React from "react";
import headerLogo from "/assets/headerLogo.svg"; //absolute path for the same image (root (udama) eke idan path eka)
//import HeaderLogoo from "../../../public/assets/headerLogo.svg"; //relative path for the same image (inna thana idan path eka)

const Navbar = () => {
  return (
    <header>
      <nav class="bg-white  fixed w-full z-20 top-10 left-0 border-b border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <img src={headerLogo} class="h-8 mr-3" alt="Logo"></img>
          </a>


        <ul className="flex items-center justify-between flex-1 gap-16 text-xl font-bold pl-80 nav-links max-lg:hidden">
          <a href="/"><li className="nav-link">Home</li></a>
          <a href="/men"><li className="nav-link">Men</li></a>
          <a href="/women"><li className="nav-link">Women</li></a>
          <a href="/kids"><li className="nav-link">Kids</li></a>
          <a href="/sports"><li className="nav-link">Sports</li></a>
        </ul>
      </div>
      </nav>

    </header>
  );
};

export default Navbar;
