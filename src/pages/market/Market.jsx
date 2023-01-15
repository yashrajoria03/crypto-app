import React from "react";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";

const Market = () => {
  return (
    <div className="min-h-fit pb-3 bg-background m-2 rounded-tl-xl rounded-tr-xl w-[98%] mx-auto">
      <Navbar />
      <List />
    </div>
  );
};

export default Market;
