import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../Components/ProductDetail";
import Checkout from "../Components/Checkout";
import ViewCart from "../Components/ViewCart";
import Register from "../Components/Register";
import ResetPassword from "../Components/ResetPassword";

function AppRoutes({ products }) {
  return (
    <Routes>
      <Route path="/" element={<Home products={products} />} />
      <Route
        path="/product/:id"
        element={<ProductDetail products={products} />}
      />
      <Route path="/checkout" element={<Checkout products={products} />} />

      <Route path="/viewcart" element={<ViewCart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
}

export default AppRoutes;
