"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { NavigateNext } from "@mui/icons-material";
import { Check } from "@mui/icons-material";

interface Props {
  index: number;
}

const FeatureCards: React.FC<Props> = ({ index }) => {
  return (
    <Card
      color="gray"
      variant="gradient"
      className={`w-full max-w-[20rem] p-8 rounded-xl feature-bg-${index} hover:scale-[1.02]`}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          standard
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <span className="mt-2 text-4xl">$</span>0{" "}
          <span className="self-end text-4xl">/mo</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <Check className="text-[#01da58]" />
            </span>
            <Typography className="font-normal">
              Life time technical support
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <Check className="text-[#01da58]" />
            </span>
            <Typography className="font-normal">5 team members</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <Check className="text-[#01da58]" />
            </span>
            <Typography className="font-normal">200+ components</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <Check className="text-[#01da58]" />
            </span>
            <Typography className="font-normal">40+ built-in pages</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <Check className="text-[#01da58]" />
            </span>
            <Typography className="font-normal">1 year free updates</Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-5 p-0 flex items-end justify-end">
        <Button
          size="lg"
          color="black"
          className={`buy-button-${index} text-xl h-[3rem] w-[3rem] rounded-full shadow-xl`}
        >
          <NavigateNext />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FeatureCards;
