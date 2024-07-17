// src/pages/Product.jsx
import React from "react";
import ProductDetail from "../Components/ProductDetail";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return product ? (
    <ProductDetail product={product} />
  ) : (
    <p>Product not found</p>
  );
};

export default Product;
