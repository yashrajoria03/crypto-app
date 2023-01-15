import React from "react";
// import logo from "";

const Navbar = () => {
  // <style></style>;
  return (
    <nav className="flex  bg-white items-center justify-between w-full mx-auto text-black rounded-tl-xl rounded-tr-xl h-16  px-4 shadow-lg">
      <h1 className="text-blue-600 text-3xl font-semibold">CRYPTOCAVE</h1>
      {/* <span className="border border-brand rounded-md max-w-fit"> */}
      <input
        type="search"
        name="searchBar"
        id="searchbar"
        placeholder="Search for coins here...."
        className="ml-24 w-[400px] py-1 px-2 border border-brand rounded-md text-black outline-0 "
      />
      {/* </span> */}
      <div className="flex flex-rows space-around text-black gap-4 space-x-2 mr-8 ">
        <button className="text-mid hover:text-blue-600 hover:border-b-2  hover:border-b-blue-600 text-sm  h-[64px] p-2 transition-all delay-[0.1s] ">
          Home
        </button>
        <button className="text-mid hover:text-blue-600 hover:border-b-2  hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Market
        </button>
        <button className="text-mid hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Contact Us
        </button>
        <button className="text-mid hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Join Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
