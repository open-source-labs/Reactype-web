import Image from "next/image";
import React from "react";
import { styles } from "../style";
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <section className="relative w-full h-96 pt-56 mx-auto bg-black">
      <div className="">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[42%] transform -translate-y-1/2 mx-auto flex flex-col items-center gap-5z z-30`}
        >
          <h1
            className={`${styles.heroHeadText} mt-32 lg:text-[64px] md:text-[60px] sm:text-[50px] xs:text-[40px] tracking-tight text-[#f5f5f7] sm:text-6xl`}
          >
            A Visual Prototyping Tool For React Developers
          </h1>
          <h3
            className={`${styles.sectionSubText} text-center text-xl leading-8 text-[#86868b] lg:w-[44%] sm:w-full lg:-mt:7 md:-mt-7 sm:mt-10 xs:mt-10`}
          >
            Built-in comprehensive type checking with TypeScript and flexible
            exporting in Classic React, Next.js, or Gatsby.js
          </h3>

          <div className="flex flex-row mt-5">
            <Button
              href="https://app.reactype.dev/#/signup"
              className="blue-button animate-shimmer transition-colors"
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
              href="/team"
              variant="outlined"
              className="shadow-2xl z-30 nimate-shimmer transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
