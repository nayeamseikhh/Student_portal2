import React from "react";
import LeftLayout from "./LeftLayout";
import RightLayout from "./RightLayout";

const Body = () => {
  return (
    <>
      <div className="grid grid-cols-[2fr_1fr] gap-x-20 mt-5">
        <LeftLayout />
        <RightLayout />
      </div>
    </>
  );
};

export default Body;
