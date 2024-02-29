"use client";

import {
  ArrowBackIos,
  ArrowForwardIos,
  NavigateNext,
} from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useMediaQuery } from "@mui/material";
import { styles } from "../style";
import { Button } from "@material-tailwind/react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import StarCards from "../components/StarCards";
import { features } from "../constants";

const Solutions = () => {
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
  }, [
    isHeaderInView,
    isCardsSwiperInView,
    isBottomInView,
    mainControls,
    secondaryControls,
    tertiaryControls,
  ]);

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
            },
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              duration: 1.25,
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
        className="flex flex-wrap items-center justify-between"
      >
        <div className="w-full py-20 md:mx-auto sm:mx-auto max-w-4xl">
          <h2 className={`${styles.heroHeadText} white-text-grad text-center `}>
            We have a solution for it
          </h2>
          <p
            className={`${styles.sectionSubText} text-center text-xl leading-7 text-[#6e6e73]`}
          >
            With full integrated Next.js and Gatby.js truly anyone can find a
            solutions by using ReacType.
          </p>
        </div>
      </motion.div>

      <div
        ref={cardsSwiperScrollRef}
        className="flex items-center  justify-center flex-col h-[600px] bg-black [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
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
              },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.75,
              },
            },
          }}
          initial="hidden"
          animate={secondaryControls}
          className="swiper-section-container"
        >
          <h1>
            <div className="flex justify-center">
              <div className="grid items-center justift-center max-w-7xl lg:grid-cols-3 sm:grid-cols-1 m-auto">
                {features.map((data, index) => (
                  <StarCards
                    key={index}
                    header={data.header}
                    content={data.content}
                  />
                ))}
              </div>
            </div>
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
              },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.75,
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
              <a
                href="https://app.reactype.dev/#/login"
                className="text-[#2997ff] text-[19px] hover:underline"
              >
                Try Here{" "}
                <NavigateNext sx={{ color: "#2997ff", fontSize: "25px" }} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
