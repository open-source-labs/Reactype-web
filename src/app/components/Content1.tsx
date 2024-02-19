"use client";

import { FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import {
  ArrowBack,
  ArrowForward,
  NavigateNext,
  AddCircle,
} from "@mui/icons-material";
import { bubbleCube, movingBubble } from "../assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ContentCards from "../hoc/ContentCards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

const ServiceData = [
  {
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
  },
  {
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const SwiperNavButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <Button onClick={() => swiper.slidePrev()}>
        <ArrowBack />
      </Button>
      <Button onClick={() => swiper.slideNext()}>
        <ArrowForward />
      </Button>
    </div>
  );
};

const TestCar = () => {
  const smallScreenSize = useMediaQuery("(min-width:1060px)");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20 space-y-16 bg-black">
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-2/5 py-20 md:mx-auto sm:mx-auto max-w-3xl">
          <h2 className="lg:text-[64px] tracking-tight text-[#f5f5f7] sm:text-6xl">
            The fastest way to develop effective software.
          </h2>
          <p className="mt-6 text-xl leading-8 text-[#86868b] w-[25rem]">
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
              {ServiceData.map((card) => (
                <SwiperSlide className="res-slide">
                  <ContentCards />
                </SwiperSlide>
              ))}

              <SwiperNavButtons />
            </Swiper>
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full lg:w-2/5 py-20 md:mx-auto sm:mx-auto max-w-3xl">
          <h2 className="lg:text-[64px] tracking-tight text-[#86868b] sm:text-6xl">
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
