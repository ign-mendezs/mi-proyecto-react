# Proyecto MVP Frontend - React/Next.js

Este proyecto es un MVP (Producto Mínimo Viable) diseñado para explorar y demostrar la implementación de diversas herramientas y tecnologías en un entorno React/Next.js. El objetivo principal es poner en práctica conceptos como la autenticación JWT, el manejo de formularios con React Hook Form, la comunicación con un backend Node.js mediante Axios y el estilizado con Tailwind CSS.

## Tecnologías Utilizadas

* **React (19.0.0)**
* **Next.js (15.1.6)**
* **Tailwind CSS**
* **Axios**
* **React Hook Form**

## Estructura del Proyecto

mi-proyecto-react/
├── components/
│   ├── LoginForm.js           # Formulario de inicio de sesión
│   ├── RegisterForm.js        # Formulario de registro
│   └── ProtectedRoute.js      # Componente para proteger rutas
├── pages/
│   ├── index.js               # Página principal protegida
│   └── login.js               # Página de inicio de sesión
├── services/
│   └── authService.js         # Servicio para la autenticación
└── utils/
└── api.js                 # Configuración de Axios

## Configuración

1.  Clona este repositorio.
2.  Ejecuta `npm install` para instalar las dependencias.
3.  Ejecuta `npm run dev` para iniciar el servidor de desarrollo.

## Comunicación con el Backend

El frontend se comunica con el backend Node.js mediante peticiones HTTP utilizando Axios. El token JWT se almacena en `localStorage` y se incluye en la cabecera "Authorization" de las peticiones protegidas.

## Consideraciones

* Este es un MVP, por lo que algunas funcionalidades pueden ser básicas o estar simplificadas.
* La gestión de errores y la validación de formularios pueden ser mejoradas en un entorno de producción.

## Próximos Pasos

* Implementación de pruebas unitarias y de integración.
* Mejoras en la interfaz de usuario y la experiencia del usuario.
* Integración con una base de datos real.

## Contacto

[Tu Nombre/Usuario de GitHub] - [Tu Correo Electrónico]