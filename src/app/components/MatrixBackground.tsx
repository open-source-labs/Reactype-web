"use client";
import { useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effects";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowOutward } from "@mui/icons-material";

const GoogleGeminiEffectDemo = () => {
  const ref = useRef(null);
  const isHeaderInView = useInView(ref);
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
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
    </div>
  );
};

export default GoogleGeminiEffectDemo;
