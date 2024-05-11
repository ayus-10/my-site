import ScrollButton from "../ScrollButton";

export default function Hero() {
  return (
    <section
      className="mx-auto -mt-[5.875rem] flex h-screen w-screen max-w-[1200px] items-center"
      id="hero-section"
    >
      <div className="px-12 py-8">
        <h3 className="text-lg font-semibold text-my-red md:text-xl">
          Hey there, this is
        </h3>
        <h1 className="text-4xl font-bold text-my-white md:mb-2 md:text-7xl">
          Aayush Upreti
        </h1>
        <h2 className="text-4xl font-bold text-my-silver md:text-5xl">
          A full-stack web developer
        </h2>
        <p className="my-6 max-w-[600px] text-my-silver md:my-8 md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In sed, odio
          distinctio error ex repellat repellendus quasi velit provident
          deserunt, facilis repudiandae vero assumenda? Aliquid quos eum quaerat
          consectetur animi?
        </p>
        <ScrollButton text="Say hello!" target="contact-section" />
      </div>
    </section>
  );
}
