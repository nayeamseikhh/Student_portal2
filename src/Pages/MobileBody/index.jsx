import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCoins } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { RiCoinsFill } from "react-icons/ri";
import people01 from "../../assets/People/people01.jpeg";
import people02 from "../../assets/People/people02.jpeg";
import people03 from "../../assets/People/people03.jpeg";

const MobileBody = () => {
  return (
    <div className="mt-5">
      {/* top section */}
      <div>
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
                  <h6 className="font-bold text-center text-[18px]">
                    $ 16,000
                  </h6>
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
        {/* Enrolled Course */}
        <div className="mt-5">
          <div>
            <div className="mt-8">
              <div className="font-poppins text-[18px] text-black font-bold flex justify-between">
                <h6>Enrolled Course</h6>
                <h6 className="text-primary cursor-pointer hover:text-shadow-2xs">
                  See all
                </h6>
              </div>
              <div className=" gap-x-5">
                <div className="lg:h-50 lg:w-120 mt-4 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg">
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
                <div className="lg:h-50 lg:w-120 mt-4 rounded-4xl  custom_shadow02  border-6 border-transparent hover:border-primary transition-all ease-linear duration-300 bg-mainbg ">
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
        </div>
      </div>
      {/* Bottom section  */}
      <div className="mt-5">
        <section>
          <div>
            <h6 className="font-poppins text-[18px] text-black font-bold">
              Course Instractor
            </h6>
            <div className="flex mt-4 justify-between">
              <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
                <img
                  src={people01}
                  alt="PeopleImages"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
                <img
                  src={people02}
                  alt="PeopleImages"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="h-22 w-22 rounded-full border-5 border-primary custom_shadow02 cursor-pointer hover:custom_shadow03 text-center transition-all ease-linear duration-300">
                <img
                  src={people03}
                  alt="PeopleImages"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="font-poppins text-[18px] text-black font-bold flex justify-between mt-4">
              <h6>Daily Notice</h6>
              <h6 className="text-primary cursor-pointer hover:text-shadow-2xs ">
                See all
              </h6>
            </div>
            <div>
              <div className="mt-4 custom_shadow02  w-full rounded-4xl border-6 border-transparent hover:border-primary transition-all ease-linear duration-300">
                <div className="p-5">
                  <h6 className="font-semibold text-[16px]">
                    Prellm Payment due
                  </h6>
                  <p
                    className="cla
                        my-4 text-l text-white02"
                  >
                    Lorem ipsum dolor sit amet, dolor sit amet quisquam sint ea
                    ut laborum lorem.
                  </p>
                  <span className="text-primary text-[16px] font-semibold cursor-pointer">
                    See more
                  </span>
                </div>
                <div className="p-5">
                  <h6 className="font-semibold text-[16px]">Exam Schedule</h6>
                  <p
                    className="cla
                        my-4 text-l text-white02"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam id et fuga.
                  </p>
                  <span className="text-primary text-[16px] font-semibold cursor-pointer">
                    See more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileBody;
