"use client";

import React from "react";
import Image from "next/image";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { XIcon } from "../assets";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#252526]">
      <div className="mx-auto w-full max-w-screen-xl mb-[8rem]">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
              ReacType
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p>About</p>
              </li>
              <li className="mb-4">
                <p>Careers</p>
              </li>
              <li className="mb-4">
                <p>Brand Center</p>
              </li>
              <li className="mb-4">
                <p>Blog</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p>Discord Server</p>
              </li>
              <li className="mb-4">
                <p>Twitter</p>
              </li>
              <li className="mb-4">
                <p>Facebook</p>
              </li>
              <li className="mb-4">
                <p>Contact Us</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p>MIT License</p>
              </li>
              <li className="mb-4">
                <p>Privacy Policy</p>
              </li>
              <li className="mb-4">
                <p>Licensing</p>
              </li>
              <li className="mb-4">
                <p>Terms &amp; Conditions</p>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Download
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p>iOS</p>
              </li>
              <li className="mb-4">
                <p>Android</p>
              </li>
              <li className="mb-4">
                <p>Windows</p>
              </li>
              <li className="mb-4">
                <p>MacOS</p>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-10" />
        <div className="px-4 py-6 md:flex items-center justify-center md:justify-between">
          <span className="text-sm text-white sm:text-center p-5">
            ©{currentYear}{" "}
            <a href="https://app.reactype.dev/#/login">Reactype™</a>All Rights
            Reserved.
          </span>
          <div className="flex mt-4 justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://github.com/open-source-labs/ReacType"
              className="text-white hover:text-gray-400"
            >
              <GitHub />
              <span className="sr-only">GitHub page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/reactype"
              className="text-white hover:text-gray-400"
            >
              <LinkedIn />
              <span className="sr-only">LinkedIn account</span>
            </a>
            <a
              href="https://twitter.com/ReacType"
              className="text-white hover:text-gray-400"
            >
              <Image
                src={XIcon}
                alt="cube"
                className="text-white hover:text-gray-400"
              />
              <span className="sr-only">X account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
