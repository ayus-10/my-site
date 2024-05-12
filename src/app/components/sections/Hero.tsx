import ScrollButton from "../ScrollButton";
import { VariantParentAnimation, VariantChildAnimation } from "../Animations";

export default function Hero() {
  return (
    <section
      className="mx-auto -mt-[5.875rem] flex min-h-screen w-screen max-w-[1200px] items-center"
      id="hero-section"
    >
      <VariantParentAnimation>
        <div className="px-12 py-8">
          <VariantChildAnimation>
            <h3 className="text-lg font-semibold text-my-red md:text-xl">
              👋 Hey there, this is
            </h3>
          </VariantChildAnimation>
          <VariantChildAnimation>
            <h1 className="text-4xl font-bold text-my-white md:mb-2 md:text-7xl">
              Aayush Upreti
            </h1>
          </VariantChildAnimation>
          <VariantChildAnimation>
            <h2 className="text-4xl font-bold text-my-silver md:text-5xl">
              A full-stack web developer
            </h2>
          </VariantChildAnimation>
          <VariantChildAnimation>
            <p className="my-6 max-w-[600px] text-my-silver md:my-8 md:text-lg">
              I am a Computer Science student from Nepal who is passionate about
              building stuff for the web and constantly exploring various
              frontend and backend technologies. Feel free to drop me a message!
            </p>
          </VariantChildAnimation>
          <VariantChildAnimation>
            <ScrollButton text="Say hello!" target="contact-section" />
          </VariantChildAnimation>
        </div>
      </VariantParentAnimation>
    </section>
  );
}
