import "../app/globals.css";
import { people } from "../app/constants";
import { Avatar } from "@mui/material";
import { avatarColorArray } from "@/app/style";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import cheerio from "cheerio";

interface People {
  firstName: string;
  lastName: string;
  github?: string;
  linkedin?: string;
}

const filterAndSortContributors = (contributors: People[]): People[] =>
  contributors.sort((a, b) => {
    const nameA = a.firstName.toLowerCase();
    const nameB = b.firstName.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

const Team = () => {
  const sortedPeople = filterAndSortContributors(people);

  return (
    <div
      id="meettheteam"
      className="py-24 sm:py-32 border-b-4 bg-black section-border-gradient"
    >
      <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 ">
        <div className="my-[5rem]">
          <h1 className="text-6xl font-bold white-text-grad  text-center">
            Our Team
          </h1>
          <p className="my-5 text-xl leading-8 text-[#86868b] text-center">
            We are passionate about great software, developer tools, and open
            source.
          </p>
        </div>
        <div
          role="list"
          className="grid gap-x-5 gap-y-8 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 sm:gap-y-9 xl:col-span-2"
        >
          {sortedPeople.map((person, index) => {
            const randomAvatarColor =
              avatarColorArray[
                Math.floor(Math.random() * avatarColorArray.length)
              ];
            return (
              <div
                key={index}
                className="w-full max-w-sm bg-[#252526] rounded-lg shadow "
              >
                <div className="flex flex-col items-center pb-10">
                  <div className="m-6">
                    <Avatar sx={{ bgcolor: randomAvatarColor }}>
                      {person.firstName[0]}
                      {person.lastName[0]}
                    </Avatar>
                  </div>
                  <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
                    {person.firstName}
                  </h5>
                  <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">
                    {person.lastName}
                  </h5>
                  <span className="text-sm text-[#86868b] mt-2">
                    Software Engineer
                  </span>
                  <div className="flex flex-col mt-4 md:mt-6 ">
                    <div className="flex items-center">
                      <a
                        href={person.github}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white"
                      >
                        <GitHub
                          fontSize="large"
                          className="hover:text-[#86868b]"
                        />
                      <span className="hover:underline ml-2">GitHub</span>
                      </a>
                    </div>
                    <div className="flex items-center mt-2 text-white">
                      <a
                        href={person.linkedin}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center "
                      >
                        <LinkedIn
                          fontSize="large"
                          className="hover:text-[#86868b]"
                        />
                      <span className="ml-2 hover:underline">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
