import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import beautica from "../assets/images/beautica_1677482532__14841.webp";
import profile from "../assets/icons/user.png";
import menu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import heart from "../assets/icons/heart.png";
import bag from "../assets/icons/bag.png";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { cart, updateCartItemQuantity, removeCartItem } =
    useContext(CartContext);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Ecart/userLogin", loginFormData,{ withCredentials: true });
    alert("Login successful:", response.data);
      // Clear login form after successful login
      setLoginFormData({
        email: "",
        password: "",
      });
      setIsLoginOpen(false); // Close login modal or slide-in
      // Handle redirection or state update after login success
    } catch (error) {
    alert("Login error:", error);
      // Handle login error (e.g., show error message to user)
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 md:px-28 flex justify-center items-center md:h-10 ">
        <div className="w-full md:flex justify-between items-center h-5">
          <div className="text-center md:text-left w-full md:w-auto">
            3 Free Samples With Any Purchase
          </div>
          <div className="hidden md:flex space-x-4 gap-5">
            <div>Order Online (1800) 000 BEAUTICA</div>
            <div>Gift Certificates</div>
            <div
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className="cursor-pointer"
            >
              Sign In
            </div>
            <div>US Dollar</div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-2 h-14 md:py-16 md:px-20">
        {/* Left Section - Toggle Icon and Search */}
        <div className="flex items-center space-x-4 md:py-10">
          {/* Toggle Icon (visible on mobile) */}
          <Link to="/" className="md:hidden text-gray-500 hover:text-gray-700">
            <img src={menu} className="w-6" alt="Menu" />
          </Link>
          <Link to="/" className="md:hidden text-gray-500 hover:text-gray-700">
            <img src={search} className="w-6" alt="Search" />
          </Link>

          {/* Search Input (hidden on mobile) */}
          <div className="hidden md:block">
            <input
              type="text"
              className="border border-black-300 px-4 py-1 h-10 w-60 text-sm focus:outline-none"
              placeholder="🔍 Search for a product"
            />
          </div>
        </div>

        {/* Centered Logo */}
        <div className="flex-shrink-0 mx-auto">
          <img src={beautica} alt="Beautica logo" className="w-40 md:w-56" />
        </div>

        {/* Right Side - Profile and Cart */}
        <div className="flex items-center space-x-4">
          {/* Toggle Icon (visible on mobile) */}
          <Link to="/" className="md:hidden text-gray-500 hover:text-gray-700">
            <img src={profile} className="w-6" alt="Profile" />
          </Link>
          <Link
            to="#"
            onClick={() => setIsCartOpen(!isCartOpen)} // Toggle cart visibility
            className="md:hidden text-gray-500 hover:text-gray-700"
          >
            <img src={bag} className="w-6" alt="Cart" />
          </Link>

          {/* Search Input (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <div>
                <p>Hi, Customer</p>
                <div className="flex gap-1">
                  <div
                    className="text-sm cursor-pointer"
                    onClick={() => setIsLoginOpen(!isLoginOpen)}
                  >
                    Login
                  </div>
                  or
                  <div>
                    <Link to="/register">
                      <span className="text-sm cursor-pointer">Register</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="mx-2 h-10 bg-gray-300"
                style={{ width: "1px" }}
              ></div>
              <div className="flex gap-2">
                <img src={heart} className="w-6 h-6" alt="Wishlist" />
                <div className="relative">
                  <Link to="#" onClick={() => setIsCartOpen(!isCartOpen)}>
                    <img src={bag} alt="Cart" className="w-6 h-6" />
                    {cart.length > 0 && (
                      <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        {cart.length}
                      </div>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <div className="flex justify-center items-center space-x-4 px-4 py-2 gap-10">
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            #TREND NOW
          </a>
          <div
            className="relative"
            onMouseEnter={() => setHoveredItem("fragrance")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold">
              FRAGRANCE
            </button>
            {hoveredItem === "fragrance" && (
              <div className="absolute mt-2 w-36 md:w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            MAKEUP
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            NAIL
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            BEAUTY ACCESSORIES
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            Demo
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 text-[14px] leading-[26px] font-bold"
          >
            Try Theme
          </a>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-red-600 h-14 md:h-10 flex justify-center text-center items-center text-white text-xs">
        LIMITED-TIME OFFERS: MID-SEASON SALE UP TO 70% OFF ON SELECTED ITEMS.
        SHOP NOW
      </div>

      {/* Sliding Cart */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } w-[85%] md:w-3/4 lg:w-1/2 xl:w-1/3`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4">
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-black float-right"
          >
            X
          </button>
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <div className="border-t border-gray-200">
            {cart.length === 0 ? (
              <p className="my-4 text-center">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center my-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity - 1)
                      }
                      className="border px-2"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(item.id, item.quantity + 1)
                      }
                      className="border px-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="text-red-500 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-right text-lg font-bold">
              Subtotal: $
              {cart
                .reduce((acc, item) => acc + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="mt-4 ">
            <div className="flex justify-center items-center gap-5 ">
              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)} // Close the cart when navigating to checkout
                className="bg-black text-base hover:bg-red-700 text-white px-4 py-2 "
              >
                CHECK OUT
              </Link>
              <Link
                to="/viewcart"
                onClick={() => setIsCartOpen(false)} // Close the cart when navigating to checkout
                className="bg-white text-black hover:bg-black hover:text-white  border border-black overflow-hidden px-4 py-2 "
              >
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Login */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isLoginOpen ? "translate-x-0" : "translate-x-full"
        } w-[85%] md:w-3/4 lg:w-1/2 xl:w-1/3`}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4">
          <button
            onClick={() => setIsLoginOpen(false)}
            className="text-black float-right"
          >
            X
          </button>
          <h2 className="text-xl font-bold mb-4">Sign In</h2>
          <div className="border-t border-gray-200 pt-4">
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-black text-white hover:bg-red-700 font-bold py-2 px-4 rounded"
                >
                  Sign In
                </button>
                <a
                  href="/resetpassword"
                  className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-800"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-center">
              Don't have an account?{" "}
              <a href="/register" className="text-red-600 hover:text-red-800">
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

