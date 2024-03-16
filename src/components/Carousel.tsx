import { useEffect, useRef, useState } from "react";

type CarouselProps = {
  title: string;
  images: string[];
  darkTheme: boolean;
};

const Carousel = (props: CarouselProps) => {
  const { title, images, darkTheme } = props;

  const [imageIndex, setImageIndex] = useState(0);

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.classList.add("animate-fadeIn");
    }

    const intervalId = setInterval(() => {
      if (imageIndex < images.length - 1) {
        setImageIndex((index) => index + 1);
      } else {
        setImageIndex(0);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageIndex]);

  return (
    <div className="relative size-full rounded-t-lg">
      <img
        src={images[imageIndex]}
        alt={`Demo image from project ${title}`}
        className={`size-full flex-shrink-0 rounded-t-lg border-b-2 border-dashed ${darkTheme ? "border-purple-500" : "border-purple-600"}`}
        ref={imageRef}
        onAnimationEnd={() => {
          imageRef.current?.classList.remove("animate-fadeIn");
        }}
      />
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-4">
        {Array.from({ length: images.length }).map((_, index) => {
          return (
            <div
              key={index}
              className={`relative h-3 w-3 cursor-pointer rounded-full duration-500 ease-in-out ${index === imageIndex ? "bg-purple-600" : "bg-gray-500"}`}
              onClick={() => {
                setImageIndex(index);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
