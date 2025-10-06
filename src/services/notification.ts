// Librerías externas
import nodemailer from "nodemailer"; // Librería para enviar emails

// Creación de transportador
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  // Credenciales de seguridad
  auth: { 
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  },
});

// Servicio enviar email
export const sendEmail = async (to: string, subject: string, message: string) => {
  console.log(`📧 Sending email to: ${to}`);
  console.log(`🔑 Using email user: ${process.env.EMAIL_USER}`);
  console.log(`🔒 Password configured: ${process.env.EMAIL_PASS ? 'YES' : 'NO'}`);

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: message,
    });

    console.log(`✅ Email sent successfully to: ${to}`);
    console.log(`📨 Message ID: ${info.messageId}`);

    return info;
  } catch (error) {
    console.error(`❌ Failed to send email to: ${to}`);
    console.error(`🚨 Error details:`, error);
    throw error; // Re-lanzar el error para que lo capture el controlador
  }
};