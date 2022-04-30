import DefaultLayout from "@/components/layouts/DefaultLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="wrapper">
        <h1>Hello</h1>
      </div>
    </DefaultLayout>
  );
};

export default Home;
