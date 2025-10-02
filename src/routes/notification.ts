import {Router} from "express";
import { sendNotification } from "../controllers/notification";

//Ruta para notificaciones
const router = Router();

// POST /send
router.post("/send", sendNotification);

export {router};