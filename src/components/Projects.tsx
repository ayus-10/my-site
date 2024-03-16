import ProjectBox from "./ProjectBox";
import { projectItems } from "../data/ProjectItems";

const Projects = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <div
      className={`flex min-h-screen w-screen flex-col ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="projects"
    >
      <div className="px-4 pb-4 pt-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Some of my curated works!
        </h1>
      </div>
      <div className="flex grow flex-col justify-center">
        <div className="flex flex-col flex-wrap items-center justify-evenly gap-4 px-4 pb-12 pt-4 md:flex-row md:gap-12">
          {projectItems.map((item, index) => (
            <ProjectBox
              key={index}
              darkTheme={darkTheme}
              title={item.title}
              description={item.description}
              images={item.images}
              links={item.links}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
