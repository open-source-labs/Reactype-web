"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effects";
import { motion, useInView, useAnimation } from "framer-motion";
import { AddCircleSharp } from "@mui/icons-material";

const GoogleGeminiEffectDemo = () => {
  const ref = useRef(null);
  const headerScrollRef = useRef(null);
  const isHeaderInView = useInView(ref);
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    console.log(scrollYProgress);
    isHeaderInView
      ? mainControls.start("visible")
      : mainControls.start("hidden");
  }, [isHeaderInView]);

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 2.0]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 2.1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 2.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 2.3]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 2.4]);

  return (
    <div
      className="h-[200vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 mb-10">
        <motion.div
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
                duration: 2.25,
                delay: 0.5,
              },
            },
          }}
          initial="hidden"
          animate={mainControls}
          className="mt-56 bg-[#363538] w-[19rem] h-[4rem] flex items-center justify-center gap-2 rounded-[5rem] bg-opacity-80"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <a
            className="text-xl flex items-center justify-center ml-[1rem]"
            href="http://localhost:8080/#/signup"
          >
            Explore Reactype{" "}
          </a>
          <motion.div whileHover={{ scale: 1.2, rotate: 180 }}>
            <AddCircleSharp
              sx={{
                color: "#0671e3",
                fontSize: "3rem",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleGeminiEffectDemo;
