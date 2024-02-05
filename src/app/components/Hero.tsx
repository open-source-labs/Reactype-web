import Image from "next/image";
import React from "react";
import { styles } from "../style";
import { Button } from "@mui/material";
import { reacTypeLogoTwo } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute h-full w-full bg-[radial-gradient(#eed4c3_1.2px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[42%] transform -translate-y-1/2 max-w-7xl mx-auto flex flex-col items-center gap-5`}
        >
          <h1
            className={`${styles.heroHeadText} text-img text-center text-[#031c64]`}
          >
            A Visual Prototyping<span className="text-[#0670e0]"> </span>
            <span className="text-[#0670e0]">Tool For React</span> Developers
          </h1>
          <h3
            className={`${styles.sectionSubText} text-center w-[53rem] text-black mt-[-3rem] text-lg leading-8`}
          >
            Built-in comprehensive type checking with TypeScript and flexible
            exporting in Classic React, Next.js, or Gatsby.js
          </h3>
          <div className="flex flex-row">
            <Button
              className="dark-button"
              variant="contained"
              sx={{
                margin: "0.8rem",
                backgroundColor: "#031c64",
                borderRadius: "5rem",
                width: "8rem",
                height: "3rem",
                fontSize: "1rem",
                font: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#0670e0",
                },
              }}
            >
              Try Here
            </Button>
            <Button
              variant="outlined"
              sx={{
                margin: "0.8rem",
                color: "black",
                borderRadius: "5rem",
                border: "1px solid black",
                width: "8rem",
                height: "3rem",
                fontSize: "1rem",
                font: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#a5bdd6",
                  border: "1px solid black",
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
