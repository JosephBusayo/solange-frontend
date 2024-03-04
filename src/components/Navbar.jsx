import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom/dist/umd/react-router-dom.development";
import SearchBar from "./Searchbar";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={`${styles.header} shadow-lg`}>
      <nav className={`${styles.navContainer}`}>
        <Link to="/">
          <a href="#" className="item-center pb-2">
            <img className="w-44 mb-2" src="Solangeweb-br.png" />
          </a>
        </Link>
        <ul className={`${styles.navMenu} ${toggle && styles.showMenu}`}>
          <li>
            <Link
              to="/"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              href="#shop"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal font-semibold no-underline flex items-center hover:text-gray-500"
            >
              Contact
            </Link>
          </li>

          <div className={`${styles.mobileSearchBar}`}>
            <SearchBar />
          </div>

          <button onClick={toggleHandler} className={`${styles.closeBtn}`}>
            <svg
              xmlns="http://www.w3.org/5000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </ul>
        <div className={`${styles.searchProfile}`}>
          <div className={`${styles.searchBar}`}>
            <SearchBar />
          </div>

          <Link to="/Signin">
            <AiOutlineUser size={30} />
          </Link>

          <button onClick={toggleHandler} className={`${styles.openBtn}`}>
            <svg
              xmlns="http://www.w3.org/5000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
