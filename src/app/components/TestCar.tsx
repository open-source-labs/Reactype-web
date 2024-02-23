"use client";

import { Pagination } from "swiper/modules";
import Image from "next/image";
import {
  ArrowBackIos,
  ArrowForwardIos,
  NavigateNext,
} from "@mui/icons-material";
import { movingBubble } from "../assets";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ContentCards from "../hoc/ContentCards";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useMediaQuery } from "@mui/material";
import { ServiceData } from "../constants";
import { styles } from "../style";
import { Button } from "@material-tailwind/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="text-center mt-14">
      <div className="flex justify-center">
        <Button
          className="bg-[#0671e3] rounded-full w-14 h-14 flex items-center justify-center m-3"
          onClick={() => swiper.slidePrev()}
        >
          <ArrowBackIos className="text-white text-[1.8rem]" />
        </Button>
        <Button
          className="bg-[#0671e3] rounded-full w-14 h-14 flex items-center justify-center m-3"
          onClick={() => swiper.slideNext()}
        >
          <ArrowForwardIos className="text-white text-[1.8rem]" />
        </Button>
      </div>
    </div>
  );
};

const TestCar = () => {
  const smallScreenSize = useMediaQuery("(min-width:1260px)");

  const headerScrollRef = useRef(null);
  const cardsSwiperScrollRef = useRef(null);
  const bottomScrollRef = useRef(null);

  const isHeaderInView = useInView(headerScrollRef);
  const isCardsSwiperInView = useInView(cardsSwiperScrollRef);
  const isBottomInView = useInView(bottomScrollRef);

  const mainControls = useAnimation();
  const secondaryControls = useAnimation();
  const tertiaryControls = useAnimation();

  useEffect(() => {
    isHeaderInView
      ? mainControls.start("visible")
      : mainControls.start("hidden");

    isCardsSwiperInView
      ? secondaryControls.start("visible")
      : secondaryControls.start("hidden");

    isBottomInView
      ? tertiaryControls.start("visible")
      : tertiaryControls.start("hidden");
  }, [isHeaderInView, isCardsSwiperInView, isBottomInView]);

  return (
    <section
      className={`${styles.paddingX} px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20 space-y-16 bg-black`}
    >
      <motion.div
        ref={headerScrollRef}
        viewport={{ root: headerScrollRef }}
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 0.5,
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 0.2,
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className="flex flex-wrap items-center justify-between"
      >
        <div className="w-full  lw-full py-20 md:mx-auto sm:mx-auto max-w-4xl">
          <h2
            className={`${styles.sectionHeadText} lg:text-[64px] md:text-[60px] sm:text-[50px] xs:text-[40px] tracking-tight text-[#f5f5f7] sm:text-6xl ml-0`}
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
      </motion.div>

      <div
        ref={cardsSwiperScrollRef}
        className="flex items-center justify-center flex-col h-[600px] bg-black"
      >
        <motion.div
          viewport={{ root: cardsSwiperScrollRef }}
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
              transition: {
                type: "spring",
                duration: 4.75,
                delay: 0.5,
              },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.75,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={secondaryControls}
          className="swiper-section-container"
        >
          <h1>
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView="auto"
            >
              {ServiceData.map((data, index) => (
                <SwiperSlide key={index} className="res-slide">
                  <ContentCards
                    index={index}
                    header={data.header}
                    title={data.title}
                    content={data.content}
                    key={index}
                  />
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </h1>
        </motion.div>
      </div>

      <div ref={bottomScrollRef}>
        <motion.div
          viewport={{ root: bottomScrollRef }}
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
              transition: {
                type: "spring",
                duration: 1.75,
                delay: 0.5,
              },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.75,
                delay: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={tertiaryControls}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default TestCar;