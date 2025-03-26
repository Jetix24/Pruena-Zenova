import React, { useState, useEffect } from "react";

export default function ProductsList() {
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/apiRest/products.php"
        );

        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(data);
        setProductData(data);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError(err.message); // Guarda el mensaje de error en el estado
      }
    };

    getProductData();
  }, []);

  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí puedes redirigir al formulario de edición o manejar la lógica de edición
  };

  const handleDelete = (id) => {
    console.log(`Eliminar producto con ID: ${id}`);
    // Aquí puedes implementar la lógica para eliminar el producto
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Lista de productos</h1>
            {error && <p className="text-danger">Error: {error}</p>}{" "}
            {/* Muestra el error si ocurre */}
            {!error && productData.length === 0 && (
              <p>Cargando productos...</p>
            )}{" "}
            {/* Mensaje de carga */}
            {productData.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Calificación</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Oferta</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Acción</th> {/* Nueva columna */}
                  </tr>
                </thead>
                <tbody>
                  {productData.map((product, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.price}</td>
                      <td>{product.category}</td>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{product.score}</td>
                      <td>{product.stock}</td>
                      <td>{product.onOffer ? "Sí" : "No"}</td>
                      <td>
                        {product.discount ? `${product.discount}%` : "N/A"}
                      </td>
                      <td>
                        {/* Botones de acción */}
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(product.id)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(product.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
