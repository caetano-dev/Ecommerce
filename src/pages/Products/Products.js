import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Products.module.css";

const Products = () => {
  const RouteParams = useLocation().search;
  const name = new URLSearchParams(RouteParams).get("name");
  const price = new URLSearchParams(RouteParams).get("price");
  const company = new URLSearchParams(RouteParams).get("company");
  const rating = new URLSearchParams(RouteParams).get("rating");

  return (
    <div className={styles.Product}>
      <img
        src="https://picsum.photos/500/400"
        alt="product image"
      />
      <div>
        <h1>{name}</h1>
        <p>{company}</p>
        <p>Price: ${price}</p>
        <p>{rating} stars</p>
      </div>
    </div>
  );
};

export default Products;
