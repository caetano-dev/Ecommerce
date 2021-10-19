import { useState, useEffect, createRef, React } from "react";
import styles from "./SearchBar.module.css";
import { Route, BrowserRouter } from "react-router-dom";

const SearchBar = () => {
  return (
    <form action="/" method="get" className={styles.searchBar}>
      <input type="text" placeholder="Search for items." name="name" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
