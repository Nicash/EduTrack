// Configuración de variables de entorno
import "dotenv/config";

// Librerías externas
import express from "express";
import cors from "cors";

// Módulos locales
import { router } from "./routes";
import { LogMiddleware } from "./middleware/log";
import db from "./config/mongo";

// Configuración del servidor
const PORT = process.env.PORT || 3001; //Puerto donde se ejecuta el servidor
const app = express(); //Instancia de express

// ===================================
// MIDDLEWARE CONFIGURATION
// ===================================
app.use(cors()); //Uso de cors para que el servidor admita peticiones desde otros dominios
app.use(express.json()); //Permite que express interprete datos JSON
app.use(LogMiddleware); //Middleware para logging de peticiones

// ===================================
// BASIC ENDPOINTS
// ===================================

// Endpoint raíz para bienvenida
app.get("/", (req, res) => {
    res.status(200).json({
        message: "¡Bienvenido a EduTrack API!",
        description: "Sistema de Gestión Educativa - UTN FRVT",
        authors: "Marcos Gómez y Nicolás Chaves",
        version: "1.0.0",
        endpoints: {
            health: "GET /health",
            auth: "POST /auth/register, POST /auth/login",
            subjects: "GET /subject/getAll, POST /subject/add",
            notifications: "POST /notification/send"
        }
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "EduTrack API funcionando correctamente",
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    });
});

// Endpoint ping-pong
app.post("/ping", (req, res) => {
    res.status(200).json({ 
        message: "pong",
        timestamp: new Date().toISOString(),
        server: "EduTrack API"
    });
});

app.use(router); //Conjunto de rutas definidas en router

db(); //Se conecta a la base de datos 


//Inicia el servidor web de Express, el cual escucha (acepta conexiones) en el puerto PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
