import React from "react";
import bannerImg from "../../assets/Banner/Banner.png";

const Banner = () => {
  return (
    <>
      <div className="h-45 w-350 relative custom_shadow">
        <div className="relative">
          <img
            src={bannerImg}
            alt=""
            className=" h-45 w-full object-cover rounded-2xl"
          />
          <div className="absolute top-5 left-5 ">
            <div>
              <p className=" text-[14px] text-white03 font-poppins ">
                September 1, 2025
              </p>
              <h1 className=" text-4xl font-extrabold text-white font-poppins mt-10">
                Welcome Back, Jhon
              </h1>
              <p className=" text-[14px] text-white03 font-poppins  mt-5  ">
                Alwyes Stay Uploaded your Students Portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
