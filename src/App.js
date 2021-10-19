import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
