"use client";

import React, { useEffect, useRef, useState } from "react";
import { styles } from "../style";
import DropDown from "../hoc/DropDown";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { whiteLogoNoText } from "../assets";
import Image from "next/image";
import { dropDownMenuItems, dropDownMenuTitles } from "../constants";
import Link from "next/link";
import {
  RlogoBlue,
  reacTypeLogoWithNoText,
  whiteReacTypeLogoTwo,
} from "../assets";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "teamPage", href: "/team", current: false },
];

const Navbar = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const smallScreenSize = useMediaQuery("(min-width:967px)");
  const mediumScreenSize = useMediaQuery("(min-width:1200px)");

  return (
    <>
      {smallScreenSize ? (
        <nav
          className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-black bg-opacity-80`}
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
            <Link href="/" className="mt-[2rem]">
              <Image
                priority
                src={
                  smallScreenSize
                    ? whiteReacTypeLogoTwo
                    : reacTypeLogoWithNoText
                }
                alt="logo"
                className={`h-${
                  smallScreenSize ? 8 : 4
                }rem object-contain flex flex-start ${
                  smallScreenSize ? "logo-image" : "logo-image-small"
                }`}
              />
            </Link>
            {mediumScreenSize && (
              <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
                {/* Assuming dropDownMenuTitles and dropDownMenuItems are defined */}
                {dropDownMenuTitles.map((title, i) => (
                  <DropDown
                    key={i}
                    title={title}
                    dropDownMenuItems={dropDownMenuItems[i]}
                  />
                ))}
                <div className="white-text-grad relative flex flex-row items-center rounded-sm">
                  <a
                    href="/Team"
                    className="p-4 w-full flex items-center font-medium hover:text-[#0670e0] duration-300 text-lg cursor-pointer"
                  >
                    Our Team
                  </a>
                </div>
              </ul>
            )}
            <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
              <li>
                <a href="https://app.reactype.dev/#/login">
                  <Button
                    className="white-button shadow-2xl"
                    variant="contained"
                    sx={{
                      margin: "0.8rem -1rem 0.8rem 0.8rem",
                      borderRadius: "5rem",
                      width: "6rem",
                      height: "3rem",
                      fontSize: "1rem",
                      font: "bold",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#bdb7c7",
                      },
                    }}
                  >
                    Log in
                  </Button>
                </a>
              </li>
              <li>
                <a href="https://app.reactype.dev/#/signup">
                  <Button
                    variant="outlined"
                    sx={{
                      margin: "0.8rem",
                      color: "white",
                      borderRadius: "5rem",
                      border: "2px solid white",
                      width: "6rem",
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
                    Sign up
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <header
          id="header"
          className={isMobileMenuOpen ? "active expanded-header" : ""}
        >
          <div className="container m-10">
            <nav className="nav">
              <ul className="nav-list nav-list-larger">
                {/* Assuming whiteLogoNoText is defined */}
                {smallScreenSize && (
                  <li className="nav-item flex-start">
                    <a href="/" className="mt-[2rem]">
                      <Image
                        src={whiteLogoNoText}
                        alt="logo"
                        className="h-[2rem] object-contain flex flex-start logo-image"
                      />
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Solutions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Learn
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://app.reactype.dev/#/login"
                  >
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://app.reactype.dev/#/signup"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
              <ul className="nav-list nav-list-mobile flex">
                <li className="left nav-item">
                  <a href="/" className="nav-link nav-link-cb">
                    <Image src={RlogoBlue} alt="logo" className="w-10 mt-4" />
                  </a>
                </li>
                <li className="right nav-item">
                  <div
                    className="mobile-menu"
                    onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                  >
                    <span className="line line-top"></span>
                    <span className="line line-bottom"></span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
