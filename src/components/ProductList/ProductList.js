import { useState, useEffect, React } from "react";
import StoreItem from "../StoreItem/StoreItem";
import styles from "./ProductList.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_SERVER); //queries can be added here
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <StoreItem
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/220px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
          }
          id={product.id}
          name={product.name}
          price={product.price}
          company={product.company}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductList;
