import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div class="bg-pink-100 my-16">
      <h1 class="text-3xl text-center font-bold py-8">Our Designs</h1>
      <div class="grid grid-cols-3 gap-8 px-8 pb-8">
        {products?.map((product) => (
          <ProductsCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
