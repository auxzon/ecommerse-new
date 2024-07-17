// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => [
//       ...prevCart,
//       {
//         ...product,
//         quantity: product.quantity || 1,
//         price: product.price || 0,
//       },
//     ]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product, userId) => {
    const newProduct = {
      ...product,
      quantity: product.quantity || 1,
      price: product.price || 0,
    };

    setCart((prevCart) => [...prevCart, newProduct]);

    // Send the product ID and user ID to the admin panel
    try {
      await axios.post("http://localhost:8000/api/add-to-cart", {
        productId: product.productId,
        userId: userId,
      });
    } catch (error) {
      console.error("Error sending data to admin panel:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
