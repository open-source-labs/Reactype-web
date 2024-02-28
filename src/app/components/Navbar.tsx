"use client";

import React, { useState } from "react";
import { styles } from "../style";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { SFRTNoText, SFRTLogo } from "../assets";
import {
  GitHub,
  LinkedIn,
  Language,
  Groups,
  Assignment,
} from "@mui/icons-material";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "teamPage", href: "/Team", current: false },
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
            <Link href="/" className="mt-[3rem] mr-[-3.5rem]">
              <Image
                priority
                src={SFRTLogo}
                alt="logo"
                className={`h-[4.5rem] object-contain flex flex-start ${
                  smallScreenSize ? "logo-image" : "logo-image-small"
                }`}
              />
            </Link>
            {mediumScreenSize && (
              <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/solutions"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    Solutions
                  </a>
                </li>
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/about"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/team"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            )}
            <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
              <li>
                <a href="https://github.com/open-source-labs/ReacType">
                  <GitHub
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      "&:hover": { color: "#86868b" },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/reactype">
                  <LinkedIn
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      "&:hover": { color: "#86868b" },
                    }}
                  />
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
                {smallScreenSize && (
                  <li className="nav-item flex-start">
                    <a href="/" className="mt-[2rem]">
                      <Image
                        src={SFRTNoText}
                        alt="logo"
                        className="h-[2rem] object-contain flex flex-start logo-image"
                      />
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a href="/solutions" className="nav-link">
                    <Language
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">Solutions</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/solutions" className="nav-link">
                    <Assignment
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/team" className="nav-link">
                    <Groups
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">Our Team</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://github.com/open-source-labs/ReacType"
                  >
                    <GitHub
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">GitHub</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://www.linkedin.com/company/reactype"
                  >
                    <LinkedIn
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="nav-list nav-list-mobile flex">
                <li className="left nav-item">
                  <a href="/" className="nav-link nav-link-cb">
                    <Image src={SFRTNoText} alt="logo" className=" mt-4" />
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
