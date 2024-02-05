"use client";

import React, { useEffect, useRef } from "react";
import { styles } from "../style";
import DropDown from "../hoc/DropDown";
import { Button } from "@mui/material";
import { reacTypeLogoTwo } from "../assets";
import Image from "next/image";
import { dropDownMenuItems, dropDownMenuTitles } from "../constants";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "teamPage", href: "/team", current: false },
];

const Navbar: React.FC = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-[#f1efea] bg-opacity-80 border-b-2`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link href="/" className="mt-[2rem]">
          <Image
            src={reacTypeLogoTwo}
            alt="logo"
            className="h-[8rem] object-contain flex flex-start logo-image"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {dropDownMenuTitles.map((title, i) => (
            <DropDown
              key={i}
              // index={i}
              title={title}
              dropDownMenuItems={dropDownMenuItems[i]}
            />
          ))}
          <div className="text-black relative flex flex-row items-center rounded-sm">
            <a
              href="/Team"
              className="p-4 w-full flex items-center font-medium hover:text-[#0670e0] duration-300 text-lg cursor-pointer"
            >
              Our Team
            </a>
          </div>
        </ul>
        <ul>
          <li>
            <a href="https://app.reactype.dev/#/login">
              <Button
                className="dark-button"
                variant="contained"
                sx={{
                  borderRadius: "5rem",
                  width: "6rem",
                  height: "3rem",
                  fontSize: "1rem",
                  font: "bold",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#0670e0",
                  },
                }}
              >
                Log in
              </Button>
            </a>
            <a href="https://app.reactype.dev/#/signup">
              <Button
                variant="outlined"
                sx={{
                  marginLeft: "1rem",

                  color: "black",
                  borderRadius: "5rem",
                  border: "1px solid black",
                  width: "6rem",
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
                Sign up
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
