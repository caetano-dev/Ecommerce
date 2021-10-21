import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Footer />
    </>
  );
};

export default App;
