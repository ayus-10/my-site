import React from "react";
import Carousel from "./Carousel";
import { RiArrowRightSFill } from "react-icons/ri";

const ProjectBox = ({ darkTheme, title, description, images }) => {
  return (
    <div
      className={`w-72 rounded-lg duration-300 ease-in-out hover:shadow-lg md:w-96 ${darkTheme ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="relative h-auto w-full">
        <Carousel images={images} darkTheme={darkTheme} />
      </div>
      <h1
        className={`px-4 pt-4 text-xl font-bold md:text-2xl ${darkTheme ? "text-purple-500" : "text-purple-600"}`}
      >
        {title}
      </h1>
      <p className="px-4 md:text-lg">{description}</p>
      <button
        className={`group flex items-center px-4 pb-4 font-bold hover:underline md:text-lg ${darkTheme ? "text-purple-500" : "text-purple-600"}`}
      >
        <span>VIEW</span>
        <RiArrowRightSFill className="relative text-lg duration-500 ease-in-out group-hover:translate-x-1 md:text-xl" />
      </button>
    </div>
  );
};

export default ProjectBox;
