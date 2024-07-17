import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 md:px-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="font-bold mb-4 text-[14px] tracking-wider leading-[26px]">
              SHOP
            </h2>

            <ul className="special-element text-[12px] leading-[26px]">
              <li>
                <a href="#" className="">
                  #Trend Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Fragrance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Makeup
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Nail
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Beauty Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold mb-4 text-[14px] tracking-wider leading-[26px]">
              INFORMATION
            </h2>
            <ul className="special-element text-[12px] leading-[26px]">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Theme FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manufacturers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Certificates
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold mb-4 text-[14px] tracking-wider leading-[26px]">
              CUSTOMER SERVICE
            </h2>
            <ul className="special-element text-[12px] leading-[26px]">
              <li>
                <a href="#" className="hover:underline">
                  Search Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advanced Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orders and Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  RSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help & FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Consultant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Store Locations
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="font-bold mb-4 text-[14px] tracking-wider leading-[26px]">
              NEWSLETTER SIGN UP
            </h2>
            <p className="special-element text-[12px] leading-[26px]">
              Receive our latest updates about our products and promotions.
            </p>
            <div className="flex">
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                placeholder="Enter your email address"
              />
              <button className="px-4 py-2 bg-gray-600 text-white rounded-r-md">
                SUBMIT
              </button>
            </div>
            <div className="col-span-1 ">
              <h2 className="font-bold mb-4">STAY CONNECTED</h2>
              <div className="flex space-x-4 ">
                <a href="#" className="text-white hover:text-gray-400">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Twitter
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Pinterest
                </a>
                {/* <a href="#" className="text-white hover:text-gray-400">
                  Instagram
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  YouTube
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  TikTok
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Google+
                </a>
                <a href="#" className="text-white hover:text-gray-400">
                  Snapchat
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-start flex flex-col justify-start border-t border-gray-700 pt-4">
          <p className="special-element text-[12px] leading-[26px]">
            © 2024 Beautica-Light. All Rights Reserved. Ecommerce Software by
            BigCommerce.
          </p>
          <p className="special-element text-[12px] leading-[26px]">
            BigCommerce Themes by ThemeVale.Com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
