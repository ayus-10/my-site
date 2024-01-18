import React from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const ScrollTop = () => {
  return (
    <Link
      className="fixed bottom-[4vh] right-[2vw] cursor-pointer rounded-full bg-purple-600 text-5xl hover:bg-purple-700 md:text-6xl"
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
