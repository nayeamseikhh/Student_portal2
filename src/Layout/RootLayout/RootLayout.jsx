import { Outlet } from "react-router-dom";
import Header from "../../GlobalComponents/Header";

const RootLayout = () => {
  return (
    <>
      <div>
        <div className=" my-20 mx-50 rounded-2xl custom_shadow bg-white ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
