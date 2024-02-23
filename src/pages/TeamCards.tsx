import "../app/globals.css";
import { people } from "../app/constants";
import { Avatar } from "@mui/material";

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
    <div
      id="meettheteam"
      className="py-24 sm:py-32 border-b-4 bg-black section-border-gradient"
    >
      <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 ">
        <div className="my-[5rem]">
          <h1 className="text-6xl font-bold text-[#031c64] text-center">
            Our Team
          </h1>
          <p className="my-5 text-gray-500 text-center">
            We are passionate about great software, developer tools, and open
            source.
          </p>
        </div>
        <div
          role="list"
          className="grid gap-x-5 gap-y-8 sm:grid-cols-5 sm:gap-y-9 xl:col-span-2"
        >
          {sortedPeople.map((person, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-[#252526] rounded-lg shadow "
            >
              <div className="flex flex-col items-center pb-10">
                <div className="m-6">
                  <Avatar sx={{ bgcolor: "red" }}>OP</Avatar>
                </div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {person.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
