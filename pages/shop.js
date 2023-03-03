import React from "react";
import ProductCard from "../components/Card";
import Hero from "../components/Hero";

const Shop = () => {
  return (
    <div>
      <Hero heading="Shop" message="Lets Buy Your Favorite Products" />
      <ProductCard />
    </div>
  );
};

export default Shop;
