import LinkButton from "../LinkButton";

export default function Projects() {
  return (
    <section
      className="mx-auto h-screen w-screen max-w-[1200px] px-12 py-8"
      id="projects-section"
    >
      <h3 className="text-lg font-semibold text-my-red md:text-xl">
        Hey there, this is
      </h3>
      <h1 className="mb-2 text-5xl font-bold text-my-white md:text-7xl">
        Aayush Upreti
      </h1>
      <h2 className="mb-2 text-5xl font-bold text-my-silver md:text-5xl">
        A full-stack web developer
      </h2>
      <p className="my-8 max-w-[600px] text-my-silver md:text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed, odio
        distinctio error ex repellat repellendus quasi velit provident deserunt,
        facilis repudiandae vero assumenda? Aliquid quos eum quaerat consectetur
        animi?
      </p>
      <LinkButton text="Say hi!" url="#contact-section" />
    </section>
  );
}
