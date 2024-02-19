"use client";

import "./index.css";
import React from "react";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Transition from "./components/Transition";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="w-full">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;