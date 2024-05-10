import LinkButton from "../LinkButton";

export default function Contact() {
  return (
    <section
      className="w-screen h-screen px-12 py-8 max-w-[1200px] mx-auto"
      id="contact-section"
    >
      <h3 className="md:text-xl font-semibold text-lg text-my-red">
        Hey there, this is
      </h3>
      <h1 className="font-bold md:text-7xl mb-2 text-5xl text-my-white">
        Aayush Upreti
      </h1>
      <h2 className="font-bold md:text-5xl mb-2 text-5xl text-my-silver">
        A full-stack web developer
      </h2>
      <p className="text-my-silver my-8 md:text-lg max-w-[600px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed, odio
        distinctio error ex repellat repellendus quasi velit provident deserunt,
        facilis repudiandae vero assumenda? Aliquid quos eum quaerat consectetur
        animi?
      </p>
      <LinkButton text="Say hi!" url="#contact-section" />
    </section>
  );
}
