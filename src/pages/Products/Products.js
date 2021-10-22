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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/220px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
        alt="product image"
      />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{company}</p>
      <p>{rating}</p>
    </div>
  );
};

export default Products;
