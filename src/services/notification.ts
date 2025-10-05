import nodemailer from "nodemailer"; //Libreria para enviar emails

//Creacion de transportador
const transporter = nodemailer.createTransport({

  host: "smtp.gmail.com",
  port: 465,
  secure: true,

  //Credenciales de seguridad
  auth: { 
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  },
});

//Servicio enviar gmail
export const sendEmail = async (to: string, subject: string, message: string) => {

  console.log(`📧 Sending email to: ${to}`);

  const info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text: message,
  });

  console.log(`✅ Email sent to: ${to}`);

  return info;
};