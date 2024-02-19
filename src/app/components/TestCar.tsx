"use client";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowBack, ArrowForward, NavigateNext } from "@mui/icons-material";
import { movingBubble } from "../assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ContentCards from "../hoc/ContentCards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useMediaQuery } from "@mui/material";
import { ServiceData } from "../constants";
import { styles } from "../style";
import { Carousel } from "@material-tailwind/react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Carousel
      className="rounded-xl mt-[10rem]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="bg-[#363538] w-[30rem] h-[5rem] p-8 absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 rounded-[5rem]">
          {ServiceData.map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "h-[1rem] w-[5rem] bg-white"
                  : "h-[1rem] w-[2rem] bg-white/50"
              }`}
              onClick={() => {
                {
                  swiper.activeIndex < activeIndex
                    ? swiper.slidePrev()
                    : swiper.slideNext();
                }
                console.log(swiper);
                setActiveIndex(i);
              }}
            />
          ))}
        </div>
      )}
    />
  );
};

const TestCar = () => {
  const smallScreenSize = useMediaQuery("(min-width:1060px)");

  return (
    <section
      className={`${styles.paddingX} px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20 space-y-16 bg-black`}
    >
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full  lw-full py-20 md:mx-auto sm:mx-auto max-w-4xl">
          <h2
            className={`lg:text-[64px] md:text-[60px] sm:text-[50px] xs:text-[40px] sm:text-[50px] tracking-tight text-[#f5f5f7] sm:text-6xl ml-0`}
          >
            The fastest way to develop effective software.
          </h2>
          <p
            className={`${styles.sectionSubText} mt-6 text-xl leading-8 text-[#86868b] w-[25rem]`}
          >
            ReacType is a prototyping tool that allows users to{" "}
            <span className="text-white">visualize their application </span>
            architecture dynamically, employing a drag-and-drop canvas display
            and an interactive, <span className="text-white">
              real-time
            </span>{" "}
            component code preview.
          </p>
        </div>
        {smallScreenSize ? (
          <Image
            src={movingBubble}
            alt="cube"
            className="w-[25rem] mr-auto sm:display-none"
          />
        ) : null}
      </div>

      <div className="flex items-center justify-center flex-col h-[600px] bg-black">
        <div className="swiper-section-container">
          <h1>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView="auto"
            >
              {ServiceData.map((data, i) => (
                <SwiperSlide className="res-slide">
                  <ContentCards
                    index={i}
                    header={data.header}
                    title={data.title}
                    content={data.content}
                  />
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap  items-center justify-between">
        <div className="w-full lg:w-2/5 py-20 md:mx-auto sm:mx-auto max-w-3xl">
          <h2 className="lg:text-[44px] tracking-tight text-[#86868b] sm:text-6xl">
            Take a closer look.
          </h2>
        </div>
        <div className="mr-auto">
          <p className="text-[#2997ff] text-[19px] hover:underline">
            Try Here{" "}
            <NavigateNext sx={{ color: "#2997ff", fontSize: "25px" }} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestCar;
