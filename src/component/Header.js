import React from "react";
import { NavLink } from "react-router-dom"; // Importa NavLink para manejar la navegación entre rutas

export default function Header() {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          {/* Enlace al inicio de la aplicación */}
          <NavLink to="/" className="navbar-brand">
            Zenova
          </NavLink>

          {/* Botón para colapsar la barra de navegación en pantallas pequeñas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido colapsable de la barra de navegación */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Enlace a la página de inicio */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Inicio
                </NavLink>
              </li>

              {/* Enlace a la lista de productos */}
              <li className="nav-item">
                <NavLink to="products" className="nav-link">
                  Productos
                </NavLink>
              </li>

              {/* Enlace para agregar productos */}
              <li className="nav-item">
                <NavLink to="addproducts" className="nav-link">
                  Agregar Productos
                </NavLink>
              </li>

              {/* Enlace a la lista de categorías */}
              <li className="nav-item">
                <NavLink to="categories" className="nav-link">
                  Categorias
                </NavLink>
              </li>
            </ul>

            {/* Formulario de búsqueda */}
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
