// // src/components/JustArrived.jsx
// import React, { useRef, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../contexts/CartContext";

// function JustArrived({ products, userId }) {
  
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [ratings, setRatings] = useState(
//     products.reduce((acc, product) => {
//       acc[product.id] = product.ratings || {};
//       return acc;
//     }, {})
//   );
//   const scrollContainerRef = useRef(null);
//   const navigate = useNavigate();
//   const { addToCart } = useContext(CartContext);

//   const scrollLeft = () => {
//     scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
//   };

//   const handleQuickView = (id) => {
//     navigate(`/product/${id}`);
//   };

//   const handleCart = (product) => {
//     addToCart(product);
//   };

//   const handleStarClick = (productId, starIndex) => {
//     setRatings((prevRatings) => ({
//       ...prevRatings,
//       [productId]: {
//         ...prevRatings[productId],
//         [userId]:
//           prevRatings[productId][userId] === starIndex + 1 ? 0 : starIndex + 1,
//       },
//     }));
//   };

//   const renderRatingStars = (productId) => {
//     const totalStars = 5;
//     const rating = ratings[productId][userId] || 0;
//     return (
//       <div className="flex justify-center mt-2">
//         {[...Array(totalStars)].map((_, index) => (
//           <svg
//             key={index}
//             className={`w-4 h-4 cursor-pointer ${
//               index < rating ? "text-yellow-500" : "text-gray-300"
//             }`}
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             onClick={() => handleStarClick(productId, index)}
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.911c.969 0 1.371 1.24.588 1.81l-3.977 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.116L10 13.417l-3.977 2.89c-.784.572-1.839-.195-1.54-1.116l1.518-4.674-3.977-2.89c-.784-.572-.381-1.81.588-1.81h4.911l1.518-4.674z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="py-8 md:px-12">
//       <div className="flex flex-col justify-center items-center">
//         <h2 className="text-[22px] font-bold text-center tracking-wide">
//           JUST ARRIVED
//         </h2>
//         <p className="text-xs text-gray-500 md:py-3">
//           Magnis de darturien eros laciniados de cosmopolis dinterdum
//         </p>
//       </div>
//       <div className="relative">
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
//         >
//           &lt;
//         </button>
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
//         >
//           &gt;
//         </button>
//         <div
//           ref={scrollContainerRef}
//           className="flex overflow-x-auto scrollbar-hide space-x-4"
//         >
//           {products.map((product) => (
//             <div
//               key={product.productId}
//               className="relative text-center p-4 transition-all transform hover:scale-105 hover:shadow-xl w-48 sm:w-64 h-96 flex-shrink-0 hover:h-[calc(24rem+20px)] group"
//               onMouseEnter={() => setHoveredProduct(product.productId)}
//               onMouseLeave={() => setHoveredProduct(null)}
//             >
//               <img
//                 src={`http://localhost:8000/${product.productImage}`}
//                 alt={product.productName}
//                 className={`w-32 h-32 mx-auto transition-transform transform ${
//                   hoveredProduct === product.id
//                     ? "scale-110 transition-transform duration-900"
//                     : "scale-100"
//                 }`}
//               />
//               <p className="text-[12px] font-bold leading-[26px] tracking-wide mt-4">
//                 {product.productName}
//               </p>
//               {renderRatingStars(product.id, ratings[product.id])}
//               <p className="special-element text-[12px] tracking-wider leading-[20px] text-gray-900 mt-4 hover:text-red-600 hover:underline">
//                 {product.description}
//               </p>
//               <p className="special-element text-[14px] leading-[25px] font-bold mt-2">
//                 {product.price}
//               </p>
//               <button
//                 className="md:hidden w-full h-11 bg-black text-white hover:bg-red-600"
//                 onClick={() => handleCart(product)}
//               >
//                 Add To Cart
//               </button>
//               <button
//                 className="absolute bottom-4 left-10 w-3/4 h-11 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
//                 onClick={() => handleCart(product)}
//               >
//                 Add To Cart
//               </button>
//               <button
//                 className="absolute top-14 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
//                 onClick={() => handleQuickView(product.id)}
//               >
//                 Quick view
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default JustArrived;

// src/components/JustArrived.jsx
import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import axios from "axios";

function JustArrived({ products, userId }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [averageRatings, setAverageRatings] = useState({});
  const [starCounts, setStarCounts] = useState({});
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchRatings = async () => {
      const ratingsData = {};
      const averageRatingsData = {};
      const starCountsData = {};

      for (const product of products) {
        const response = await axios.get(`http://localhost:8000/product/${product.productId}/starCounts`);
        ratingsData[product.productId] = product.ratings || {};
        averageRatingsData[product.productId] = response.data.averageRating;
        starCountsData[product.productId] = response.data.starCounts;
      }

      setRatings(ratingsData);
      setAverageRatings(averageRatingsData);
      setStarCounts(starCountsData);
    };

    fetchRatings();
  }, [products]);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleQuickView = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCart = (product) => {
    addToCart(product);
  };

  const handleStarClick = async (productId, starIndex) => {
    try {
      const newRating = ratings[productId][userId] === starIndex + 1 ? 0 : starIndex + 1;

      await axios.post(`http://localhost:8000/product/rate`, {
        productId,
        userId,
        rating: newRating,
        review: "",
      });

      setRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: {
          ...prevRatings[productId],
          [userId]: newRating,
        },
      }));

      // Fetch updated star counts and average rating
      const response = await axios.get(`http://localhost:8000/product/${productId}/starCounts`);
      setAverageRatings((prev) => ({ ...prev, [productId]: response.data.averageRating }));
      setStarCounts((prev) => ({ ...prev, [productId]: response.data.starCounts }));

    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };

  const renderRatingStars = (productId) => {
    const totalStars = 5;
    const rating = ratings[productId][userId] || 0;
    return (
      <div className="flex justify-center mt-2">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 cursor-pointer ${
              index < rating ? "text-yellow-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            onClick={() => handleStarClick(productId, index)}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674h4.911c.969 0 1.371 1.24.588 1.81l-3.977 2.89 1.518 4.674c.3.921-.755 1.688-1.54 1.116L10 13.417l-3.977 2.89c-.784.572-1.839-.195-1.54-1.116l1.518-4.674-3.977-2.89c-.784-.572-.381-1.81.588-1.81h4.911l1.518-4.674z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-500">{averageRatings[productId]?.toFixed(1) || "N/A"}</span>
      </div>
    );
  };

  const renderStarCounts = (productId) => {
    if (!starCounts[productId]) return null;
    return (
      <div className="flex justify-center mt-2 text-xs text-gray-500">
        {Object.entries(starCounts[productId]).map(([star, count]) => (
          <div key={star} className="mx-1">
            {star} star: {count}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="py-8 md:px-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[22px] font-bold text-center tracking-wide">
          JUST ARRIVED
        </h2>
        <p className="text-xs text-gray-500 md:py-3">
          Magnis de darturien eros laciniados de cosmopolis dinterdum
        </p>
      </div>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        >
          &lt;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
        >
          &gt;
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4"
        >
          {products.map((product) => (
            <div
              key={product.productId}
              className="relative text-center p-4 transition-all transform hover:scale-105 hover:shadow-xl w-48 sm:w-64 h-96 flex-shrink-0 hover:h-[calc(24rem+20px)] group"
              onMouseEnter={() => setHoveredProduct(product.productId)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={`http://localhost:8000/${product.productImage}`}
                alt={product.productName}
                className={`w-32 h-32 mx-auto transition-transform transform ${
                  hoveredProduct === product.productId
                    ? "scale-110 transition-transform duration-900"
                    : "scale-100"
                }`}
              />
              <p className="text-[12px] font-bold leading-[26px] tracking-wide mt-4">
                {product.productName}
              </p>
              {renderRatingStars(product.productId)}
              {renderStarCounts(product.productId)}
              <p className="special-element text-[12px] tracking-wider leading-[20px] text-gray-900 mt-4 hover:text-red-600 hover:underline">
                {product.description}
              </p>
              <p className="special-element text-[14px] leading-[25px] font-bold mt-2">
                {product.price}
              </p>
              <button
                className="md:hidden w-full h-11 bg-black text-white hover:bg-red-600"
                onClick={() => handleCart(product)}
              >
                Add To Cart
              </button>
              <button
                className="absolute bottom-4 left-10 w-3/4 h-11 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                onClick={() => handleCart(product)}
              >
                Add To Cart
              </button>
              <button
                className="absolute top-14 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                onClick={() => handleQuickView(product.productId)}
              >
                Quick view
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JustArrived;

