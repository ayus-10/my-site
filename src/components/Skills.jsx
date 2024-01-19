import React, { useRef } from "react";
import { skillItems } from "../data/SkillItems.jsx";

const Skills = ({ darkTheme }) => {
  const itemsRef = useRef();

  const handleHover = (id, color) => {
    const items = itemsRef.current;
    const item = items.querySelector(`#${id}`);
    item.style.color = color;
    if (Array.from(item.classList).includes("animate-shake")) {
      item.classList.remove("animate-shake");
    } else {
      item.classList.add("animate-shake");
    }
  };

  return (
    <div
      className={`min-h-screen w-screen ${darkTheme ? "bg-gray-900" : "bg-gray-100"}`}
      id="skills"
    >
      <div className="px-4 py-12">
        <h1
          className={`text-center text-3xl font-bold md:my-2 md:text-5xl ${darkTheme ? "text-purple-500" : "text-purple-600"}`}
        >
          Which tools can I work with?
        </h1>
        <div
          className="mx-auto grid max-w-[1280px] grid-cols-2 gap-12 py-16 md:grid-cols-3 md:py-24 lg:grid-cols-4"
          ref={itemsRef}
        >
          {skillItems.map((item, index) => {
            const id = `item${index}`;
            return (
              <div
                id={id}
                key={index}
                className={`flex flex-col items-center justify-center ${darkTheme ? "text-gray-300" : "text-gray-500"}`}
                onMouseOver={() => handleHover(id, item.color)}
                onMouseOut={() => handleHover(id, null)}
              >
                <div className="text-8xl md:text-9xl">{item.image}</div>
                <span className="cursor-default text-lg md:text-3xl md:font-bold">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
