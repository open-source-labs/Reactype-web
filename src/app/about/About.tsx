"use client";

import React from "react";
import { features } from "../constants";
import { styles } from "../style";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const isSmallScreenSize = useMediaQuery("(min-width:967px)");

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
    <section className="py-12 w-full sm:py-16 lg:py-20 bg-black h-full">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen mt-36">
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
        >
          <h2
            className={`${styles.sectionHeadText} text-center lg:text-[64px] md:text-[60px] sm:text-[50px] xs:text-[40px] tracking-tight text-[#f5f5f7] sm:text-6xl ml-0`}
          >
            Learn about ReacType
          </h2>
          <p
            className={`${styles.sectionSubText} mt-6 text-xl leading-8 text-[#86868b]  sm:w-full`}
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
            components that can contain various customizable HTML elements
            and/or other components. It provides you with a drag-and-drop canvas
            as well as a demo render to see the result of your actions, and a
            tree graph to see the overall structure of your app at a bird’s eye
            view. Additionally, ReacType makes coding easy with a live code
            preview of your customized components, and the export code feature
            which allows you to export your components and produces the
            scaffolding of your React application. ReacType has a vast array of
            tools at your disposal to plan and get your next React app started.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
