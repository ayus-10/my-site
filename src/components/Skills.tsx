import { useRef } from "react";
import { skillItems } from "../data/SkillItems.js";
import AnimateSlide from "./animation/AnimateSlide.js";
import { motion } from "framer-motion";

const Skills = ({ darkTheme }: { darkTheme: boolean }) => {
  const itemsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`flex min-h-screen w-screen ${darkTheme ? "bg-gray-850" : "bg-gray-100"}`}
      id="skills"
    >
      <div className="flex grow flex-col px-2 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Which tools can I work with?
        </h1>
        <section className="flex h-full flex-col justify-center px-4">
          <AnimateSlide direction={"down"}>
            <div
              className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              ref={itemsRef}
            >
              {skillItems.map((item, index) => {
                const animation = {
                  scale: 1.2,
                  transition: {
                    duration: 0,
                  },
                };
                return (
                  <motion.div
                    whileHover={animation}
                    whileTap={animation}
                    key={index}
                    className={`flex flex-col items-center justify-center rounded-lg p-4 duration-300 ease-in-out hover:bg-purple-600 hover:text-white md:py-8 ${darkTheme ? "text-gray-400" : "text-gray-500"}`}
                  >
                    <div className="text-5xl md:text-7xl">{item.image}</div>
                    <span className="cursor-default text-lg md:text-3xl md:font-bold">
                      {item.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </AnimateSlide>
        </section>
      </div>
    </div>
  );
};

export default Skills;
