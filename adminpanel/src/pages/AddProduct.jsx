import React, { useState } from "react";
import axios from 'axios';

const AddProduct = () => {
  const [productImage, setProductImage] = useState(null);
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDescription] = useState("");
  const [productCategory, setCategories] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  //   console.log({
  //     productImage,
  //     productName,
  //     productDescription,
  //     categories,
  //     productPrice,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('productName', productName);
    formData.append('productDetails', productDetails);
    formData.append('productPrice', productPrice);
    formData.append('productImage', productImage);
    formData.append('productCategory', productCategory);

    try {
      const response = await axios.post('http://localhost:8000/Ecart/Addproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(response.data.message);
      // Reset fields after successful submission
 
      // setProductName('');
      // setProductPrice('');
      // setProductImage('');
      // navigate('/'); // Redirect to homepage after successful submission
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Network error occurred');
      }
    }
  };

  return (
    <div className="w-full h-full bg-[#f3f3f8]">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>Add Products</h1>
      </div>
      <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg md:mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="productImage"
              className="block text-sm font-medium text-gray-700"
            >
              Product Image
            </label>
            <input
              type="file"
              id="productImage"
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files[0])}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
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
              htmlFor="productDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              value={productDetails}
              onChange={(e) => setProductDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="productPrice"
              className="block text-sm font-medium text-gray-700"
            >
              Product Price
            </label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="categories"
              className="block text-sm font-medium text-gray-700"
            >
              Categories
            </label>
            <select
              id="categories"
              value={productCategory}
              onChange={(e) => setCategories(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
