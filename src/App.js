import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
