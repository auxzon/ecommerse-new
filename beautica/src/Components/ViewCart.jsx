import React from "react";
import { Link } from "react-router-dom";

function ViewCart() {
  return (
    <div className="min-h-screen  sm:px-4 md:px-6 lg:px-8 xl:px-20">
      <div className="mx-auto">
        <div className="p-2">
          <div className="mb-4 border-b pb-4">
            <h1 className="text-2xl font-bold">Your Cart</h1>
            <span className="text-gray-500">1 Item</span>
          </div>
          <div className="mb-4">
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex bg-gray-200">
                <div
                  style={{ width: "7%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                ></div>
              </div>
              <span className="text-sm text-gray-600">
                Only $924.00 away from Free Shipping.
              </span>
            </div>
          </div>
          <div className="mb-4 p-4 bg-yellow-50 text-[#8a714a] flex justify-center items-center">
            <p>
              Please, hurry! Someone has placed an order on one of the items you
              have in the cart. We'll keep it for you for 29:39 minutes.
            </p>
          </div>

          {/* Item Details */}
          <div className="w-full flex flex-col md:flex-row">
            <div className="w-full md:w-[65%] mb-6 md:mb-0">
              <div className="hidden md:flex  justify-between gap-6 items-center border-b w-full h-10 bg-slate-50 mb-4 px-5">
                <span className="font-semibold text-[12px] text-black">
                  ITEM
                </span>
                <span className="font-semibold text-[12px] text-black">
                  PRICE
                </span>
                <span className="font-semibold text-[12px] text-black">
                  QUANTITY
                </span>
                <span className="font-semibold text-[12px] text-black">
                  TOTAL
                </span>
              </div>
              <div className="container flex flex-row md:flex-row justify-between gap-6 items-center border-b w-full h-auto md:h-36 border border-gray-100 mb-4 px-5 py-4 md:py-0">
                <img
                  src="path_to_image"
                  alt="Product"
                  className="w-16 h-16 object-cover mb-4 md:mb-0 md:mr-4"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-700">
                    (Product 19) Sample - Make…
                  </div>
                  <div className="text-gray-500 text-sm">
                    Gift Wrapping:{" "}
                    <a href="#" className="text-blue-500">
                      Add
                    </a>
                  </div>
                </div>
                <div className="text-gray-700 mb-4 md:mb-0">$76.00</div>
                <div className="flex items-center mb-4 md:mb-0">
                  <button className="text-gray-500">-</button>
                  <span className="mx-2">1</span>
                  <button className="text-gray-500">+</button>
                </div>
                <div className="text-gray-700 mb-4 md:mb-0">$76.00</div>
                {/* <button className="ml-4 text-red-500">✕</button> */}
              </div>
            </div>
            {/* Summary */}
            <div className="w-full md:w-[35%] md:px-10">
              <div className="mb-4">
                <div className="flex justify-between items-center font-bold text-[14px] leading-[25px] mb-2">
                  <span className="text-gray-700">Subtotal:</span>
                  <span className="text-gray-700">$76.00</span>
                </div>
                <div className="flex justify-between items-center font-bold text-[14px] leading-[25px] mb-2">
                  <span className="text-gray-700">Shipping:</span>
                  <a href="#" className="text-blue-500">
                    Add Info
                  </a>
                </div>
                <div className="flex justify-between items-center font-bold text-[14px] leading-[25px] mb-2">
                  <span className="text-gray-700">Coupon Code:</span>
                  <a href="#" className="text-blue-500">
                    Add Coupon
                  </a>
                </div>
                <div className="flex justify-between items-center font-bold text-[14px] leading-[25px] mb-2 special-element">
                  <span className="text-gray-700">Gift Certificate:</span>
                  <a href="#" className="text-blue-500">
                    Gift Certificate
                  </a>
                </div>
                <div className="flex justify-between items-center font-bold text-[14px] leading-[25px] mb-4 special-element">
                  <span className="text-black">Grand total:</span>
                  <span className="text-black">$76.00</span>
                </div>
                <Link to="/checkout">
                  <button className="w-full bg-black text-white py-2">
                    CHECK OUT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCart;
