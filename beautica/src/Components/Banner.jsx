import React, { useState } from "react";
// import image1 from "../assets/images/image1.jpg";
// import image2 from "../assets/images/image2.jpg";
// import image3 from "../assets/images/image3.jpg";
import image1 from "../assets/images/home-slider-1-new.jpg";
import image2 from "../assets/images/home-slider-2-new.jpg";
import image3 from "../assets/images/home-slider-3-new.jpg";

const images = [image1, image2, image3];

function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleShopNowClick = () => {
    // Replace with actual logic for SHOP NOW button
    console.log("SHOP NOW clicked");
    // Example: navigate to a new page or perform an action
  };

  return (
    <div className="relative w-full h-[520px] md:h-[560px]">
      <img
        src={images[currentImageIndex]}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      {currentImageIndex === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white  p-6 text-center md:w-[550px] md:h-80 flex flex-col justify-center items-center">
            <h2 className="text-[42px] leading-[50px] font-bold">
              BEAUTIFULLY <br /> BARE COLLECTION
            </h2>
            <p className="text-[13px] leading-[28px] font-medium">
              It's the Lightweight, Natural-Looking Collection You Love
            </p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white"
              onClick={handleShopNowClick}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      )}
      {currentImageIndex === images.length - 1 && (
        <div className="absolute top-24 right-3 md:right-2 md:px-[430px]">
          <div className="bg-white bg-opacity-75 p-6 text-center">
            <h2 className="text-2xl font-bold">LE FRAGRANCES</h2>
            <p>
              Pellentesque posuere orci lobortis scelerisque blandit. Donec id
              tellus lacinia andos tincidunt risus delous an consequat lorem
              quisquemos sodales.
            </p>
            <button className="mt-4 px-4 py-2 bg-black text-white">
              SHOP NOW
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2"
      >
        Prev
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}

export default Banner;
