import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = ({ darkTheme }) => {
  return (
    <div
      className={`min-h-screen w-screen ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="projects"
    >
      <div className="px-4 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Some of my select works!
        </h1>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-4 pb-24 md:flex-row">
        {Array.from({ length: 3 }).map(() => (
          <ProjectBox
            darkTheme={darkTheme}
            title={"Hello, world!"}
            description={
              "Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using."
            }
            images={[
              "https://images.unsplash.com/photo-1565118531796-763e5082d113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcwNTczNDI3Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcwNTczNDI3OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
              "https://images.unsplash.com/photo-1533119408463-b0f487583ff6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=720&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlfHx8fHx8MTcwNTczNDI4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1280",
            ]}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
