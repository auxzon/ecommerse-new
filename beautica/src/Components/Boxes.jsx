import React from "react";
import lips from "../assets/images/lips.jpg";
import tool from "../assets/images/tools.jpg";
import product from "../assets/images/face.jpg";

function Boxes() {
  return (
    <div className="flex flex-col md:flex-row justify-around  py-8 md:px-24 gap-4 px-5 ">
      <div className="relative flex flex-col items-center md:w-96">
        <img src={lips} alt="Lips" className="w-full" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
          LIPS
        </p>
      </div>
      <div className="relative flex flex-col items-center md:w-96">
        <img src={tool} alt="Tools" className="w-full" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
          TOOLS
        </p>
      </div>
      <div className="relative flex flex-col items-center md:w-96">
        <img src={product} alt="Face" className="w-full" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
          FACE
        </p>
      </div>
    </div>
  );
}

export default Boxes;
