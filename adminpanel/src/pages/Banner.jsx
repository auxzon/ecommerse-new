// Banner.jsx
import React, { useState } from "react";
import { useBanner } from "../contexts/BannerContext";

const Banner = () => {
  const { banners, updateBanner } = useBanner();
  const [newBanners, setNewBanners] = useState([null, null, null]); // Using null for file objects
  const [updatedIndex, setUpdatedIndex] = useState(null);

  const handleUpdate = async (index) => {
    const newBannerFile = newBanners[index];
    if (newBannerFile) {
      try {
        const imageUrl = await uploadImage(newBannerFile); // Assuming an async upload function
        updateBanner(index, imageUrl); // Update with the returned image URL
        const updatedNewBanners = [...newBanners];
        updatedNewBanners[index] = null; // Reset to null after upload
        setNewBanners(updatedNewBanners);
        setUpdatedIndex(index);
        setTimeout(() => setUpdatedIndex(null), 2000); // Reset feedback after 2 seconds
      } catch (error) {
        console.error("Error uploading image:", error);
        // Handle error state or alert user about upload failure
      }
    }
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedNewBanners = [...newBanners];
      updatedNewBanners[index] = file;
      setNewBanners(updatedNewBanners);
    }
  };

  const uploadImage = async (file) => {
    // Simulated upload function, replace with actual implementation
    return new Promise((resolve, reject) => {
      // Simulate upload delay
      setTimeout(() => {
        // Assuming URL.createObjectURL to simulate image URL creation
        const imageUrl = URL.createObjectURL(file);
        resolve(imageUrl); // Resolve with the created URL
      }, 1000); // Simulate 1 second delay
    });
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8] md:px-6">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1 className="text-xl font-bold">Add or Update Banners</h1>
      </div>
      {banners.map((banner, index) => (
        <div key={index} className="mb-4 flex items-center">
          <img
            src={banner}
            alt={`Banner ${index + 1}`}
            className="mb-2 w-32 h-auto mr-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(index, e)}
            className="border px-4 py-2 mr-2 flex-grow"
          />
          <button
            onClick={() => handleUpdate(index)}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Update
          </button>
          {updatedIndex === index && (
            <span className="ml-2 text-green-600">Updated!</span>
          )}
        </div>
      ))}
      <h2 className="text-2xl font-bold mb-4">Current Banners</h2>
      <div className="flex gap-2">
        {banners.map((banner, index) => (
          <div key={index} className="mb-4">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-32 h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
