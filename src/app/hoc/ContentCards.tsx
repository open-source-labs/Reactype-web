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
  return (
    <Card className="mt-6 w-96 h-[26rem] bg-[#252526] p-8">
      <CardBody>
        {iconArray[index]}
        <Typography variant="h5" color="blue-gray" className="my-5">
          {header}
        </Typography>
        <Typography className="my-5">{content}</Typography>
      </CardBody>
      <CardFooter className="mt-5">
        <a href="#" className="inline-block">
          <Typography className="flex items-center  text-[#86868b] hover:underline ">
            Learn More
            <NavigateNext />
          </Typography>
        </a>
      </CardFooter>
    </Card>
  );
};

export default ContentCards;
