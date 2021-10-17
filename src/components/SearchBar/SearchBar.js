import { useState, useEffect, createRef, React } from "react";
import styles from "./SearchBar.module.css";
import ProductList from "../ProductList/ProductList";
import { Route, BrowserRouter } from "react-router-dom";
import Products from "../../pages/Products/Products";

function SearchBar() {
  const textInput = createRef();

  const [searchQuery, setSearchQuery] = useState("");

  function handleInput() {
    setSearchQuery("?name=" + textInput.current.value);
  }
  console.log(searchQuery);
  return (
    <>
      <div className={styles.searchBar}>
        <input type="text" ref={textInput} placeholder="Search for item." />
        <button onClick={handleInput}>Search</button>
      </div>

      <BrowserRouter>
        <Route exact path="/product" component={Products} />
        <Route
          exact
          path="/"
          component={() => <ProductList SearchQuery={searchQuery} />}
        />
      </BrowserRouter>
    </>
  );
}

export default SearchBar;
