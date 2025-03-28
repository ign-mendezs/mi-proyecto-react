# Mi MVP de React - Frontend

## Introducción
Este proyecto es el frontend de *Mi Proyecto React*, una aplicación diseñada como ayuda para el estudio y la comprensión de **React.js**. Su objetivo es presentar ejemplos claros y comentados de componentes básicos de React, facilitando el aprendizaje y la experimentación directa.

## Objetivo
- **Educativo:** Proveer ejemplos prácticos y bien documentados de componentes en React.
- **Interactividad:** Permitir que el usuario interactúe con ejemplos en vivo para observar el funcionamiento del código.
- **Claridad:** Asegurar que el código esté estructurado y comentado para facilitar la comprensión de cada paso.

## 🧱 Tecnologías utilizadas

- **React.js** (v19.0.0)
- **Next.js** (v15.1.6)
- **Tailwind CSS** – para estilos rápidos y responsivos.
- **React Hook Form** – para el manejo eficiente de formularios.
- **Axios** – para la conexión con el backend vía API REST.
- **Node.js** – entorno de ejecución del proyecto.
- **Git** – para control de versiones.

## Estructura del proyecto
nombre-del-proyecto-frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── ComponentExample.jsx
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── main.css
├── package.json
└── README.md

## 🗂️ Estructura del proyecto

A continuación se muestra una vista simplificada de la estructura del frontend, con una breve descripción de cada carpeta:

- 📁 `components/`  
  Contiene los componentes reutilizables de la interfaz.  
  - 📄 `Button.jsx` – Botón con estilos personalizados  
  - 📄 `Input.jsx` – Campo de texto controlado  
  - 📄 `CardExample.jsx` – Componente de ejemplo con props  

- 📁 `hooks/`  
  Custom Hooks para lógica reutilizable.  
  - 📄 `useFetchData.js` – Hook para llamadas a API con manejo de loading y errores  

- 📁 `pages/`  
  Páginas gestionadas por Next.js.  
  - 📄 `index.jsx` – Página principal con ejemplos de componentes  
  - 📄 `about.jsx` – Información del propósito del MVP  
  - 📁 `api/` – Endpoints internos (API routes)  
    - 📄 `hello.js` – Ejemplo de endpoint básico  

- 📁 `public/`  
  Archivos estáticos como imágenes o íconos.  
  - 🖼️ `logo.png` – Logo del proyecto  

- 📁 `services/`  
  Conexiones y funciones para interactuar con APIs externas.  
  - 📄 `apiService.js` – Función para hacer fetch con Axios  

- 📁 `styles/`  
  Estilos globales y configuración de Tailwind.  
  - 📄 `globals.css` – Estilos base del proyecto  

- 📁 `utils/`  
  Funciones auxiliares y helpers.  
  - 📄 `formatDate.js` – Formato de fechas amigable  

- ⚙️ Archivos de configuración  
  - 📄 `tailwind.config.js`  
  - 📄 `next.config.js`  
  - 📄 `postcss.config.js`  
  - 📄 `.gitignore`  
  - 📄 `package.json`  
  - 📄 `README.md`



## Instalación
1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tuusuario/mi-mvp-react.git
2. **Navega al directorio del proyecto:**
   ```bash
   cd mi-mvp-react
3. **Instala las dependencias:**
   ```bash
   npm install
4. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev

## 🧠 Enfoque educativo

Este proyecto está diseñado con un enfoque pedagógico para facilitar el aprendizaje de React. A continuación se describen los principios que guían su estructura y contenido:

- 📌 **Componentes comentados paso a paso:** Cada componente del proyecto incluye comentarios explicativos para facilitar la comprensión del código y su propósito.

- 📦 **Buenas prácticas:** El código está estructurado siguiendo convenciones y buenas prácticas comunes en proyectos reales de React.

- 💡 **Ejemplos didácticos incluidos:** La interfaz presenta ejemplos de uso de:
  - ✅ Renderizado condicional
  - 🔁 Comunicación entre componentes
  - ⚙️ Manejo de estado con hooks (`useState`, `useEffect`)
  - 📝 Formularios controlados con `React Hook Form`
  - 🌐 Llamadas a APIs REST con Axios
  - 🎨 Estilización con Tailwind CSS

- 🧩 **Organización clara:** El código está organizado por carpetas y funciones para facilitar su navegación y reutilización.

- 👀 **Código limpio y legible:** Pensado para que tanto principiantes como usuarios intermedios puedan seguir el flujo sin confusiones.

Este enfoque busca no solo mostrar cómo hacer algo en React, sino también **por qué** se hace de esa manera.
