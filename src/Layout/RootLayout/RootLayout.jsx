import { Outlet } from "react-router-dom";
import Header from "../../GlobalComponents/Header";

const RootLayout = () => {
  return (
    <>
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
