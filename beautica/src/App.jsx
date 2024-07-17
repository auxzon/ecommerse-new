// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import image1 from "./assets/images/bottle-6.png";
import image2 from "./assets/images/lovepik-skin-care-products-png-image_400420780_wh1200.png";
import image3 from "./assets/images/beauty-products-bottle-packaging-metallic-realistic-cream_121747_wh1200.png";
import image4 from "./assets/images/1920.png_860.png";
import image5 from "./assets/images/3f75c0f7-232c-4afa-a58b-c9fd5fbf94f3.png";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import Footer from "./Components/Footer";

// const products = [
//   {
//     id: 1,
//     name: "L'Oreal Youth Code",
//     price: "$76.00",
//     description: "Youth Code rejuvenating skincare from L'Oreal.",
//     image: image1,
//   },
//   {
//     id: 2,
//     name: "L'Oreal White Perfect",
//     price: "$76.00",
//     description: "White Perfect skincare line by L'Oreal ",
//     image: image2,
//   },
//   {
//     id: 3,
//     name: "Makeup Forever Set",
//     price: "$66.00",
//     description: "Complete makeup set from Makeup Forever.",
//     image: image3,
//   },
//   {
//     id: 4,
//     name: "Makeup Forever HD",
//     price: "$46.00",
//     description: "High Definition makeup line by Makeup Forever.",
//     image: image4,
//   },
//   {
//     id: 5,
//     name: "Maybelline Gel Liner",
//     price: "$76.00",
//     description: "Long-lasting gel liner by Maybelline.",
//     image: image5,
//   },
//   {
//     id: 6,
//     name: "Makeup Forever Set",
//     price: "$66.00",
//     description: "Complete makeup set from Makeup Forever.",
//     image: image3,
//   },
// ];

const featured = [
  {
    id: 1,
    name: "L'Oreal Youth Code",
    price: "$76.00",
    description: "Youth Code rejuvenating skincare from L'Oreal.",
    image: image1,
  },
  {
    id: 2,
    name: "L'Oreal White Perfect",
    price: "$76.00",
    description: "White Perfect skincare line by L'Oreal for ",
    image: image2,
  },
  {
    id: 3,
    name: "Makeup Forever Set",
    price: "$66.00",
    description: "Complete makeup set from Makeup Forever.",
    image: image3,
  },
  {
    id: 4,
    name: "Makeup Forever HD",
    price: "$46.00",
    description: "High Definition makeup line by Makeup Forever.",
    image: image4,
  },
  {
    id: 5,
    name: "Maybelline Gel Liner",
    price: "$76.00",
    description: "Long-lasting gel liner by Maybelline.",
    image: image5,
  },
  {
    id: 6,
    name: "Makeup Forever Set",
    price: "$66.00",
    description: "Complete makeup set from Makeup Forever.",
    image: image3,
  },
];

function App() {

  const[products,setProducts]=useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Ecart/Getproducts');
      setProducts(response.data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
console.log(products); 

// console.log( products);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="w-full h-screen">
          <AppRoutes products={products} featured={featured} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
