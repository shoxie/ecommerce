import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { sliderItems } from "../data";

function Slider() {
  const [activeSlider, setActiveSlider] = useState(1);

  const handleNextSlide = () => {
    activeSlider === sliderItems.length
      ? setActiveSlider(1)
      : setActiveSlider(activeSlider + 1);
  };

  const handlePrevSlide = () => {
    activeSlider === 1
      ? setActiveSlider(sliderItems.length)
      : setActiveSlider(activeSlider - 1);
  };
  return (
    <div className="mx-auto max-w-screen-xl overflow-hidden">
      <div className="relative">
        <div
          className="p-2 absolute top-1/2 -translate-y-1/2 left-[10px] md:left-[15px] rounded-full cursor-pointer z-10"
          onClick={handleNextSlide}
        >
          <IoIosArrowBack className="text-2xl" />
        </div>
        <div className="w-full">
          {sliderItems.map((item) => {
            if (item.id === activeSlider) {
              return (
                <div key={item.id} className={`${item.bg} py-10 px-8`}>
                  <div className="wrapper w-full h-full flex">
                    <div className="w-full h-full flex-1 hidden md:block relative">
                      <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-primary circle-slider absolute"></div>
                      <div className="w-full h-full relative z-10">
                        <img
                          src={item.img}
                          alt="girl-on-dress"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-5 flex-1 flex flex-col items-start justify-center gap-4 md:gap-7">
                      <h3 className="font-semibold text-lg md:text-5xl tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-md md:text-xl md:tracking-widest">
                        {item.desc}
                      </p>
                      <button className="border px-3 py-2 bg-primary font-medium">
                        SHOW NOW
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div
          className="p-2 absolute top-1/2 -translate-y-1/2 right-[10px] md:right-[15px] cursor-pointer z-10"
          onClick={handlePrevSlide}
        >
          <IoIosArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
