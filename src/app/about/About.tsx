"use client";

import React from "react";
import { features } from "../constants";
import { styles } from "../style";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { secondSectionBubble } from "../assets";

const About = () => {
  const isSmallScreenSize = useMediaQuery("(min-width:967px)");
  const smallScreenSize = useMediaQuery("(min-width:1260px)");

  const headerScrollRef = useRef(null);

  const isHeaderInView = useInView(headerScrollRef);

  const mainControls = useAnimation();
  const secondaryControls = useAnimation();
  const tertiaryControls = useAnimation();

  useEffect(() => {
    isHeaderInView
      ? mainControls.start("visible")
      : mainControls.start("hidden");
  }, [isHeaderInView, mainControls, secondaryControls, tertiaryControls]);

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
          <h2
            className={`${styles.sectionHeadText} lg:text-[64px] md:text-[60px] sm:text-[50px] xs:text-[40px] tracking-tight text-[#f5f5f7] sm:text-6xl ml-0`}
          >
            More about ReacType
          </h2>
          <p
            className={`${styles.sectionSubText} mt-6 text-xl leading-8 text-[#86868b] sm:w-full`}
          >
            ReacType is a rapid prototyping tool that allows users visualize
            their application architecture dynamically, employing a
            drag-and-drop canvas display and an interactive, real-time component
            code preview that can be exported as a React app for developers
            employing React component architecture alongside the comprehensive
            type-checking of TypeScript. In other words, you can draw prototypes
            and export React / TypeScript code! our one-stop shop for all things
            React! ReacType is a standalone application built on Electron. It’s
            a powerful prototyping tool, allowing you to initialize React
            components that can contain various customizable HTML elements, Material UI components,
            and/or other components. It provides you with a drag-and-drop canvas
            as well as a demo render to see the result of your actions, and a
            tree graph to see the overall structure of your app at a bird’s eye
            view. Additionally, ReacType makes coding easy with a live code
            preview of your customized components, and the export code feature
            which allows you to export your components and produces the
            scaffolding of your React application. ReacType has a vast array of
            tools at your disposal to plan and get your next React app started.
          </p>
        </div>
        {smallScreenSize ? (
          <Image
            src={secondSectionBubble}
            alt="cube"
            className="w-[25rem] mr-auto sm:display-none"
          />
        ) : null}
      </motion.div>
    </section>
  );
};

export default About;






