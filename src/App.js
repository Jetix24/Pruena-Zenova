// import "./Style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import ProductsList from "./component/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </div>
  );
}

export default App;
