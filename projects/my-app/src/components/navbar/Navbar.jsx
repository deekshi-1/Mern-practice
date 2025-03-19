import React from "react";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-3 border-white border-b-indigo-500 sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5 ">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center p-2 sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMdMenu />
        </button>

        <div
          className={`${
            isOpen ? "absolute top-full left-0 w-full bg-white shadow-lg" : "hidden"
          } sm:block sm:relative sm:top-0 sm:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col sm:flex-row sm:space-x-5 rtl:space-x-reverse p-4 sm:p-0 mt-4 sm:mt-0 border border-gray-100 sm:border-0 rounded-lg bg-gray-50 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">
            <li className="p-1">Home</li>
            <li className="p-1">About</li>
            <li className="p-1">Projects</li>
            <li className="p-1">Contact</li>
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
