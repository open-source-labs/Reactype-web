import Image from "next/image";

import { github, linkedin } from "../../../public";
import { people } from "../constants";

interface People {
  name: string;
  github?: string;
  linkedin?: string;
}

function filterAndSortContributors(contributors: People[]): People[] {
  return contributors.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

const sortedPeople = filterAndSortContributors(people);

const Team = () => {
  return (
    <div id="meettheteam" className=" py-24 sm:py-32">
      <div className="mx-auto  max-w-7xl gap-x-8 gap-y-20 px-6">
        <div className="my-10 ">
          <h1 className="text-6xl font-bold text-left">Our Team</h1>
          <p className="my-5 text-gray-500">
            Check out our wonderful contributors
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-5 gap-y-8 sm:grid-cols-5 sm:gap-y-9 xl:col-span-2"
        >
          {sortedPeople.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-3">
                <div>
                  <h3 className="text-lg font-medium leading-7 tracking-tight text-gray-300">
                    {person.name}
                  </h3>
                  <div className="flex gap-x-4 my-4 items-center">
                    <a href={person.github} target="_blank">
                      <Image width={30} height={30} src={github} alt="logo" />
                    </a>
                    <a href={person.linkedin} target="_blank">
                      <Image width={30} height={30} src={linkedin} alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;
