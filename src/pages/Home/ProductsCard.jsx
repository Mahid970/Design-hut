import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = (product) => {
  const { img, name, price, _id } = product.product;

  return (
    <div className="px-5 ">
      <a href={`Purchase/${_id}`}>
        <div class="bg-base-100 shadow-xl">
          <figure class=" pt-6">
            <img src={img} alt="design" class="rounded-xl h-96 w-96" />
          </figure>
          <div class="pb-4">
            <h2 class="text-2xl font-bold text-center">{name}</h2>
            <p class="text-xl font-bold text-center">
              Price <span class="text-orange-600">${price}</span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductsCard;
