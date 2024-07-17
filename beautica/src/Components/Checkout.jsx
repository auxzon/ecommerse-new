import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phoneNumber: "",
    address: "",
    apartment: "",
    city: "",
    country: "India",
    state: "",
    postalCode: "",
  });
  const [isShippingComplete, setIsShippingComplete] = useState(false);

  const validateEmail = async () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate backend email validation
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve(true), 1000)
    ); // Mocked validation
    setIsEmailValid(response);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(false);
  };

  const handleShippingChange = (e) => {
    const { id, value } = e.target;
    setShippingDetails({ ...shippingDetails, [id]: value });
  };

  const handleContinueToBilling = () => {
    const isComplete = Object.values(shippingDetails).every(
      (detail) => detail !== ""
    );
    if (isComplete) {
      setIsShippingComplete(true);
    } else {
      alert("Please fill in all the shipping details.");
    }
  };

  const calculateSubtotal = () => {
    const subtotal = cart
      .reduce((acc, item) => {
        const itemTotal = parseFloat(item.price) * parseFloat(item.quantity);
        return acc + (isNaN(itemTotal) ? 0 : itemTotal);
      }, 0)
      .toFixed(2);

    return subtotal;
  };

  const handlePaymentSuccess = () => {
    // Simulate successful payment
    const paymentSuccessful = true;

    if (paymentSuccessful) {
      navigate("/ratingpage"); // Redirect to RatingPage
    } else {
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Customer, Shipping, Billing, Payment Information */}
        <div>
          {/* Customer Information */}
          <div className="mb-8">
            <h2 className="text-[20px] leading-[25px] font-bold ">CUSTOMER</h2>
            <hr className="border-t-2 border-black w-full  " />
            <div className="mb-4 md:pt-5 mt-5">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 px-4 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                <input type="checkbox" className="mr-2" />
                Subscribe to our newsletter.
              </label>
            </div>
            <div className="mb-4">
              <a href="#" className="text-blue-600">
                Already have an account? Sign in now
              </a>
            </div>
            <button
              className="bg-black text-white px-4 py-2 w-full h-14"
              onClick={validateEmail}
            >
              CONTINUE
            </button>
          </div>

          {/* Shipping Information */}
          <h2 className="text-[20px] leading-[25px]  font-bold ">SHIPPING</h2>
          <hr className="border-t-2 border-black w-full mb-14 " />

          {isEmailValid && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={shippingDetails.firstName}
                    onChange={handleShippingChange}
                    className="border border-gray-300 px-4 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={shippingDetails.lastName}
                    onChange={handleShippingChange}
                    className="border border-gray-300 px-4 py-2 w-full"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={shippingDetails.companyName}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={shippingDetails.phoneNumber}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={shippingDetails.address}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Apartment/Suite/Building (Optional)
                </label>
                <input
                  type="text"
                  id="apartment"
                  value={shippingDetails.apartment}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  id="city"
                  value={shippingDetails.city}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">
                  Country
                </label>
                <select
                  id="country"
                  value={shippingDetails.country}
                  onChange={handleShippingChange}
                  className="border border-gray-300 px-4 py-2 w-full"
                >
                  <option>India</option>
                  {/* Add other countries as needed */}
                </select>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    State/Province (Optional)
                  </label>
                  <select
                    id="state"
                    value={shippingDetails.state}
                    onChange={handleShippingChange}
                    className="border border-gray-300 px-4 py-2 w-full"
                  >
                    <option>Select a state</option>
                    <option>kerala</option>
                    <option>tn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={shippingDetails.postalCode}
                    onChange={handleShippingChange}
                    className="border border-gray-300 px-4 py-2 w-full"
                  />
                </div>
              </div>
              <button
                className="bg-black text-white px-4 py-2 mt-4"
                onClick={handleContinueToBilling}
              >
                Continue to Billing
              </button>
            </div>
          )}

          {/* Billing Information */}
          <h2 className="text-[20px]  font-bold ">BILLING</h2>
          <hr className="border-t-2 border-black w-full mb-14 " />
          {isShippingComplete && (
            <div className="mb-8">
              <p className="text-sm text-gray-700">
                {`${shippingDetails.firstName} ${shippingDetails.lastName},`}
              </p>
              <p className="text-sm text-gray-700">
                {`${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state}, ${shippingDetails.country} - ${shippingDetails.postalCode}`}
              </p>
              <p className="text-sm text-gray-700">
                {`Phone: ${shippingDetails.phoneNumber}`}
              </p>
              <p className="text-sm text-gray-700">
                {`Company: ${shippingDetails.companyName}`}
              </p>
            </div>
          )}

          {/* Payment Information */}
          <h2 className="text-[20px]  font-bold">PAYMENT</h2>
          <hr className="border-t-2 border-black w-full mb-14 " />
          {isShippingComplete && (
            <div className="mb-4 md:mt-12 ">
              <div className="space-y-4">
                {/* Credit/Debit Card Option */}
                <div>
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    className="mr-2"
                  />
                  <label htmlFor="card" className="font-medium">
                    Credit/Debit Card
                  </label>
                  <div className="ml-6 mt-2 space-y-2">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="border p-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Name on Card"
                      className="border p-2 w-full"
                    />
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-1/2"
                      />
                    </div>
                  </div>
                </div>

                {/* UPI Option */}
                <div>
                  <input
                    type="radio"
                    id="upi"
                    name="paymentMethod"
                    value="upi"
                    className="mr-2"
                  />
                  <label htmlFor="upi" className="font-medium">
                    UPI
                  </label>
                  <div className="ml-6 mt-2">
                    <input
                      type="text"
                      placeholder="UPI ID"
                      className="border p-2 w-full"
                    />
                  </div>
                </div>

                {/* Net Banking Option */}
                <div>
                  <input
                    type="radio"
                    id="netbanking"
                    name="paymentMethod"
                    value="netbanking"
                    className="mr-2"
                  />
                  <label htmlFor="netbanking" className="font-medium">
                    Net Banking
                  </label>
                  <div className="ml-6 mt-2">
                    <select className="border p-2 w-full">
                      <option>Select Bank</option>
                      <option>Bank 1</option>
                      <option>Bank 2</option>
                      <option>Bank 3</option>
                    </select>
                  </div>
                </div>

                {/* Wallet Option */}
                <div>
                  <input
                    type="radio"
                    id="wallet"
                    name="paymentMethod"
                    value="wallet"
                    className="mr-2"
                  />
                  <label htmlFor="wallet" className="font-medium">
                    Wallet
                  </label>
                  <div className="ml-6 mt-2">
                    <select className="border p-2 w-full">
                      <option>Select Wallet</option>
                      <option>Wallet 1</option>
                      <option>Wallet 2</option>
                      <option>Wallet 3</option>
                    </select>
                  </div>
                  <button
                    className="bg-black text-white px-4 py-2 mt-4"
                    onClick={handlePaymentSuccess} // Call handlePaymentSuccess on click
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Order Summary */}
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-[20px]  font-bold mb-4">Order Summary</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between mb-4">
              <div>
                <p className="font-medium">
                  {item.quantity} x {item.name}
                </p>
              </div>
              <div>
                <p className="font-medium">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between mb-4">
            <p>Subtotal</p>
            <p>${calculateSubtotal()}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Shipping</p>
            <p>--</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Tax</p>
            <p>$0.00</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Promo/Gift Certificate</p>
            <p>--</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Total (USD)</p>
            <p>${calculateSubtotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
