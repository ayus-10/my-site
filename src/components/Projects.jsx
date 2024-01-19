import React from "react";

const Projects = ({ darkTheme }) => {
  return (
    <div
      className={`min-h-screen w-screen ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="projects"
    >
      Projects
    </div>
  );
};

export default Projects;
