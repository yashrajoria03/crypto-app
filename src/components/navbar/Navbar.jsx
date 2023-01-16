import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import logo from "";

const Navbar = () => {
  // <style></style>;
  return (
    <nav className="flex  bg-white items-center justify-between text-black  h-16  px-4 shadow-lg">
      <h1 className="text-blue-600 text-3xl font-semibold">CRYPTOCAVE</h1>
      {/* <span className="border border-brand rounded-md max-w-fit"> */}
      {/* <input
        type="search"
        name="searchBar"
        id="searchbar"
        placeholder="Search for coins here...."
        className="ml-24 w-[400px] py-1 px-2 border border-brand rounded-md text-black outline-0 "
      /> */}
      {/* </span> */}
      <div className="flex flex-rows space-around  gap-4 space-x-2 mr-8   ">
        <button className="text-overlay font-medium hover:text-blue-600 hover:border-b-2  hover:border-b-blue-600 text-sm  h-[64px] p-2 transition-all delay-[0.1s] ">
          Home
        </button>
        <button className="text-overlay font-medium hover:text-blue-600 hover:border-b-2  hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Market
        </button>
        <button className="text-overlay font-medium hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Contact Us
        </button>
        <button className="text-overlay font-medium hover:text-blue-600 hover:border-b-2 hover:border-b-blue-600 text-sm h-[64px] p-2 transition-all delay-[0.1s] ">
          Join Us
        </button>
      </div>
      <div className="flex flex-row items-center justify-around space-x-7">
        <span id="notification">
          <FontAwesomeIcon icon={faBell} color="#999999" />
        </span>
        <span className="flex flex-row items-center space-x-2">
          <img
            src="https://picsum.photos/40/40"
            alt="avatar"
            className="rounded-full"
          />
          <FontAwesomeIcon icon={faCaretDown} color="#999999" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
