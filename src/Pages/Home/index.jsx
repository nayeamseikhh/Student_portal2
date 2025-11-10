import React from "react";
import Banner from "../Banner";
import Sidebar from "../../GlobalComponents/Sidebar";
import Header from "../../GlobalComponents/Header";
import Body from "./Body";

const Home = () => {
  return (
    <>
      <div className="max-w-[1920px]">
        {/* <div className="my-6 mx-6  custom_shadow max-w-[1820px]  rounded-2xl bg-white">
          <div className="grid grid-cols-[.4fr_2fr] p-8 gap-x-15  rounded-2xl bg-white max-w-[1620px]">
            <div>
              <Sidebar />
            </div>
            <div>
              <Header />
              <Banner />
              <Body />
            </div>
          </div>
        </div> */}
        <div className="max-w-[1820px] bg-white mx-auto mt-8 rounded-2xl custom_shadow">
          <div className="grid grid-cols-[.4fr_2fr] p-8 gap-x-15 ">
            <div>
              <Sidebar />
            </div>
            <div>
              <Header />
              <Banner />
              <Body />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
