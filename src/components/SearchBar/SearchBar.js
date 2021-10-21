import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form action="/" method="get" className={styles.searchBar}>
      <input type="text" placeholder="Search for items." name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
