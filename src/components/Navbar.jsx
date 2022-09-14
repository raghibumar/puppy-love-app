import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  return (
    <>
      <header class="bg-white bg-gray-300 sticky top-0 left-0 right-0">
        <div class="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="md:flex md:items-center md:gap-12">
              <span class="block text-teal-600" href="/">
                <span class="sr-only">Home</span>
              </span>
            </div>

            <div class="hidden md:block">
              <nav aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">
                  Header navigation
                </h2>

                <ul class="flex items-center text-sm gap-6">
                  <li>
                    <span
                      class="text-gray-800 transition hover:text-gray-500/75 cursor-pointer text-xl"
                      onClick={() => nav("/")}
                    >
                      Home
                    </span>
                  </li>

                  <li>
                    <span
                      class="text-gray-800 transition hover:text-gray-500/75 cursor-pointer text-xl"
                      onClick={() => nav("/random")}
                    >
                      Puppy
                    </span>
                  </li>

                  <li>
                    <span
                      class="text-gray-800 transition hover:text-gray-500/75 cursor-pointer text-xl"
                      onClick={() => nav("/search")}
                    >
                      Search
                    </span>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="flex items-center gap-4">
              {/* <div class="sm:gap-4 sm:flex">
                                <span
                                    class="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                                    href="/"
                                >
                                    Login
                                </span>

                                <div class="hidden sm:flex">
                                    <span
                                        class="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                                        href="/"
                                    >
                                        Register
                                    </span>
                                </div>
                            </div> */}

              <div class="block md:hidden">
                <button class="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
