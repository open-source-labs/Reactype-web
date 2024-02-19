import React from "react";
import { features } from "../constants";
import FeatureCards from "./FeatureCards";
import { styles } from "../style";

const Features = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="text-center">
          <h2 className="lg:text-[64px] tracking-tight text-white sm:text-6xl">
            Make Every Step User-Centric
          </h2>
          <p
            className={`${styles.sectionSubText} mt-8 text-xl leading-7 text-[#6e6e73]`}
          >
            ReacType is a prototyping tool that allows users to visualize their
            application architecture dynamically, employing a drag-and-drop
            canvas display and an interactive, real-time component code preview.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10  sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 md:gap-0 xl:mt-24 ">
          <div>
            <p className="lg:text-[22px] text-[#6e6e73] mt-10">With over</p>
            <h2 className="lg:text-[44px] tracking-tight text-[#f5f5f7]">
              300+ stars on GitHub
            </h2>
            <p className="lg:text-[22px] text-[#6e6e73]">
              Our team is always growing{" "}
            </p>
          </div>

          <div className="">
            <p className="pt-10 lg:text-[44px] tracking-tight text-white leading-7 sm:mt-8 font-pj">
              <br />
              Lorem ipsum dolor acedfl
            </p>
          </div>

          <div>
            <p className="lg:text-[22px] text-[#6e6e73] mt-10">and more than</p>
            <h2 className="lg:text-[44px] tracking-tight text-[#f5f5f7]">
              10 core technologies
            </h2>
            <p className="lg:text-[22px] text-[#6e6e73]">
              we know how to build it
            </p>
          </div>

          <div className="">
            <hr className="w-full mb-10" />
            <p className=" text-xl leading-7 text-[#6e6e73]">
              ReacType is a prototyping tool that allows users to visualize
              their application architecture dynamically, employing a
              drag-and-drop canvas display and an interactive, real-time
              component code preview.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10  sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24 ">
          {/* {features.map((feature, index) => (
            <div key={index} className=" md:p-8 lg:p-14 text-center">
              <div className="bg-[#141414] rounded-lg p-5 w-[18rem] h-[20rem] card-hover border-top-grey">
                {feature.icon}
                <h3 className="mt-12 text-xl font-bold text-gray-100 font-pj">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base text-gray-400 font-pj">
                  {feature.description}
                </p>
              </div>
            </div>
          ))} */}
          {features.map((feature, index) => (
            <div className="mx-auto">
              <FeatureCards index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
