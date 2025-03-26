// import "./Style.css"; // Importa los estilos globales (desactivado en este caso)
import { Routes, Route } from "react-router-dom"; // Importa las herramientas para manejar rutas en React
import Header from "./component/Header"; // Componente del encabezado
import Home from "./component/Home"; // Página principal
import ProductsList from "./component/ProductsList"; // Página para listar productos
import AddProducts from "./component/AddProducts"; // Página para agregar productos
import CategoriesList from "./component/CategoriesList"; // Página para listar categorías

function App() {
  return (
    <div className="App">
      {/* Componente del encabezado que se muestra en todas las páginas */}
      <Header />

      {/* Configuración de las rutas de la aplicación */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la lista de productos */}
        <Route path="/products" element={<ProductsList />} />

        {/* Ruta para agregar un nuevo producto */}
        <Route path="/addProducts" element={<AddProducts />} />

        {/* Ruta para la lista de categorías */}
        <Route path="/categories" element={<CategoriesList />} />
      </Routes>
    </div>
  );
}

export default App; // Exporta el componente principal de la aplicación
