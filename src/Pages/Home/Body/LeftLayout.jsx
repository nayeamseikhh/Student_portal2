import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiCoinsFill } from "react-icons/ri";

const LeftLayout = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <h6 className="font-poppins text-[18px] text-black font-bold">
              Fianance
            </h6>
          </div>
          <div className="flex justify-between mt-5">
            <div className="cursor-pointer custom_shadow02 h-55 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-5">
                  <FaCoins
                    size={70}
                    color="#925fe2"
                    className=" text-shadow-purple-400 mx-auto "
                  />
                </div>
                <div className="mt-5">
                  <h6 className="font-bold text-center text-[18px]">$ 6,000</h6>
                  <p className="text-white02 mt-2 text-center text-[14px]">
                    Total Payable
                  </p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer custom_shadow02 h-55 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-5">
                  <RiCoinsFill
                    size={70}
                    color="#925fe2"
                    className=" text-shadow-purple-400 mx-auto "
                  />
                </div>
                <div className="mt-5  ">
                  <h6 className="font-bold text-center text-[18px]">
                    $ 16,000
                  </h6>
                  <p className="text-white02 mt-2 text-center text-[14px]">
                    Total Paid
                  </p>
                </div>
              </div>
            </div>
            <div className="cursor-pointer custom_shadow02 h-55 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-5 ">
                  <BsGraphUpArrow
                    size={70}
                    color="#925fe2"
                    className=" text-shadow-purple-400 flep  mx-auto"
                  />
                </div>
                <div className="mt-5  ">
                  <h6 className="font-bold text-center text-[18px]">
                    $ 16,000
                  </h6>
                  <p className="text-white02 mt-2 text-center text-[14px]">
                    Total Paid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="font-poppins text-[18px] text-black font-bold flex justify-between">
            <h6>Enrolled Course</h6>
            <h6 className="text-primary cursor-pointer hover:text-shadow-2xs">
              See all
            </h6>
          </div>
          <div className="flex gap-x-5">
            <div className="h-50 w-120 mt-4 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg">
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="p-8">
                  <h6 className="text-[20px] font-semibold text-primary font-poppins">
                    Object Oriented Programming
                  </h6>
                  <button className="bg-primary text-white font-bold text-[16px] px-20 py-2 rounded-2xl mt-5 text-center custom_shadow02  hover:bg-transparent transition-all ease-linear duration-300 hover:text-primary cursor-pointer">
                    View
                  </button>
                </div>
                <div>
                  <HiOutlineComputerDesktop
                    size={120}
                    className="text-primary mt-8"
                  />
                </div>
              </div>
            </div>
            <div className="h-50 w-120 mt-4 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg ">
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="p-8">
                  <h6 className="text-[20px] font-semibold text-primary font-poppins">
                    Object Oriented Programming
                  </h6>
                  <button className="bg-primary text-white font-bold text-[16px] px-20 py-2 rounded-2xl mt-5 text-center custom_shadow02  hover:bg-transparent transition-all ease-linear duration-300 hover:text-primary cursor-pointer">
                    View
                  </button>
                </div>
                <div>
                  <HiOutlineComputerDesktop
                    size={120}
                    className="text-primary mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftLayout;
