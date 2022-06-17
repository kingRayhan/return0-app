import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";
import { AiFillPlayCircle, AiFillPlusCircle } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <header className="bg-gray padding py-10 md:py-20 index-hero">
        <h1 className="heading">Hello</h1>
        <h2 className="subheading">Hello</h2>
        <button className="btn-primary">
          <AiFillPlayCircle />
          <span>Continue Watching</span>
        </button>
        <button className="btn-secondary">
          <AiFillPlusCircle /> <span>Add to watch list</span>
        </button>
      </header>
    </DefaultLayout>
  );
};

export default Home;
