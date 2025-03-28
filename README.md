# Proyecto MVP Backend - Node.js con Express.js

Este proyecto es el backend para el MVP de una aplicación React/Next.js. Su objetivo principal es proporcionar una API para la autenticación de usuarios mediante JWT y gestionar la comunicación con una base de datos MySQL.

## Tecnologías Utilizadas

* **Node.js con Express.js (4.21.2)**
* **SQLite **
* **CORS (2.8.5)**
* **Dotenv (16.4.7)**
* **JSON Web Token (JWT) (9.0.2)**
* **Bcrypt (5.1.1) y BcryptJS (2.4.3)**
* **axios** → Cliente HTTP para hacer peticiones al backend.

## Estructura del Proyecto

mi-backend
├── node_modules/
├── routes/                    #/ Contiene las rutas de la API
│   ├── auth.js                # Rutas de autenticación
│   └── users.js               # Rutas para la gestión de usuarios
├── models/                    #/ Define los modelos de la bd
│   └── user.js                # Modelo de usuario para la base de datos
├── config/                    
│   └── db.js                  # Configuración de la base de datos
├── .env                       # Variables de entorno
├── package.json
└── server.js                  # Punto de entrada de la aplicación

## Configuración

1.  Clona este repositorio.
2.  Asegúrate de tener MySQL instalado y configurado.
3.  Crea una base de datos y una tabla `users` con la estructura adecuada.
4.  Crea un archivo `.env` en la raíz del proyecto con las variables de entorno necesarias (credenciales de la base de datos, clave secreta de JWT).
5.  Ejecuta `npm install` para instalar las dependencias.
6.  Ejecuta `node server.js` para iniciar el servidor.

## Endpoints

* **POST /auth/login:** Inicia sesión y devuelve un JWT.
* **POST /auth/register:** Registra un nuevo usuario.

## Autenticación JWT

La API utiliza JWT para la autenticación de usuarios. El token se genera al iniciar sesión y se debe incluir en la cabecera "Authorization" de las peticiones protegidas.

## Consideraciones

* Este es un MVP, por lo que algunas funcionalidades pueden ser básicas o estar simplificadas.
* La seguridad es una prioridad, pero en un entorno de producción se requerirían medidas adicionales.

## Próximos Pasos

* Implementación de middleware para la autorización.
* Documentación de la API con Swagger o Postman.
* Implementación de pruebas unitarias y de integración.

## Contacto

[Ignacia Mendez] - [ contacto ]