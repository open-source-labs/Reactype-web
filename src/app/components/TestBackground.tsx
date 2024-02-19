"use client";

import React from "react";
import { Button, Divider } from "@mui/material";
import { styles } from "../style";
import { bubbleHeroBackground, glassHero } from "../assets";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = () => {
  const headerScrollRef = useRef(null);
  const isHeaderInView = useInView(headerScrollRef);
  const mainControls = useAnimation();

  useEffect(() => {
    isHeaderInView
      ? mainControls.start("visible")
      : mainControls.start("hidden");
  }, [isHeaderInView]);

  return (
    <section
      className="relative w-full h-screen mx-auto hero-bg"
      style={{
        backgroundImage: `url(${bubbleHeroBackground.src})`,
        backgroundSize: "cover", // or "contain"
        backgroundPosition: "-1vh",
      }}
    >
      <div ref={headerScrollRef} className="h-full w-full">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -300,
              transition: {
                type: "spring",
                duration: 1.25,
              },
            },
            visible: {
              opacity: 1,
              y: -350,
              transition: {
                type: "spring",
                duration: 1.25,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className={`${styles.paddingX} absolute inset-0 top-[42%] transform -translate-y-1/2 max-w-7xl mx-auto flex flex-col items-center gap-5 bg`}
          style={{ zIndex: 2 }}
        >
          <h1 className={`${styles.heroHeadText} white-text-grad text-center `}>
            A Visual Prototyping
            <span className="text-img-main"> Tool For React </span>
            Developers
          </h1>
          <p
            className={`${styles.sectionSubText} text-center text-xl leading-8 text-[#86868b] lg:mt-[-3rem] mb-5`}
          >
            Built-in comprehensive type checking with TypeScript and flexible
            exporting.
          </p>
          <div className="flex flex-row" style={{ zIndex: 2 }}>
            <Button
              href="http://localhost:8080/#/signup"
              className="blue-button shadow-2xl"
              variant="contained"
              sx={{
                margin: "0.8rem",
                borderRadius: "5rem",
                width: "8rem",
                height: "3rem",
                fontSize: "1rem",
                font: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1372d0",
                },
              }}
            >
              Try Here
            </Button>
            <Button
              variant="outlined"
              sx={{
                margin: "0.8rem",
                color: "white",
                borderRadius: "5rem",
                border: "2px solid white",
                width: "8rem",
                height: "3rem",
                fontSize: "1rem",
                font: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#9b97a4",
                  border: "2px solid white",
                },
              }}
            >
              Talk To Us
            </Button>
          </div>
          <Divider />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
