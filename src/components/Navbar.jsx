import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navLinks = ["skills", "projects", "contact"];

  return (
    <nav className="flex w-screen justify-center bg-gray-100 px-4 py-2 font-light">
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
