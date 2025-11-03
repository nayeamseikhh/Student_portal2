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
      <div className=" w-80 rounded-3xl custom_sidebar custom_shadow02 ">
        <div className="p-10 ">
          <div className="ml-5 h-50 w-50 rounded-3xl bg-darkbg flex justify-center">
            <div className=" text-white mt-5">
              <FaGraduationCap size={150} />
            </div>
          </div>
          <div className="text-white03 font-semibold">
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <MdOutlineSpaceDashboard className="size-10" />
              <p className="text-xl ">Dashboard</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <MdPayments className="size-10" />
              <p className="text-xl ">Payment Info</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <HiPencil className="size-10" />
              <p className="text-xl ">Registration</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <TbNotes className="size-10" />
              <p className="text-xl ">Courses</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <GrDocumentMissing className="size-10" />
              <p className="text-xl ">Drop Semister</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <LuCircleEqual className="size-10" />
              <p className="text-xl ">Result</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <BiMessageAltDetail className="size-10" />
              <p className="text-xl ">Notice</p>
            </div>
            <div className="font-poppins flex gap-x-5 my-10 items-center hover:text-white transition-all ease-linear duration-200">
              <RiContactsBook2Fill className="size-10" />
              <p className="text-xl ">Schedule</p>
            </div>
            <div className="font-poppins flex gap-x-5 mt-25 items-center hover:text-white transition-all ease-linear duration-200">
              <IoLogOut className="size-10" />
              <p className="text-xl ">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
