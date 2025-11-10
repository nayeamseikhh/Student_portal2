import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import profileImg from "../../assets/Profile/profile.jpg";
import { IoIosNotifications, IoIosSearch } from "react-icons/io";

const MobileHeader = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <div className="text-start items-center flex">
            <GiHamburgerMenu size={20} />
          </div>
          <div className="text-end">
            <div className="flex justify-end">
              <div className="flex  gap-x-5 ">
                <div className="flex gap-x-2 items-center">
                  <div className="text-end">
                    <h6 className="font-bold font-poppinst text-[16px]">
                      Jhon Doe
                    </h6>
                    <p className="text-whitre02 text-[12px]">3rd year</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border-4 border-primary custom_shadow02">
                    <img
                      src={profileImg}
                      alt=""
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
