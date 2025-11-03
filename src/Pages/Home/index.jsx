import React from "react";
import Banner from "../Banner";
import Sidebar from "../../GlobalComponents/Sidebar";
import Header from "../../GlobalComponents/Header";
import Body from "./Body";

const Home = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-[1fr_3.5fr] p-8">
          <div>
            <Sidebar />
          </div>
          <div className="pl-4">
            <Header />
            <Banner />
            <Body />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
