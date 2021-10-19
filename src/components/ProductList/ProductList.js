import { useState, useEffect, React } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ productList = [] }) => {
  return (
    <>
      <h1>Our products:</h1>
      <div className={styles.productList}>
        {productList.map((product) => {
          if (product) {
            return (
              <StoreItem
                image={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/220px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
                }
                id={product._id}
                name={product.name}
                price={product.price}
                company={product.company}
                rating={product.rating}
              />
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default ProductList;
