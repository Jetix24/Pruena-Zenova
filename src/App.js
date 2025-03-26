// import "./Style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import ProductsList from "./component/ProductsList";
import CategoriesList from "./component/CategoriesList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/categories" element={<CategoriesList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
