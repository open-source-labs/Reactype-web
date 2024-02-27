"use client";

import React from "react";
import { features } from "../constants";
import FeatureCards from "./FeatureCards";
import { styles } from "../style";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";

const Features = () => {
  const isSmallScreenSize = useMediaQuery("(min-width:967px)");

  const headerScrollRef = useRef(null);
  const middleSectionRef = useRef(null);
  const bottomScrollRef = useRef(null);

  const isHeaderInView = useInView(headerScrollRef);
  const isMiddleSectionInView = useInView(middleSectionRef);
  const isBottomInView = useInView(bottomScrollRef);

  const mainControls = useAnimation();
  const secondaryControls = useAnimation();
  const tertiaryControls = useAnimation();

  useEffect(() => {
    isHeaderInView
      ? mainControls.start("visible")
      : mainControls.start("hidden");

    isMiddleSectionInView
      ? secondaryControls.start("visible")
      : secondaryControls.start("hidden");

    isBottomInView
      ? tertiaryControls.start("visible")
      : tertiaryControls.start("hidden");
  }, [
    isHeaderInView,
    isMiddleSectionInView,
    isBottomInView,
    mainControls,
    secondaryControls,
    tertiaryControls,
  ]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
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
          className="text-center"
        >
          <h2 className={`${styles.heroHeadText} white-text-grad text-center `}>
            Make Every Step User-Centric
          </h2>
          <p
            className={`${styles.sectionSubText} text-xl leading-7 text-[#6e6e73]`}
          >
            ReacType is a prototyping tool that allows users to visualize their
            application architecture dynamically, employing a drag-and-drop
            canvas display and an interactive, real-time component code preview.
          </p>
        </motion.div>

        <motion.div
          ref={middleSectionRef}
          viewport={{ root: middleSectionRef }}
          variants={{
            hidden: {
              opacity: 0,
              y: 75,
              transition: {
                type: "spring",
                duration: 2.25,
                delay: 0.5,
              },
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                duration: 1.5,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={secondaryControls}
          className="grid grid-cols-1 mt-10  sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24 "
        >
          <div>
            <p className="text-[22px] text-[#6e6e73] mt-10">With over</p>
            <h2 className="text-[44px] tracking-tight text-[#f5f5f7]">
              300+ stars on GitHub
            </h2>
            <p className="lg:text-[22px] text-[#6e6e73]">
              our team is always growing{" "}
            </p>
          </div>

          {isSmallScreenSize ? (
            <div className="">
              <p className="pt-10 lg:text-[44px] tracking-tight text-white leading-7 sm:mt-8 font-pj">
                <br />
                Unlock development at scale
              </p>
            </div>
          ) : null}

          <div>
            <p className="text-[22px] text-[#6e6e73] mt-10">and more than</p>
            <h2 className="text-[44px] tracking-tight text-[#f5f5f7]">
              10 core technologies
            </h2>
            <p className="lg:text-[22px] text-[#6e6e73]">
              we know how to build it.
            </p>
          </div>

          <div className="">
            {isSmallScreenSize ? null : (
              <div className="">
                <p className="pt-10 text-[34px] tracking-tight text-white leading-7 font-pj pb-10">
                  <br />
                  Unlock development at scale
                </p>
              </div>
            )}
            <hr className="w-full mb-10" />
            <p className=" text-xl leading-7 text-[#6e6e73]">
              Help your team spend more time innovating—and finally clear the
              backlog. ReacType is your application layer for building secure
              and standardized business software faster.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={bottomScrollRef}
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
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={tertiaryControls}
          className="grid grid-cols-1 mt-10  sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 "
        >
          {features.map((feature, index) => (
            <div key={index} className="mx-auto">
              <FeatureCards index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
