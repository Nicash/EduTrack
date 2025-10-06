# EduTrack - Sistema de Gestión Educativa

EduTrack es una API REST desarrollada con Node.js, TypeScript y MongoDB para la gestión de materias de la UTN.

## 🚀 Características

- **Autenticación de usuarios** con JWT
- **Gestión de materias** (CRUD completo)
- **Sistema de notificaciones** por email
- **API REST** con TypeScript
- **Base de datos** MongoDB
- **Validación de datos** completa
- **Manejo de errores** robusto

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js + Express
- **Lenguaje**: TypeScript
- **Base de datos**: MongoDB
- **Autenticación**: JWT (JSON Web Tokens)
- **Encriptación**: bcryptjs
- **Email**: Nodemailer
- **Desarrollo**: ts-node-dev, tsc-watch

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- MongoDB (local o Atlas)
- npm o yarn

## ⚙️ Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Nicash/edutrack.git
cd edutrack
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
Las variables ya están configuradas en `.env`:
```env
EMAIL_USER=edutrack@edutrack.com.ar
EMAIL_PASS=EduTrackPass2025
DB_URI=mongodb://localhost:27017/edutrack
JWT_SECRET=edutrack_jwt_key
```

4. **Iniciar MongoDB**
- **Opción 1 - Local**: Asegúrate de que MongoDB esté ejecutándose
- **Opción 2 - Docker**: `docker-compose up -d`

## 🚀 Uso

### Modo Desarrollo
```bash
npm run dev
```

### Modo Desarrollo con Compilación
```bash
npm run developer
```

### Construcción
```bash
npm run build
npm start
```

## 📚 API Endpoints

### Endpoints Básicos
- `GET /` - Bienvenida y documentación de endpoints
- `GET /health` - Verificar estado del servidor
- `POST /ping` - Test de conectividad (responde "pong")

### Autenticación
- `POST /auth/register` - Registrar nuevo usuario
- `POST /auth/login` - Iniciar sesión

### Materias
- `POST /subject/add` - Crear nueva materia
- `GET /subject/get?name=<nombre>` - Obtener materia por nombre
- `GET /subject/getAll` - Obtener todas las materias
- `PUT /subject/update/:id` - Actualizar materia
- `DELETE /subject/delete?name=<nombre>` - Eliminar materia

### Notificaciones
- `POST /notification/send` - Enviar email

## 🧪 Testing

Utiliza el archivo `tests/api.http` con la extensión REST Client de VS Code para probar todos los endpoints.

## 📁 Estructura del Proyecto

```
edutrack/
├── src/
│   ├── controllers/     # Controladores de las rutas
│   ├── interfaces/      # Interfaces de TypeScript
│   ├── middleware/      # Middlewares (auth, logging)
│   ├── models/         # Modelos de MongoDB
│   ├── routes/         # Definición de rutas
│   ├── services/       # Lógica de negocio
│   ├── utils/          # Utilidades (JWT, bcrypt, errors)
│   ├── config/         # Configuración (MongoDB)
│   └── app.ts          # Archivo principal
├── tests/              # Archivos de testing
├── dist/               # Código compilado
├── .env               # Variables de entorno
├── package.json       # Dependencias y scripts
└── tsconfig.json      # Configuración de TypeScript
```

## 🔒 Seguridad

- Contraseñas encriptadas con bcryptjs
- Autenticación JWT
- Validación de datos de entrada
- Manejo seguro de errores

## 👨‍💻 Desarrollo

### Scripts Disponibles
- `npm run dev` - Desarrollo con recarga automática
- `npm run developer` - Desarrollo con compilación
- `npm run build` - Construir para producción
- `npm start` - Ejecutar versión de producción

### Convenciones de Código
- TypeScript estricto
- Código en inglés, comentarios en español
- Nomenclatura descriptiva
- Separación clara de responsabilidades

## 📝 Licencia

GNU General Public License v3.0

## 🤝 Contribución

Este es un proyecto educativo desarrollado por Marcos Gómez y Nicolás Chaves para la Facultad Regional Venado Tuerto de la Universidad Tecnológica Nacional. Las contribuciones son bienvenidas para fines académicos.