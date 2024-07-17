// BannerContext.js

import React, { createContext, useState, useContext } from "react";
import img1 from "../assets/images/gal1.jpg";
import img2 from "../assets/images/gal2.jpg";
import img3 from "../assets/images/gal3.jpg";

import sub1 from "../assets/images/sub1.webp";
import sub2 from "../assets/images/sub2.webp";
import sub3 from "../assets/images/sub3.webp";
// ----------------------------------
const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([img1, img2, img3]);
  const [subimages, setSubimages] = useState([sub1, sub2, sub3]);

  const updateBanner = (index, newBanner) => {
    const updatedBanners = [...banners];
    updatedBanners[index] = newBanner;
    setBanners(updatedBanners);
  };

  return (
    <BannerContext.Provider value={{ banners, updateBanner }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBanner = () => {
  const context = useContext(BannerContext);
  if (!context) {
    throw new Error("useBanner must be used within a BannerProvider");
  }
  return context;
};
