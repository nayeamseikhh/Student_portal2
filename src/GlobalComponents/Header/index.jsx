import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import profileImg from "../../assets/Profile/profile.jpg";

const Header = () => {
  return (
    <>
      <div className="mb-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-5">
            <input
              type="text"
              placeholder="Search"
              className=" h-9 w-100 rounded-2xl bg-white custom_shadow02 transition-all ease-linear duration-300 hover:border-2"
            />
            <button className="bg-primary text-white font-bold text-[16px] h-9 w-40 rounded-2xl custom_shadow02 text-center hover:bg-transparent transition-all ease-linear duration-300 hover:text-primary hover:border-2  cursor-pointer">
              Find
            </button>
          </div>

          {/* Right Part */}
          <div className="flex justify-end">
            <div className="flex  gap-x-20">
              <div className="flex gap-x-4 items-center">
                <div className="h-10 w-10 rounded-full border-4 border-primary custom_shadow02">
                  <img
                    src={profileImg}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-bold font-poppinst text-[16px]">
                    Jhon Doe
                  </h6>
                  <p className="text-whitre02 text-[12px]">3rd year</p>
                </div>
              </div>
              <div>
                <div className="relative">
                  <IoIosNotifications size={30} />
                  <span className="absolute h-2 w-2 rounded-full bg-red-600 top-3 left-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
