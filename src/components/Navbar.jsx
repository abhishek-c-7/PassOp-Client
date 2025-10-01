import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white m-0 ">
      <div className="mycontainer  flex justify-around items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-2xl">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        <a href="https://github.com/abhishek-c-7/PassOp-Client" target="_blank">
          <button className="text-white bg-green-700 my-5 rounded-full flex justify-between items-center outline ring-white ring-1">
            <img
              className="invert w-10 p-1"
              src="icons/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-2">Github</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
