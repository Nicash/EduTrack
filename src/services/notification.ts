import nodemailer from "nodemailer"; //Libreria para enviar emails

//Creacion de transportador
const transporter = nodemailer.createTransport({

    service: "gmail", //Se usara gmail como servicio

    //Credenciales de seguridad
    auth: { 
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

//Servicio enviar gmail
export const sendEmail = async (to: string,subject: string, message: string) => {

    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, //remitente
        to, //destinatario
        subject, //asunto
        text: message, //mensaje
    });

    return info;

};