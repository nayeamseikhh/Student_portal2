import { IoIosNotifications, IoIosSearch } from "react-icons/io";
import profileImg from "../../assets/Profile/profile.jpg";

const Header = () => {
  return (
    <>
      <div className=" mb-10">
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-x-5">
            <input
              type="text"
              placeholder="Search"
              className=" h-14 w-100 rounded-2xl bg-white custom_shadow02 transition-all ease-linear duration-300 hover:border-2"
            />
            <button className="bg-primary text-white font-bold text-xl h-14 w-50 rounded-2xl custom_shadow02 text-center hover:bg-transparent transition-all ease-linear duration-300 hover:text-primary hover:border-2">
              Find
            </button>
          </div>

          {/* Right Part */}
          <div className="flex justify-end">
            <div className="flex  gap-x-20">
              <div className="flex gap-x-4 items-center">
                <div className="h-15 w-15 rounded-full border-4 border-primary custom_shadow02">
                  <img
                    src={profileImg}
                    alt=""
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-semibold font-poppinst text-[20px]">
                    Jhon Doe
                  </h6>
                  <p className="text-whitre02 text-[16px]">3rd year</p>
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
