import { useState, useEffect, React } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductList from "../../components/ProductList/ProductList";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState();
  const searchQuery = useLocation().search;

  const fetchData = async () => {
    return await fetch("http://localhost:8080/api/v1/products" + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <SearchBar />
      <ProductList productList={productList} />
    </div>
  );
};

export default Home;
