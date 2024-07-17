import React from "react";
import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Boxes from "../Components/Boxes";
// import JustArrived from "../Components/JustArrived";
import FeaturedProducts from "../Components/FeaturedProducts";
import Trending from "../Components/Trending";
import EditersPick from "../Components/EditersPick";
import Blog from "../Components/Blog";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";

function Home({ products }) {
  const userId=1
  // console.log(products);
  return (
    <div className="h-screen">
      <div className="h-full w-full">
        <Banner />
        <Boxes />
        {/* <JustArrived products={{products,userId}} /> */}
        <Trending />
        <FeaturedProducts products={products} />
        <EditersPick products={products} />
        <Blog />
        <Brands />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
