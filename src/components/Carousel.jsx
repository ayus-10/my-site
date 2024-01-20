import React, { useEffect, useRef, useState } from "react";

const Carousel = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const imageRef = useRef();

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
    <div className="relative h-full w-full rounded-lg">
      <img
        src={`${images[imageIndex]}`}
        className="rounded-lg"
        ref={imageRef}
        onAnimationEnd={() => {
          imageRef.current.classList.remove("animate-fadeIn");
        }}
      />
      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-4">
        {Array.from({ length: images.length }).map((_, index) => {
          return (
            <div
              key={index}
              className={`relative h-4 w-4 cursor-pointer rounded-full duration-500 ease-in-out ${index === imageIndex ? "bg-white" : "bg-gray-500"}`}
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
