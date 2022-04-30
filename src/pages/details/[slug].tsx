import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";

const chapters = [
  {
    name: "Prerequisites and Setup",
    lessons: [
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
    ],
  },
  {
    name: "Prerequisites and Setup",
    lessons: [
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
    ],
  },
  {
    name: "Prerequisites and Setup",
    lessons: [
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "Initial Environment Setup and Composer",
        duration: "5:40",
      },
      {
        name: "An Animated Introduction to MVC",
        duration: "2:40",
      },
    ],
  },
];

const DetailsCard = () => {
  return (
    <div className="bg-gray-800 h-80 p-14 flex flex-col justify-between">
      <div>
        <div>
          <a href="#" className="text-emerald-400 font-mono uppercase">
            Javascript
          </a>
        </div>
        <h1 className="text-4xl">Kotlin tutorial for absolute Begainner</h1>

        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1V17V1ZM15 1V17V1ZM1 5H5H1ZM15 5H19H15ZM1 9H19H1ZM1 13H5H1ZM15 13H19H15ZM2 17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V2C19 1.73478 18.8946 1.48043 18.7071 1.29289C18.5196 1.10536 18.2652 1 18 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17Z"
                stroke="#E2E8F0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>11 episodes</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 6V10L13.6667 13L10.6667 6ZM19.6667 10C19.6667 11.1819 19.4339 12.3522 18.9816 13.4442C18.5293 14.5361 17.8664 15.5282 17.0306 16.364C16.1949 17.1997 15.2028 17.8626 14.1108 18.3149C13.0189 18.7672 11.8486 19 10.6667 19C9.48479 19 8.31447 18.7672 7.22254 18.3149C6.13061 17.8626 5.13845 17.1997 4.30273 16.364C3.467 15.5282 2.80406 14.5361 2.35177 13.4442C1.89948 12.3522 1.66669 11.1819 1.66669 10C1.66669 7.61305 2.6149 5.32387 4.30273 3.63604C5.99055 1.94821 8.27974 1 10.6667 1C13.0536 1 15.3428 1.94821 17.0306 3.63604C18.7185 5.32387 19.6667 7.61305 19.6667 10Z"
                stroke="#E2E8F0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>11 episodes</p>
          </div>
          <div className="flex items-center gap-2">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.33334 5V1V5ZM14.3333 5V1V5ZM5.33334 9H15.3333H5.33334ZM3.33334 19H17.3333C17.8638 19 18.3725 18.7893 18.7476 18.4142C19.1226 18.0391 19.3333 17.5304 19.3333 17V5C19.3333 4.46957 19.1226 3.96086 18.7476 3.58579C18.3725 3.21071 17.8638 3 17.3333 3H3.33334C2.80291 3 2.2942 3.21071 1.91913 3.58579C1.54406 3.96086 1.33334 4.46957 1.33334 5V17C1.33334 17.5304 1.54406 18.0391 1.91913 18.4142C2.2942 18.7893 2.80291 19 3.33334 19Z"
                stroke="#E2E8F0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>11 episodes</p>
          </div>
        </div>
      </div>

      <div className=" mt-6 flex gap-4">
        <a href="#" className=" inline-flex items-center gap-2 border-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <p>Continue Watching</p>
        </a>
        <a href="#" className=" inline-flex items-center gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>Continue Watching</p>
        </a>
      </div>
    </div>
  );
};

const Instructor = () => {
  return (
    <div className="flex gap-4 items-center">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src="https://randomuser.me/api/portraits/men/86.jpg"
        alt="instructor"
      />

      <div>
        <h3 className="text-sm font-semibold">Alex Garrett-Smith</h3>
        <p className="text-slate-300">
          Hey, I&apos;m the founder of Codecourse and a full-stack developer of
          over 10 years.
        </p>
      </div>
    </div>
  );
};

const Curriculum = () => {
  return <pre>{JSON.stringify(chapters, undefined, 2)}</pre>;
};

const CourseDetail = () => {
  return (
    <DefaultLayout>
      <div className="wrapper">
        <DetailsCard />
        <div className="grid grid-cols-2 gap-10 mt-6">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="underline text-lg font-semibold">
                About this course
              </h2>
              <div>
                <p className="text-slate-300">
                  Nuxt is a framework built on Vue that makes development of
                  applications a breeze. In this series, we&apos;ll get set up
                  with a fresh project and work through everything you need to
                  know to start building with Nuxt.
                </p>
              </div>
            </div>
            <div>
              <h2 className="underline text-lg font-semibold">Instructor(s)</h2>
              <div className="flex flex-col gap-4 mt-2">
                <Instructor />
                <Instructor />
                <Instructor />
              </div>
            </div>
          </div>
          <div>
            <h2>Curriculumn</h2>
            <Curriculum />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CourseDetail;
