// Librerías externas
import { Request, Response } from "express";

// Módulos locales
import { sendEmail } from "../services/notification";

// Controlador enviar notificaciones
export const sendNotification = async (req: Request, res: Response) => {
    try {
        const { to, subject, message } = req.body;

        if (!to || !subject || !message) {
            return res.status(400).json({ error:"Missing parameters" }); // Error si faltan parámetros
        }

        console.log(`🔧 Attempting to send email to: ${to}`);
        console.log(`📧 Email user configured: ${process.env.EMAIL_USER}`);
        
        const result = await sendEmail(to, subject, message); // Envío exitoso de email
        return res.status(200).json({ message:"Notification sent", result });

    } catch (error) {
        console.error("❌ Email error details:", error); // Log del error completo
        return res.status(500).json({ 
            error: "Error sending notification",
            details: error instanceof Error ? error.message : "Unknown error"
        });
    }
};