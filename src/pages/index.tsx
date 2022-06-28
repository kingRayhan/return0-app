import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import { AiFillPlayCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { BsCalendar2 } from "react-icons/bs";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      {/* -------------- Home Hero section -------------- */}
      <header className="padding py-10 md:py-20 index-hero">
        <div className="w-full md:w-4/5 lg:w-2/3 flex flex-col gap-5">
          <span className="text-primary-green">JavaScript</span>
          <h1 className="heading">Kotlin tutorial for absolute Beginner</h1>

          <div className="hh_course_details_short">
            <div>
              <MdVideoLibrary />
              <span>11 episodes</span>
            </div>
            <div>
              <FiClock />
              <span>11 episodes</span>
            </div>
            <div>
              <BsCalendar2 />
              <span>5 months ago</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-5">
            <button className="btn-primary">
              <AiFillPlayCircle />
              <span>Continue Watching</span>
            </button>
            <button className="btn-secondary">
              <AiFillPlusCircle /> <span>Add to watch list</span>
            </button>
          </div>
        </div>
      </header>

      {/* -------------- Course Details section -------------- */}
      <section className="padding py-10 grid grid-cols-2">
        <div className="">
          <div>
            <h2 className="subheading">About this course</h2>
            <p>
              Nuxt is a framework built on Vue that makes development of
              applications a breeze. In this series, we{"'"}ll get set up with a
              fresh project and work through everything you need to know to
              start building with Nuxt.
            </p>
          </div>
          <div>
            <h2 className="subheading">Course Instructor</h2>
            <div className="flex items-center gap-5">
              <div className="rounded-full-img">
                <Image
                  src="/static/images/profile.jpg"
                  width={50}
                  height={50}
                  alt=""
                />
              </div>
              <div className="">
                <h2 className="no-underline">Rayhan Mojumdar</h2>
                <p>
                  Hey, I{"'"}m the founder of Codecourse and a full-stack
                  developer of over 10 years.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
