import Image from "next/image";
import React from "react";
import { styles } from "../style";
import {
  heroBackgroundImage,
  bubbleHeroBackground,
  squareChromeBackground,
} from "../assets";

// import blob from "public/blob.svg";
interface Features {
  title: string;
  paragraph: string;
  image: string;
  alt: string;
}

const content: Features[] = [
  {
    title: "Live Code Preview",
    paragraph:
      "See your code preview update in real time as you build. React hooks are enabled for application lifecycle management. ",
    image: `/codepreview.png`,
    alt: "code-preview",
  },
  {
    title: "State Management",
    paragraph:
      "React Hooks are enabled to handle your state across components. Also, pass in props from a parent component with the click of a button!",
    image: `/statemanagement.png`,
    alt: "url",
  },
  {
    title: "Component Sharing",
    paragraph:
      "Developers can now share and upload ready made components in the newly developed marketplace.",
    image: `/codepreview.png`,
    alt: "url",
  },
  {
    title: "Collaboration Room",
    paragraph:
      "Join and host projects in real time with fellow developers - now with optional user tracking.",
    image: `/v19collabdemo.png`,
    alt: "url",
  },
];

const Content: React.FC = () => {
  return (
    <section
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-8 lg:py-20 space-y-16 bg-white"
      // style={{
      //   backgroundImage: `url(${squareChromeBackground.src})`,
      //   backgroundSize: "cover", // or "contain"
      //   backgroundPosition: "1rem",
      // }}
    >
      {/* <img src={blob} alt="" /> */}
      <div className="py-20 mx-auto max-w-2xl text-center margin-auto">
        <h2 className=" text-4xl font-bold tracking-tight text-[#f1efea] sm:text-6xl">
          Create Your <span className="text-[#0670e0]">React</span> App
        </h2>
        <p className="mt-6 text-lg leading-8 text-[#dedcd7]">
          ReacType is a prototyping tool that allows users to visualize their
          application architecture dynamically, employing a drag-and-drop canvas
          display and an interactive, real-time component code preview.
        </p>
      </div>
      {content.map((item, index) => (
        <div
          key={index}
          className="grid gap-10 gap-y-20 lg:grid-cols-4 items-center justify-items-center col-span-2"
        >
          <div className="w-full lg:col-span-2">
            <Image
              className="w-full rounded-lg border border-slate-400"
              width={600}
              height={320}
              quality={100}
              src={item.image}
              alt={item.alt}
              unoptimized={true}
            />
          </div>

          <div className={index % 2 === 0 ? "lg:order-last" : ""}>
            <div className="flex flex-col justify-center items-center bg-[#f1efea] rounded-lg p-10 shadow-lg card-hover">
              <div className="mb-6 text-center max-w-sm">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#031c64] sm:text-4xl sm:leading-none">
                  {item.title}
                </h2>
                <p className="text-base text-center text-black md:text-lg">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>

          <div className={index % 2 === 0 ? "lg:order-last" : ""}>
            <div className="flex flex-col justify-center items-center bg-[#f1efea] rounded-lg p-10 shadow-lg card-hover">
              <div className="mb-6 text-center max-w-sm">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#031c64] sm:text-4xl sm:leading-none">
                  {item.title}
                </h2>
                <p className="text-base text-center text-black md:text-lg">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;
