import React from "react";
import headerLogo from "/assets/headerLogo.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img class="h-12 mr-2" src={headerLogo} alt="logo" />
          </div>
          <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl mt-5 mb-10 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Enter your email to register
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-6 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required=""
                  ></input>
                </div>

                <button
                  type="submit"
                  class="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Continue
                </button>
                <p class="text-sm font-light text-gray-500 pb-5">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    class="font-medium text-primary-600 hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
