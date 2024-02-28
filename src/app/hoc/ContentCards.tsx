"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { NavigateNext } from "@mui/icons-material";
import { iconArray } from "../constants";
import { useMediaQuery } from "@mui/material";

interface Features {
  title: string;
  paragraph: string;
  image: string;
  alt: string;
}

interface Props {
  index: number;
  header: string;
  content: string;
}

const ContentCards: React.FC<Props> = ({ index, header, content }) => {
  const smallScreenSize = useMediaQuery("(min-width:640px)");
  const variableCardWidthAndHeight = smallScreenSize
    ? "w-96 h-[26rem]"
    : "w-72 h-[30rem]";

  return (
    <Card
      className={`${variableCardWidthAndHeight} mx-auto  mt-6 bg-[#252526] p-8`}
    >
      <CardBody>
        {iconArray[index]}
        <Typography variant="h5" color="blue-gray" className="my-5">
          {header}
        </Typography>
        <Typography className="my-5">{content}</Typography>
      </CardBody>
      <CardFooter className="mt-5">
        <a href="#" className="inline-block">
          <Typography className="flex items-end text-[#86868b] hover:underline ">
            Learn More
            <NavigateNext />
          </Typography>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ContentCards;
