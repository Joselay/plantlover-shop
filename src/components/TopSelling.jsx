import React from "react";
import TopSellPlant from "./TopSellPlant";

const TopSelling = ({ src, initialX }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto ">
      <TopSellPlant initialX={initialX} src={src} />
    </div>
  );
};

export default TopSelling;
