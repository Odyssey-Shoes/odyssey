import React from "react";
import headerLogo from "/assets/headerLogo.svg"; //absolute path for the same image (root (udama) eke idan path eka)
import HeaderLogoo from "../../../public/assets/headerLogo.svg"; //relative path for the same image (inna thana idan path eka)

const Navbar = () => {
  return (
    <header>
      <div>
        <img src={headerLogo} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
