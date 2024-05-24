import Image from "next/image";
import Link from "next/link";
import type { ProjectItemDetails } from "./sections/data/ProjectsData";
import { HiCode, HiOutlineExternalLink } from "react-icons/hi";
import { ScrollAppearAnimation } from "./Animations";

type ProjectItemProps = {
  align: "left" | "right";
  index: number;
} & ProjectItemDetails;

export default function ProjectItem(props: ProjectItemProps) {
  const {
    align,
    index,
    title,
    imageSrc,
    description,
    links: { demo, code },
  } = props;

  return (
    <ScrollAppearAnimation>
      <div className="relative mx-auto w-[256px] xs:w-[320px] md:mx-0 md:w-full">
        <div
          className={`relative h-[144px] w-[256px] overflow-hidden rounded-t-sm xs:h-[180px] xs:w-[320px] md:h-[360px] md:w-[640px] md:rounded-b-sm ${align === "left" && "ml-auto"}`}
        >
          <Image
            alt={title}
            src={imageSrc}
            fill
            priority
            sizes="(min-width: 768px) 640px, (min-width: 640px) 320px, 256px"
            className="absolute h-full w-full rounded-t-sm duration-300 ease-in-out hover:scale-110 md:rounded-b-sm"
          />
        </div>
        <div
          className={`z-20 flex h-1/2 w-full flex-col justify-evenly gap-4 rounded-b-sm bg-my-blue-light px-4 py-3 md:absolute md:top-1/2 md:w-1/2 md:-translate-y-1/2 md:gap-0 md:rounded-t-sm ${align === "left" ? "md:left-0" : "md:right-0"}`}
        >
          <div className="text-2xl font-bold">
            <h2 className="inline text-my-red">{index + 1}. </h2>
            <h2 className="inline text-my-white">{title}</h2>
          </div>
          <p className="text-lg text-my-silver">{description}</p>
          <div className="flex items-center gap-4 text-2xl">
            <Link
              href={code}
              aria-label="code repository url"
              className="grid size-[2rem] place-content-center rounded-full bg-my-red text-my-white duration-200 ease-in-out hover:bg-my-white hover:text-my-red"
            >
              <HiCode />
            </Link>
            <Link
              href={demo}
              aria-label="live website url"
              className="grid size-[2rem] place-content-center rounded-full bg-my-red text-my-white duration-200 ease-in-out hover:bg-my-white hover:text-my-red"
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </ScrollAppearAnimation>
  );
}
