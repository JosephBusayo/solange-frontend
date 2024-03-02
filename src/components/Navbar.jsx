import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";

export function Navbar() {
  return (
    <div>
      <nav className=" relative select-none bg-gray-50 lg:flex lg:items-stretch py-4 w-full shadow-md justify-between">
        <div className="flex flex-no-shrink h-12 ">
          <a
            href="#"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center"
          >
            <img className="w-44" src="Solangeweb-br.png" />
          </a>
          <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
            <svg
              className="fill-current font-semibold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className="fill-current font-semibold"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div className="">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto ">
            <Link
              to="/"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Home
            </Link>
            <a
              href="#"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              About Us
            </a>
            <a
              href="#"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Shop
            </a>
            <a
              href="#"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
        <div className=" px-4 flex gap-3">
          <div>
            <CiSearch size={30} />
          </div>
          <div>
            <Link to="/Signin">
              <AiOutlineUser size={30} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
