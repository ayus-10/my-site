import React, { useState } from "react";
import Carousel from "./Carousel";
import { RiArrowRightSFill } from "react-icons/ri";
import { BsFileEarmarkCode, BsLayoutTextWindow } from "react-icons/bs";

const ProjectBox = ({ darkTheme, title, description, images, links }) => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <div
      className={`relative w-[16rem] rounded-lg duration-300 ease-in-out hover:shadow-lg md:w-[20rem] xl:w-[24rem] ${darkTheme ? "bg-gray-850" : "bg-white"}`}
    >
      <div className="relative h-auto w-full">
        <Carousel images={images} darkTheme={darkTheme} />
      </div>
      <h1 className="px-4 pt-4 text-xl font-bold text-purple-600 md:text-2xl">
        {title}
      </h1>
      <p className="px-4 pb-6 pt-2 md:text-lg">{description}</p>
      <button
        className="group peer flex items-center px-4 pb-4 font-bold text-purple-600 hover:underline md:text-lg"
        onClick={toggleShowLinks}
      >
        <span>VIEW</span>
        <RiArrowRightSFill className="relative text-lg duration-500 ease-in-out group-hover:translate-x-1 md:text-xl" />
      </button>
      <div
        className={`absolute bottom-4 right-4 items-center gap-px rounded-lg bg-transparent text-white md:bottom-2 md:text-xl
        ${showLinks ? "flex" : "hidden"}`}
      >
        <a
          className="flex cursor-pointer items-center gap-1 rounded-l-lg bg-purple-600 px-2 duration-200 ease-in-out hover:bg-purple-700 md:px-4 md:py-2"
          href={links.code}
        >
          <BsFileEarmarkCode />
          <span>CODE</span>
        </a>
        <a
          className="flex cursor-pointer items-center gap-1 rounded-r-lg bg-purple-600 px-2 duration-200 ease-in-out hover:bg-purple-700 md:px-4 md:py-2"
          href={links.demo}
        >
          <BsLayoutTextWindow />
          <span>DEMO</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
