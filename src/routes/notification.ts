// Librerías externas
import { Router } from "express";

// Módulos locales
import { sendNotification } from "../controllers/notification";

// Ruta para notificaciones
const router = Router();

// POST /send
router.post("/send", sendNotification);

export { router };