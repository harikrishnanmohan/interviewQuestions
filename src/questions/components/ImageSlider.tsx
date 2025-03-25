import { useEffect, useState } from "react";
import { images } from "./constants/images";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const onClickNext = () => {
    setActiveImageIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  };

  const onClickPrevious = () => {
    setActiveImageIndex((preIndex) =>
      preIndex === 0 ? images.length - 1 : preIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClickNext();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="flex justify-center items-center">
      <button
        className="rounded-md bg-gray-400 p-4 w-32 mx-4"
        onClick={onClickPrevious}
      >
        Previous
      </button>
      {images.map((url: string | undefined, index: number) => {
        return (
          <img
            src={url}
            alt="wallpaper"
            key={url}
            className={`w-[700px] h-[500px] object-contain ${
              activeImageIndex === index ? "block" : "hidden"
            }`}
          />
        );
      })}
      <button
        className="rounded-md bg-gray-400 p-4 w-32 mx-4"
        onClick={onClickNext}
      >
        Next
      </button>
    </div>
  );
};
export default ImageSlider;
