import React from "react";
import Banner from "../Banner";
import Sidebar from "../../GlobalComponents/Sidebar";
import Header from "../../GlobalComponents/Header";
import Body from "./Body";
import MobileHeader from "../../GlobalComponents/MobileHeader";
import MobileBanner from "../MobileBanner";
import MobileBody from "../MobileBody";

const Home = () => {
  return (
    <>
      <div className="max-w-[1920px]">
        <div className="max-w-120 md:max-w-180 sm:max-w-150 lg:max-w-[1820px] bg-white mx-auto mt-8 rounded-2xl custom_shadow">
          <div className="lg:grid grid-cols-[.4fr_2fr] lg:p-8 p-5 gap-x-15 ">
            <div className="hidden lg:block">
              <div>
                <Sidebar />
              </div>
            </div>
            <div>
              <div className=" lg:hidden">
                <MobileHeader />
                <MobileBanner />
                <MobileBody />
              </div>
              <div className="hidden lg:block">
                <Header />
                <Banner />
                <Body />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
