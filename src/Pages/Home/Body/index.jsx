import React from "react";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const Body = () => {
  return (
    <>
      <div className="grid grid-cols-[2.5fr_1fr] gap-x-10 mt-25">
        <LeftLayout />
        <RightLayout />
      </div>
    </>
  );
};

export default Body;
