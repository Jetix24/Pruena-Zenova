import React, { useState, useEffect } from "react";

export default function ProductsList() {
  // Estado para almacenar los datos de los productos
  const [productData, setProductData] = useState([]);
  // Estado para manejar errores en la solicitud
  const [error, setError] = useState(null);

  // Hook useEffect para obtener los datos de los productos al cargar el componente
  useEffect(() => {
    const getProductData = async () => {
      try {
        // Realiza una solicitud GET al servidor para obtener los datos de los productos
        const response = await fetch(
          "http://localhost:8081/apiRest/products.php"
        );

        // Verifica si la respuesta no es exitosa
        if (!response.ok) {
          throw new Error(
            `Error en la solicitud: ${response.status} ${response.statusText}`
          );
        }

        // Convierte la respuesta a JSON
        const data = await response.json();
        console.log(data); // Muestra los datos en la consola para depuración
        setProductData(data); // Actualiza el estado con los datos obtenidos
      } catch (err) {
        console.error("Error al obtener los datos:", err); // Muestra el error en la consola
        setError(err.message); // Guarda el mensaje de error en el estado
      }
    };

    getProductData(); // Llama a la función para obtener los datos
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar el componente

  // Función para manejar la acción de editar un producto
  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
    // Aquí puedes redirigir al formulario de edición o manejar la lógica de edición
  };

  // Función para manejar la acción de eliminar un producto
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
            {/* Muestra un mensaje de error si ocurre */}
            {error && <p className="text-danger">Error: {error}</p>}
            {/* Muestra un mensaje de carga si no hay datos y no hay error */}
            {!error && productData.length === 0 && <p>Cargando productos...</p>}
            {/* Muestra la tabla de productos si hay datos */}
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
                    <th scope="col">Acción</th>{" "}
                    {/* Nueva columna para acciones */}
                  </tr>
                </thead>
                <tbody>
                  {/* Itera sobre los datos de los productos y genera una fila para cada producto */}
                  {productData.map((product, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th> {/* Número de fila */}
                      <td>{product.name}</td> {/* Nombre del producto */}
                      <td>{product.description}</td>{" "}
                      {/* Descripción del producto */}
                      <td>{product.price}</td> {/* Precio del producto */}
                      <td>{product.category}</td> {/* Categoría del producto */}
                      <td>
                        {/* Imagen del producto */}
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{product.score}</td> {/* Calificación del producto */}
                      <td>{product.stock}</td> {/* Stock del producto */}
                      <td>{product.onOffer ? "Sí" : "No"}</td>{" "}
                      {/* Indica si está en oferta */}
                      <td>
                        {/* Descuento del producto */}
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
