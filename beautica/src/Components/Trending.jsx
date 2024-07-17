import React from "react";
import image1 from "../assets/images/home-bottom-banner-1-cp.jpg";
import image2 from "../assets/images/home-bottom-banner-2-cp.jpg";

const Trending = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:mb-16">
      <div className="grid gap-4 md:grid-cols-2">
        {/* First Box */}
        <div className="p-4 border rounded-lg shadow-md">
          <img
            src={image1}
            alt="Milancelos Product"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-xl font-bold text-red-500">
              #TREND: MILANCELOS
            </h2>
            <p className="text-gray-600">
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia andos tincidunt risus de consequat velit.
              Quisquemus sodales suscipit tortors...
            </p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Second Box */}
        <div className="p-4 border rounded-lg shadow-md">
          <img
            src={image2}
            alt="Cosmopolis Product"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-red-500">#COSMOPOLIS</h2>
            <p className="text-gray-600">
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia andos tincidunt risus de consequat velit.
              Quisquemus sodales suscipit tortors...
            </p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
