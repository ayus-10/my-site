import Image from "next/image";
import { ScrollVisibleAnimation } from "../Animations";

export default function About() {
  return (
    <ScrollVisibleAnimation>
      <section
        className="mx-auto flex min-h-screen w-screen max-w-[1200px] flex-col justify-center gap-8 px-6 pt-[6rem] md:flex-row md:items-center md:justify-start md:pt-0"
        id="about-section"
      >
        <div className="group relative ml-4 size-[250px] min-h-[250px] md:ml-0 md:size-[350px] md:min-w-[350px]">
          <Image
            src={"/my-image.jpg"}
            alt="My image"
            fill
            sizes="(min-width: 768px) 350px, 250px"
            priority
            className="absolute z-20 rounded-sm duration-200 ease-in-out group-hover:-translate-x-4 group-hover:translate-y-4"
          ></Image>
          <div className="absolute inset-0 z-10 h-full w-full -translate-x-4 translate-y-4 rounded-sm border-4 border-my-red"></div>
        </div>
        <div className="text-my-silver md:text-lg">
          <h2 className="text-xl font-semibold text-my-red md:mb-2 md:text-3xl">
            About me
          </h2>
          <p className="max-w-[750px]">
            I began my journey in web development back in 2021 with some HTML, CSS, and JavaScript,
            tried backend development with PHP and MySQL before diving into modern JavaScript frameworks
            like React and Node(and its frameworks). I also explored Flutter especially in android development.
            Currently experimenting with ASP.NET for developing web APIs.
          </p>
        </div>
      </section>
    </ScrollVisibleAnimation>
  );
}
