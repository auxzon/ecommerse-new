import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Restock = () => {
  const [restockedProducts, setRestockedProducts] = useState([
    { id: 1, name: "Product 1", quantity: 50, date: "2024-01-01" },
    { id: 2, name: "Product 2", quantity: 30, date: "2024-02-01" },
  ]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [restockDate, setRestockDate] = useState("");

  const handleAddRestock = (e) => {
    e.preventDefault();
    const newRestock = {
      id: restockedProducts.length + 1,
      name: productName,
      quantity: productQuantity,
      date: restockDate,
    };
    setRestockedProducts([...restockedProducts, newRestock]);
    setProductName("");
    setProductQuantity("");
    setRestockDate("");
  };

  const handleDeleteRestock = (id) => {
    setRestockedProducts(
      restockedProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Restock</h1>
      </div>
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg md:mt-10">
        <form onSubmit={handleAddRestock} className="space-y-4">
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="productQuantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="productQuantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="restockDate"
              className="block text-sm font-medium text-gray-700"
            >
              Restock Date
            </label>
            <input
              type="date"
              id="restockDate"
              value={restockDate}
              onChange={(e) => setRestockDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Restock
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Restocked Products</h2>
          <ul className="space-y-2">
            {restockedProducts.map((product) => (
              <li
                key={product.id}
                className="p-4 bg-gray-100 rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Date: {product.date}</p>
                </div>
                <button
                  onClick={() => handleDeleteRestock(product.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Restock;
