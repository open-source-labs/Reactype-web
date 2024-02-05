"use client";
import React, { useState, ReactNode } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface DropDownProps {
  title: string;
  dropDownMenuItems: string[];
}

const DropDown: React.FC<DropDownProps> = ({ title, dropDownMenuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="text-black relative flex flex-row items-center rounded-sm">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="p-4 w-full flex items-center font-medium hover:text-[#0670e0] duration-300 text-lg"
        >
          {title}
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </button>

        {isOpen ? (
          <div
            className="bg-[#fcfcfa] absolute top-14 flex flex-col items-start rounded-lg p-2 w-[10rem] shadow-2xl"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {dropDownMenuItems.map((item, index) => (
              <div key={index}>
                <h3
                  className="p-4 w-full hover:text-[#0670e0] duration-300 cursor-pointer"
                  key={index}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
