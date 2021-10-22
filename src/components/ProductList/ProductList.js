import { React } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = ({ productList = [] }) => {
  return (
    <div>
      <h1 className={styles.title}>Our products:</h1>
      <div className={styles.productList}>
        {productList.map((product) => {
          if (product) {
            return (
              <Link
                to={`/products?name=${product.name}&price=${product.price}&company=${product.company}&rating=${product.rating}`}
                key={product._id}
                state={{ name: product.name }}
              >
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
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default ProductList;
