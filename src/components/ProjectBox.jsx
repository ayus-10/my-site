import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { RiArrowRightSFill } from "react-icons/ri";
import { BsFileEarmarkCode, BsLayoutTextWindow } from "react-icons/bs";

const ProjectBox = ({ darkTheme, title, description, images, links }) => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowLinks(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showLinks]);

  return (
    <div
      className={`h-full w-full max-w-[32rem] rounded-lg duration-300 ease-in-out hover:shadow-lg md:w-[80%] ${darkTheme ? "bg-gray-850" : "bg-white"}`}
    >
      <div className="relative h-auto w-full">
        <Carousel images={images} darkTheme={darkTheme} />
      </div>
      <h1 className="mx-4 mt-4 text-xl font-bold text-purple-600 md:text-2xl">
        {title}
      </h1>
      <p className="mx-4 mb-6 mt-2 md:text-lg">{description}</p>
      <button
        className="group mx-4 mb-4 flex text-purple-600 md:text-lg"
        onClick={toggleShowLinks}
      >
        <div
          className={`items-center py-1 font-bold group-hover:underline ${showLinks ? "hidden" : "flex"}`}
        >
          <span>VIEW</span>
          <RiArrowRightSFill className="relative text-lg duration-500 ease-in-out group-hover:translate-x-1 md:text-xl" />
        </div>
        <div
          className={`items-center gap-px rounded-lg bg-transparent text-white md:bottom-2 md:text-xl
        ${showLinks ? "flex" : "hidden"}`}
        >
          <a
            className="flex cursor-pointer items-center gap-1 rounded-l-lg bg-purple-600 px-2 py-1 duration-200 ease-in-out hover:bg-purple-700 md:px-4"
            href={links.code}
          >
            <BsFileEarmarkCode />
            <span>CODE</span>
          </a>
          <a
            className="flex cursor-pointer items-center gap-1 rounded-r-lg bg-purple-600 px-2 py-1 duration-200 ease-in-out hover:bg-purple-700 md:px-4"
            href={links.demo}
          >
            <BsLayoutTextWindow />
            <span>DEMO</span>
          </a>
        </div>
      </button>
    </div>
  );
};

export default ProjectBox;
