import React from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const RouteParams = useLocation().search;
  const name = new URLSearchParams(RouteParams).get("name");
  const price = new URLSearchParams(RouteParams).get("price");
  const company = new URLSearchParams(RouteParams).get("company");
  const rating = new URLSearchParams(RouteParams).get("rating");

  return (
    <div>
      <h1>Products</h1>
      <img src="" alt="product image" />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{company}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Products;
