import React from "react";

const SearchBar = () => {
  return (
    <div className="max-w-lg mx-auto">
      <form className="flex">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
          placeholder="Search..."
          type="search"
        />
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-[#b35348] rounded-r-lg border border-[#b35348]hover:bg-[#b33348] focus:ring-4 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
