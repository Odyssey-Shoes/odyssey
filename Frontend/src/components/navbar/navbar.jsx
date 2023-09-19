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

          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
            >
              Login
            </button>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex text-lg flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
