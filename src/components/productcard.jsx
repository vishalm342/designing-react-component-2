// eslint-disable-next-line no-unused-vars
import React from "react";
import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage = "public/airjordan.jpg";
  const productName = "Sportswear Shoes";
  const productPrice = "$200";

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-16">
      <img
        src={productImage}
        alt={productName}
        className="apple"
      />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Productcard />
      <Productcard />
      <Productcard />
      {/* Add more Productcard components as needed */}
    </div>
  );
};

export default ProductGrid;
