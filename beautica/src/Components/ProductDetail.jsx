import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-center p-10 bg-gray-100 min-h-screen">
      <div className="max-w-4xl w-full bg-white shadow-md rounded p-6 flex">
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 pl-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">{product.price}</p>
          <div className="mb-4">
            <p className="font-bold">SKU: PRODUCT-{product.id}</p>
            <p>Weight: 1.00 KGS</p>
            <p>Gift wrapping: Options Available</p>
            <p>Shipping: Calculated At Checkout</p>
          </div>
          <div className="flex items-center mb-4">
            <button className="bg-red-500 text-white py-2 px-4 rounded mr-2 hover:bg-red-700 transition">
              Add to Cart
            </button>
            <button className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
              Buy it Now
            </button>
          </div>
          <div className="text-gray-500 text-sm">
            <p>5 sold in last 9 hours</p>
            <p>6 customers are viewing this product</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
