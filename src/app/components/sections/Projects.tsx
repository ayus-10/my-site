import ProjectItem from "../ProjectItem";
import { projectsList } from "./data/ProjectsData";

export default function Projects() {
  return (
    <section
      className="mx-auto min-h-screen w-screen max-w-[1200px] px-6 pt-[6rem]"
      id="projects-section"
    >
      <h1 className="mb-2 text-2xl font-semibold text-my-red md:mb-4 md:text-3xl">
        Projects
      </h1>
      <div className="flex flex-col items-center gap-12">
        {projectsList.map((item, index) => (
          <ProjectItem
            key={item.id}
            align={(index + 1) % 2 == 0 ? "left" : "right"}
            index={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
