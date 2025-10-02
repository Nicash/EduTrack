import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

//Ruta para la autenticacion
const router = Router();

// POST /register
router.post("/register", registerCtrl);

// POST /login
router.post("/login", loginCtrl);


export {router};