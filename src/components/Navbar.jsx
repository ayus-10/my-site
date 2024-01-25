import React from "react";
import { Link } from "react-scroll";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";

const Navbar = ({ changeTheme, darkTheme }) => {
  const navLinks = ["skills", "projects", "contact"];

  return (
    <nav
      className={`relative z-10 flex h-[3.25rem] w-screen justify-center px-4 py-2 font-light ${darkTheme ? "bg-gray-850" : "bg-gray-100"}`}
    >
      <button
        className="absolute left-[2vw] top-[calc(3.25rem+2vw)] flex rounded-full bg-purple-600 p-2 text-3xl text-white md:left-1 md:top-1/2 md:-translate-y-1/2"
        onClick={changeTheme}
      >
        {darkTheme ? <IoIosSunny /> : <IoMoon />}
      </button>
      <ul className="flex w-full justify-between px-4 sm:text-lg md:w-auto md:justify-center md:gap-8 md:px-0 md:text-xl">
        {navLinks.map((link, index) => (
          <li key={index} className="group">
            <div className="invisible mx-auto h-2 w-2 rounded-full bg-purple-600 group-hover:visible"></div>
            <Link
              className="cursor-pointer group-hover:text-purple-600"
              to={link}
              spy={true}
              smooth={true}
              duration={500}
            >
              {link.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
