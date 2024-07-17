import React, { useState } from "react";
import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";

const blogPosts = [
  {
    image: blog1,
    title: "Naminos Elementum Disumos Ann...",
    date: "1st Feb 2023",
    description:
      "Nullam aliquet vestibulum augue non varius. Duis risus leo...",
  },
  {
    image: blog2,
    title: "Loremous Cosmopolis",
    date: "15th Feb 2014",
    description:
      "Nullam aliquet vestibulum augue non varius. Duis risus leo...",
  },

  // Add more blog posts as needed
];

function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <hr className="border-gray-200 md:w-[90%]" />
      </div>
      <div className="relative md:px-24 py-8 md:mt-5">
        <h2 className="text-2xl font-bold text-center mb-6">FROM OUR BLOG</h2>
        <div className="overflow-hidden relative w-full">
          <div className="hidden lg:grid lg:grid-cols-2 ">
            {blogPosts.map((post, index) => (
              <div key={index} className="p-4">
                <div className="relative">
                  <img
                    src={post.image}
                    className=" object-cover" // Adjusted dimensions here
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.date}</p>
                  <p className="text-sm mt-2">{post.description}</p>
                </div>
                <div className="flex justify-center items-center md:py-3 ">
                  <button className="bg-black w-36 h-11 text-white">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div
            className="lg:hidden flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogPosts.map((post, index) => (
              <div key={index} className="min-w-full p-4">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-[600px]  object-cover" // Adjusted dimensions here for mobile view
                  />
                  <div className=" bottom-0 bg-white bg-opacity-75 p-4 w-full">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.date}</p>
                    <p className="text-sm mt-2">{post.description}</p>
                  </div>
                  <div className="flex justify-center items-center md:py-3 ">
                    <button className="bg-black w-36 h-11 text-white">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 lg:hidden"
          >
            Prev
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 lg:hidden"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
