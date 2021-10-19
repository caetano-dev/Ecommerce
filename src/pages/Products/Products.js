import React from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const RouteParams = useLocation().search;
  const name = new URLSearchParams(RouteParams).get("name");

  return (
    <div>
      <h1>Products</h1>
      <img src="" alt="product image" />
      <h1>{name}</h1>
      <h2>product name</h2>
      <p>Product price</p>
      <p>Product company</p>
      <p>Product rating</p>
    </div>
  );
}

export default Products;
