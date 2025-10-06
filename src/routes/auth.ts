// Librerías externas
import { Router } from "express";

// Módulos locales
import { registerCtrl, loginCtrl } from "../controllers/auth";

// Ruta para la autenticación
const router = Router();

// POST /register
router.post("/register", registerCtrl);

// POST /login
router.post("/login", loginCtrl);

export { router };