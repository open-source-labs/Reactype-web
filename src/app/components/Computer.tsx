"use client";

import React from "react";
import { v22_computerRendering } from "../assets";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowOutward } from "@mui/icons-material";

interface Props {
  isCompInMiddle: boolean;
}

const Feedbacks: React.FC<Props> = ({ isCompInMiddle }) => {
  const headerScrollRef = useRef(null);
  const isHeaderInView = useInView(headerScrollRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      mainControls.start("visible");
    }
  }, [isHeaderInView, mainControls, headerScrollRef]);

  return (
    <div
      ref={headerScrollRef}
      className="relative flex items-center justify-center"
    >
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
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        <Image
          src={isCompInMiddle ? v22_computerRendering : v22_computerRendering}
          alt="cube"
          className="mx-auto sm:display-none"
        />
      </motion.div>
      {isCompInMiddle ? null : (
        <div
          ref={headerScrollRef}
          className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50 mb-10"
        >
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
                  delay: 0.75,
                },
              },
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate={mainControls}
            className="mt-56 bg-[#363538] w-[19rem] h-[4rem] flex items-center justify-center gap-2 rounded-[5rem] bg-opacity-80"
            style={{ backdropFilter: "blur(10px)" }}
          >
            <span className="text-xl flex items-center justify-center ml-[1rem]">
              Dive into ReacType{" "}
            </span>
            <motion.div>
              <a href="https://app.reactype.dev/#/login">
                <ArrowOutward
                  sx={{
                    color: "#0671e3",
                    fontSize: "3rem",
                  }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
