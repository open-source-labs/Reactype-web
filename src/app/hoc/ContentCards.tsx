"use client";

import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Home,
  Security,
  AddCircle,
  Cloud,
  LaptopMac,
  NavigateNext,
} from "@mui/icons-material";

const iconArray = [
  <Home sx={{ fontSize: "4rem", color: "#2fd64d" }} />,
  <Security sx={{ fontSize: "4rem", color: "#1667d1" }} />,
  <AddCircle sx={{ fontSize: "4rem", color: "#fb4c64" }} />,
  <Cloud sx={{ fontSize: "4rem", color: "#f0c000" }} />,
  <LaptopMac sx={{ fontSize: "4rem", color: "#be5be8" }} />,
  <Home sx={{ fontSize: "4rem", color: "#fe9c06" }} />,
  <Security sx={{ fontSize: "4rem", color: "#f6352b" }} />,
  <AddCircle sx={{ fontSize: "4rem", color: "#1667d1" }} />,
  <Cloud sx={{ fontSize: "4rem", color: "#1667d1" }} />,
  <LaptopMac sx={{ fontSize: "4rem", color: "#50ed6a" }} />,
];

interface Features {
  title: string;
  paragraph: string;
  image: string;
  alt: string;
}

interface Props {
  index: number;
  header: string;
  title: string;
  content: string;
}

const ContentCards: React.FC<Props> = ({ index, header, title, content }) => {
  return (
    <Card className="mt-6 w-96 bg-[#252526] p-8">
      <CardBody>
        {iconArray[index]}
        <Typography variant="h5" color="blue-gray" className="my-5">
          {header}
        </Typography>
        <Typography className="my-5">{content}</Typography>
      </CardBody>
      <CardFooter className="mt-5">
        <a href="#" className="inline-block">
          <Typography className="flex items-center  text-[#86868b] hover:underline">
            Learn More
            <NavigateNext />
          </Typography>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ContentCards;
