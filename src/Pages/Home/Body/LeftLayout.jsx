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
            <h6 className="font-poppins text-2xl text-black font-bold">
              Fianance
            </h6>
          </div>
          <div className="flex justify-between mt-5">
            <div className=" custom_shadow02 h-70 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-8 ml-22">
                  <FaCoins
                    size={100}
                    color="#925fe2"
                    className=" text-shadow-purple-400  "
                  />
                </div>
                <div className="mt-10 text-[25px] ">
                  <h6 className="font-bold text-center">$ 6,000</h6>
                  <p className="text-white02 mt-2 text-center">Total Payable</p>
                </div>
              </div>
            </div>
            <div className=" custom_shadow02 h-70 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-8 ml-22">
                  <RiCoinsFill
                    size={100}
                    color="#925fe2"
                    className=" text-shadow-purple-400 flep "
                  />
                </div>
                <div className="mt-10 text-[25px] ">
                  <h6 className="font-bold text-center">$ 16,000</h6>
                  <p className="text-white02 mt-2 text-center">Total Paid</p>
                </div>
              </div>
            </div>
            <div className=" custom_shadow02 h-70 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
              <div>
                <div className="mt-8 ml-22">
                  <BsGraphUpArrow
                    size={100}
                    color="#925fe2"
                    className=" text-shadow-purple-400 flep "
                  />
                </div>
                <div className="mt-10 text-[25px] ">
                  <h6 className="font-bold text-center">$ 16,000</h6>
                  <p className="text-white02 mt-2 text-center">Total Paid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="font-poppins text-2xl text-black font-bold flex justify-between">
            <h6>Enrolled Course</h6>
            <h6 className="text-primary cursor-pointer hover:text-shadow-2xs">
              See all
            </h6>
          </div>
          <div className="flex gap-x-5">
            <div className="h-50 w-120 mt-5 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg">
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="p-8">
                  <h6 className="text-2xl font-semibold text-primary font-poppins">
                    Object Oriented Programming
                  </h6>
                  <button className="bg-primary text-white font-bold text-xl px-10 py-2 rounded-2xl mt-5 text-center w-50">
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
            <div className="h-50 w-120 mt-5 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg">
              <div className="grid grid-cols-[2fr_1fr]">
                <div className="p-8">
                  <h6 className="text-2xl font-semibold text-primary font-poppins">
                    Object Oriented Programming
                  </h6>
                  <button className="bg-primary text-white font-bold text-xl px-10 py-2 rounded-2xl mt-5 text-center w-50">
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
