import ProjectBox from "./ProjectBox";
import { projectItems } from "../data/ProjectItems";

const Projects = ({ darkTheme }: { darkTheme: boolean }) => {
  return (
    <div
      className={`flex min-h-screen w-screen flex-col ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="projects"
    >
      <div className="px-4 py-12">
        <h1 className="text-center text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
          Some of my curated works!
        </h1>
      </div>
      <div className="flex grow flex-col justify-center">
        <div className="flex flex-col items-center gap-4 p-4 md:-mt-20 md:grid md:grid-cols-2 md:place-items-center lg:grid-cols-3">
          {projectItems.map((item, index) => (
            <ProjectBox
              key={index}
              darkTheme={darkTheme}
              title={item.title}
              description={item.description}
              images={item.images}
              links={item.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
