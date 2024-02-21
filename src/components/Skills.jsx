import React, { useRef } from "react";
import { skillItems } from "../data/SkillItems.jsx";

const Skills = ({ darkTheme }) => {
  const itemsRef = useRef();

  const handleHover = (id, color, altColor) => {
    const items = itemsRef.current;
    const item = items.querySelector(`#${id}`);

    if (darkTheme && altColor) {
      item.style.color = altColor;
    } else {
      item.style.color = color;
    }
  };

  return (
    <div
      className={`flex min-h-screen w-screen ${darkTheme ? "bg-gray-850" : "bg-gray-100"}`}
      id="skills"
    >
      <div className="flex grow flex-col justify-center px-4 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Which tools can I work with?
        </h1>
        <section>
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
                  className={`flex flex-col items-center justify-center rounded-lg ${darkTheme ? "text-gray-400" : "text-gray-500"}`}
                  onMouseOver={() => handleHover(id, item.color, item.altColor)}
                  onMouseOut={() => handleHover(id, null, null)}
                >
                  <div className="text-8xl md:text-9xl">{item.image}</div>
                  <span className="cursor-default text-lg md:text-3xl md:font-bold">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
