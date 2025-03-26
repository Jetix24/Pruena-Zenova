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
