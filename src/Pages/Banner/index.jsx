import React from "react";
import bannerImg from "../../assets/Banner/Banner.png";

const Banner = () => {
  return (
    <>
      <div className=" relative">
        <div className="h-full w-full custom_shadow02 rounded-3xl ">
          <img src={bannerImg} alt="" className="rounded-3xl absolute" />
          <p className="relative text-xl text-white03 font-poppins p-10">
            September 1, 2025
          </p>
          <h1 className="relative text-6xl font-extrabold text-white font-poppins mt-10 ml-10">
            Welcome Back, Jhon
          </h1>
          <p className="relative text-xl text-white03 font-poppins  mt-2 ml-10">
            Alwyes Stay Uploaded your Students Portal
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
