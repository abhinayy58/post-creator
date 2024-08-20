import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-8">
      <nav className="bg-[#3795BD] border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img
              src="/post.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="text-white text-xl font-semibold whitespace-nowrap">
              Post Creator
            </span>
          </Link>

          <div
            className="justify-between items-center lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/allpost"
                  className="block py-2 pr-4 pl-3 text-white"
                >
                  All posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
