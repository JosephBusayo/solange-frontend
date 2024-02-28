import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function Homme() {
  return (
    <div className="flex justify-evenly">
      <div>
        <img className="w-40" src="Solangeweb-br.png" />
      </div>
      <div className="flex">
        <a
          href="#"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center"
        >
          Home
        </a>
        <a
          href="#"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center"
        >
          About Us
        </a>
        <a
          href="#"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center"
        >
          Shop
        </a>
        <a
          href="#"
          className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center"
        >
          Contact
        </a>
      </div>
      <div className="flex">
        <CiSearch size={30} />
        <AiOutlineUser size={30} />
      </div>
    </div>
  );
}

export default Homme;
