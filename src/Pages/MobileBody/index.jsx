import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiCoinsFill } from "react-icons/ri";

const MobileBody = () => {
  return (
    <div className="mt-5">
      <div>
        <div>
          <h6 className="font-poppins text-[18px] text-black font-bold">
            Fianance
          </h6>
        </div>
        <div className="flex justify-center gap-x-12 mt-5">
          <div className="cursor-pointer custom_shadow02 h-50 md:h-55 w-65 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
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
          <div className="cursor-pointer custom_shadow02 h-50 md:h-55 w-65 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
            <div>
              <div className="mt-5">
                <RiCoinsFill
                  size={70}
                  color="#925fe2"
                  className=" text-shadow-purple-400 mx-auto "
                />
              </div>
              <div className="mt-5  ">
                <h6 className="font-bold text-center text-[18px]">$ 16,000</h6>
                <p className="text-white02 mt-2 text-center text-[14px]">
                  Total Paid
                </p>
              </div>
            </div>
          </div>
          {/* <div className="cursor-pointer custom_shadow02 h-55 w-70 rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
            <div>
              <div className="mt-5 ">
                <BsGraphUpArrow
                  size={70}
                  color="#925fe2"
                  className=" text-shadow-purple-400 flep  mx-auto"
                />
              </div>
              <div className="mt-5  ">
                <h6 className="font-bold text-center text-[18px]">$ 16,000</h6>
                <p className="text-white02 mt-2 text-center text-[14px]">
                  Total Paid
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileBody;
