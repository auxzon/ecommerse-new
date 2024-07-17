import React, { useState, useRef, useEffect } from "react";
import brand1 from "../assets/images/brand-logo-1.webp";
import brand2 from "../assets/images/brand1.webp";
import brand3 from "../assets/images/brand-logo-3.webp";
import brand4 from "../assets/images/brand-logo-4.webp";
import brand5 from "../assets/images/brand-logo-5.png";

const brands = [
  { name: "Brand 1", logo: brand1 },
  { name: "Brand 2", logo: brand2 },
  { name: "Brand 3", logo: brand3 },
  { name: "Brand 4", logo: brand4 },
  { name: "Brand 5", logo: brand5 },
  // Add more brands as needed
];

const Brands = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleBrands = 4;
  const scrollContainerRef = useRef(null);

  const handlePrevClick = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + brands.length) % brands.length
    );
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  const getVisibleBrands = () => {
    let visible = [];
    for (let i = 0; i < visibleBrands; i++) {
      visible.push(brands[(startIndex + i) % brands.length]);
    }
    return visible;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: scrollContainer.clientWidth * startIndex,
        behavior: "smooth",
      });
    }
  }, [startIndex]);

  return (
    <div className="relative  py-4 items-center flex-col md:h-36 flex justify-center border-b-black w-full h-36">
      <hr className="border-gray-200 md:w-[90%] " />
      <div className="flex justify-center items-center flex-col md:py-7">
        <p className="font-bold text-xl text-black tracking-wide text-[16px]">
          SHOP OUR TOP BRANDS
        </p>
        {/* <p className="text-red-600 font-bold text-sm tracking-wider">
          ##BEAUTICACOSMETICS
        </p> */}
      </div>

      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 z-10"
      >
        &lt;
      </button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-hidden w-full space-x-6 scrollbar-hide justify-center md:py-3 py-5"
        style={{ scrollBehavior: "smooth" }}
      >
        {getVisibleBrands().map((brand, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-36 object-contain"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-2 py-1 z-10"
      >
        &gt;
      </button>
      <div className="flex justify-center items-center md:py-7">
        <hr className="border-gray-200 md:w-[90%]" />
      </div>
    </div>
  );
};

export default Brands;
