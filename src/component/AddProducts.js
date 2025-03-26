import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
  const navigate = useNavigate();
  const [formvalue, setFormValue] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    score: "",
    stock: "",
    onOffer: false, // Inicialmente es falso
    discount: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setFormValue({ ...formvalue, [e.target.id]: e.target.value }); // Actualiza el estado según el input
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setFormValue({ ...formvalue, [id]: checked }); // Actualiza el estado con el valor booleano del checkbox
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formvalue);
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
      const res = await axios.post(
        "http://localhost:8081/apiRest/products.php",
        formData
      );
      console.log("Respuesta del servidor:", res.data); // Muestra la respuesta del servidor
      setMessage(res.data.success); // Muestra el mensaje de éxito
      setTimeout(() => {
        navigate("/products");
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
            <p className="text-success">{message}</p>
            <form onSubmit={handleSubmit}>
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
              {formvalue.onOffer && ( // Muestra el campo de descuento solo si el checkbox está marcado
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
