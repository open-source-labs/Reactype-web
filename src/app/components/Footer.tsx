"use client";

import React from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#252526]">
      <div className="mx-auto w-full max-w-screen-xl mb-[8rem]">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              ReacType
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Legal
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MIT License
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Download
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mb-10" />
        <div className="px-4 py-6  md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center p-5">
            ©{currentYear}{" "}
            <a href="https://app.reactype.dev/#/signup">Reactype™</a>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
