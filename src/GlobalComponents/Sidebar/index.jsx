import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineSpaceDashboard, MdPayments } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import { TbNotes } from "react-icons/tb";
import { GrDocumentMissing } from "react-icons/gr";
import { LuCircleEqual } from "react-icons/lu";
import { BiMessageAltDetail } from "react-icons/bi";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className=" w-70 h-full rounded-3xl custom_sidebar custom_shadow02 ">
        <div className="p-5 ">
          <div className="mx-auto h-40 w-40 my-5 rounded-3xl bg-darkbg flex justify-center">
            <div className=" text-white mt-5">
              <FaGraduationCap size={120} />
            </div>
          </div>
          <div className="text-white03 font-semibold ml-5">
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <MdOutlineSpaceDashboard className="size-7" />
              <p className="text-[16px] ">Dashboard</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <MdPayments className="size-7" />
              <p className="text-[16px] ">Payment Info</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <HiPencil className="size-7" />
              <p className="text-[16px] ">Registration</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <TbNotes className="size-7" />
              <p className="text-[16px] ">Courses</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <GrDocumentMissing className="size-7" />
              <p className="text-[16px] ">Drop Semister</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <LuCircleEqual className="size-7" />
              <p className="text-[16px] ">Result</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <BiMessageAltDetail className="size-7" />
              <p className="text-[16px] ">Notice</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-6 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer">
              <RiContactsBook2Fill className="size-7" />
              <p className="text-[16px] ">Schedule</p>
            </div>
            <div className="font-poppins flex gap-x-5 mt-25 mb-5 items-center hover:text-white transition-all ease-linear duration-200 cursor-pointer ">
              <IoLogOut className="size-7" />
              <p className="text-[16px] ">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
