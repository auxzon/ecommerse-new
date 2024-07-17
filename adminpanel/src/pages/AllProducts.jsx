import axios from "axios";
import React, { useEffect, useState } from "react";

function AllProducts() {
 const[Allproducts,setProducts]=useState([])
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

  console.log(Allproducts);
  return (
    <div className="w-full h-full bg-[#f3f3f8]  ">
      <div className="w-full h-12 bg-[#f3f3f8] flex justify-center items-center">
        <h1>All Products</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full p-4 flex-col justify-center">
        {Allproducts.map((product) => (
          <div key={product.productId} className="product-card">
            <h3>{product.productName}</h3>
            <p>Price: ${product.productPrice}</p>
<img style={{width:'7rem',height:'6rem'}} src={`http://localhost:8000/${product.productImage}`} alt={product.productName} />
            <p>{product.productDetails}</p>
         {/* <button onClick={()=>{AddCart(product.productId)}}><i class="fa-solid fa-cart-plus"></i></button> */}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
