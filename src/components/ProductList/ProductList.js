import { useState, useEffect, React } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

function ProductList({ SearchQuery }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_SERVER + SearchQuery
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [SearchQuery]);

  return (
    <>
      <h1>Our products:</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <Link to={"/Product"}>
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
        ))}
      </div>
    </>
  );
}

export default ProductList;
