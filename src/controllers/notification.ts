import { Request, Response } from "express";
import { sendEmail } from "../services/notification";

//Controlador enviar notificaciones
export const sendNotification = async (req: Request, res: Response) => {
    try {

        const {to, subject, message} = req.body;

        if (!to || !subject ||!message) {
            return res.status(400).json({error:"Missing parameters"}); //Error si faltan parametros
        }

        const result = await sendEmail(to, subject, message); //Envio exitoso de gmail
        return res.status(200).json({message:"Notification sent", result});

    } catch (error) {
        return res.status(500).json({error: "Error sending notification"}); //Manejo de errores
    }
};