import React from "react";

function Bio() {
  return (
    <div className="w-full h-36 flex flex-col text-left py-6 md:h-24 p-2 md:flex-row items-left justify-between pl-10 md:justify-between md:items-center  md:px-6 bg-[#f3f3f8]">
      {/* -------------- */}
      <div className="flex flex-col md:flex-col justify-center">
        <p className="text-black">Good morning ur name</p>
        <p className="text-gray-400">
          Here's what's happening with your store today.
        </p>
      </div>
      {/* ----------------- */}
      <div className="flex py-4">
        <input type="text" className="" />
      </div>

      {/* ---------------------- */}
      <div className="flex  ">
        <button className="w-32 h-6 bg-green-300">AddProduct+</button>
        <i className="ri-calendar-2-line"></i>
      </div>
    </div>
  );
}

export default Bio;
