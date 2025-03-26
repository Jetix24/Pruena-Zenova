import React, { useState } from "react";
import axios from "axios"; // Biblioteca para realizar solicitudes HTTP
import { useNavigate } from "react-router-dom"; // Hook para redirigir a otras rutas

export default function AddProducts() {
  const navigate = useNavigate(); // Hook para redirigir al usuario después de enviar el formulario
  const [formvalue, setFormValue] = useState({
    name: "", // Nombre del producto
    description: "", // Descripción del producto
    price: "", // Precio del producto
    category: "", // Categoría del producto
    image: "", // URL de la imagen del producto
    score: "", // Calificación del producto
    stock: "", // Cantidad en stock
    onOffer: false, // Indica si el producto está en oferta
    discount: "", // Porcentaje de descuento si está en oferta
  });
  const [message, setMessage] = useState(""); // Mensaje de éxito o error después de enviar el formulario

  // Maneja los cambios en los campos de entrada del formulario
  const handleInput = (e) => {
    setFormValue({ ...formvalue, [e.target.id]: e.target.value }); // Actualiza el estado según el campo modificado
  };

  // Maneja los cambios en el checkbox de "onOffer"
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setFormValue({ ...formvalue, [id]: checked }); // Actualiza el estado con el valor booleano del checkbox
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario
    console.log(formvalue); // Muestra los datos del formulario en la consola para depuración

    // Prepara los datos para enviarlos al servidor
    const formData = {
      name: formvalue.name,
      description: formvalue.description,
      price: formvalue.price,
      category: formvalue.category,
      score: formvalue.score,
      image: formvalue.image,
      stock: formvalue.stock,
      onOffer: formvalue.onOffer,
      discount: formvalue.discount,
    };

    try {
      // Realiza una solicitud POST al servidor para agregar un producto
      const res = await axios.post(
        "http://localhost:8081/apiRest/products.php",
        formData
      );
      console.log("Respuesta del servidor:", res.data); // Muestra la respuesta del servidor en la consola
      setMessage(res.data.success); // Muestra el mensaje de éxito en la interfaz
      setTimeout(() => {
        navigate("/products"); // Redirige a la lista de productos después de 2 segundos
      }, 2000);
    } catch (error) {
      console.error("Error al enviar los datos:", error); // Muestra el error en la consola
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Crear productos</h1>
            <p className="text-success">{message}</p>{" "}
            {/* Muestra el mensaje de éxito */}
            <form onSubmit={handleSubmit}>
              {/* Campo para el nombre del producto */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formvalue.name}
                  id="name"
                  onChange={handleInput}
                />
              </div>

              {/* Campo para la descripción del producto */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Descripción
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formvalue.description}
                  id="description"
                  onChange={handleInput}
                />
              </div>

              {/* Campo para el precio del producto */}
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formvalue.price}
                  id="price"
                  onChange={handleInput}
                />
              </div>

              {/* Campo para seleccionar la categoría del producto */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Categoria
                </label>
                <select
                  id="category"
                  className="form-select"
                  value={formvalue.category}
                  placeholder="Selecciona una categoría"
                  onChange={handleInput}
                >
                  <option value="1">Electronica</option>
                  <option value="2">Ropa y Accesorios</option>
                  <option value="3">Juguetes</option>
                </select>
              </div>

              {/* Campo para la URL de la imagen del producto */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formvalue.image}
                  id="image"
                  onChange={handleInput}
                />
              </div>

              {/* Campo para la calificación del producto */}
              <div className="mb-3">
                <label htmlFor="score" className="form-label">
                  Calificación
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={formvalue.score}
                  id="score"
                  onChange={handleInput}
                />
              </div>

              {/* Campo para el stock del producto */}
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={formvalue.stock}
                  id="stock"
                  onChange={handleInput}
                />
              </div>

              {/* Checkbox para indicar si el producto está en oferta */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={formvalue.onOffer} // Vincula el estado del checkbox
                  id="onOffer"
                  onChange={handleCheckboxChange} // Maneja el cambio del checkbox
                />
                <label className="form-check-label" htmlFor="onOffer">
                  ¿Tiene una oferta el producto?
                </label>
              </div>

              {/* Campo para el descuento si el producto está en oferta */}
              {formvalue.onOffer && (
                <div className="mb-3">
                  <label htmlFor="discount" className="form-label">
                    Descuento
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="discount"
                    value={formvalue.discount}
                    placeholder="Ingrese el descuento (%)"
                    onChange={handleInput}
                  />
                </div>
              )}

              {/* Botón para enviar el formulario */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
