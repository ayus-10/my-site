import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const ScrollTop = ({ setVisibility }) => {
  return (
    <Link
      className={`fixed bottom-[4vh] right-[2vw] z-20 cursor-pointer rounded-full bg-purple-600 text-5xl duration-200 ease-in-out hover:bg-purple-700 md:text-6xl ${setVisibility ? "animate-fadeIn" : "animate-fadeOut"}`}
      to="home"
      spy={true}
      smooth={true}
      duration={500}
    >
      <MdKeyboardArrowUp className="text-white" />
    </Link>
  );
};

export default ScrollTop;
