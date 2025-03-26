# Getting Started with the Project

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- [Node.js](https://nodejs.org/) (versión 16 o superior recomendada)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- Un servidor local para PHP, como [XAMPP](https://www.apachefriends.org/) o [WAMP](https://www.wampserver.com/).

---

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/Jetix24/Pruena-Zenova.git
   cd prueba

   ```

2. Instalar las dependencias del proyecto

   ```bash
   npm install´

   ```

3. Configura el servidor PHP:

   - Coloca los archivos PHP en la carpeta correspondiente del servidor local (por ejemplo, `htdocs` en XAMPP).
   - Asegúrate de que el archivo `products.php` esté ubicado en la ruta:
     `http://localhost:8081/apiRest/products.php`.
   - Inicia el servidor PHP:
     - **Si usas XAMPP**:
       - Abre el panel de control de XAMPP.
       - Inicia los servicios de **Apache** y **MySQL**.
     - **Si usas otro servidor**:
       - Asegúrate de que el servidor esté configurado para escuchar en el puerto `8081`.

4. Inicia la aplicación React:
   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm start
     ```
   - Abre [http://localhost:3000](http://localhost:3000) en tu navegador para interactuar con la aplicación.

---

## Funcionalidades que se podrían implementar

A continuación, se describen algunas funcionalidades adicionales que podrían mejorar la aplicación:

### 1. Gestión de categorías

- **Descripción**: Implementar un sistema para gestionar categorías desde el frontend.
- **Detalles**:
  - Crear una interfaz para agregar, editar y eliminar categorías.
  - Mostrar una lista de categorías disponibles en una página dedicada.
  - Relacionar las categorías con los productos para que cada producto pertenezca a una categoría específica.

### 2. Relación entre productos y categorías

- **Descripción**: Establecer una relación entre los productos y las categorías.
- **Detalles**:
  - Al agregar o editar un producto, permitir seleccionar una categoría de una lista desplegable.
  - Mostrar la categoría asociada a cada producto en la tabla de productos.
  - Filtrar productos por categoría en la lista de productos.

### 3. Edición de productos desde el frontend

- **Descripción**: Implementar la funcionalidad para editar productos directamente desde el frontend.
- **Detalles**:
  - Agregar un botón "Editar" en la tabla de productos.
  - Al hacer clic en "Editar", redirigir al usuario a un formulario prellenado con los datos del producto seleccionado.
  - Permitir actualizar los datos del producto y enviarlos al servidor mediante una solicitud `PUT`.

### 4. Eliminación de productos desde el frontend

- **Descripción**: Implementar la funcionalidad para eliminar productos desde el frontend.
- **Detalles**:
  - Agregar un botón "Eliminar" en la tabla de productos.
  - Al hacer clic en "Eliminar", mostrar una confirmación antes de proceder.
  - Enviar una solicitud `DELETE` al servidor para eliminar el producto seleccionado.
  - Actualizar la lista de productos en el frontend después de la eliminación.

### 5. Búsqueda y filtrado de productos

- **Descripción**: Mejorar la experiencia del usuario al buscar productos.
- **Detalles**:
  - Implementar un campo de búsqueda en la barra de navegación para buscar productos por nombre o descripción.
  - Agregar filtros avanzados para buscar productos por categoría, precio, calificación, etc.

---

Estas funcionalidades no solo mejorarían la experiencia del usuario, sino que también harían que la aplicación sea más completa y robusta. ¡Son excelentes puntos de partida para futuras iteraciones del proyecto!
