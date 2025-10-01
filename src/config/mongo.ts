import "dotenv/config";
import { connect } from "mongoose";

//Función asíncrona porque la conexión a la base de datos es un proceso asincrono.
async function dbConnect(): Promise<void> {

    const DB_URI = <string>process.env.DB_URI; //Extrae la URI de conexión

    try {
        await connect(DB_URI); //Intento de conexion a la base de datos
        console.log("Conexión a MongoDB exitosa"); //Conexion exitosa
        
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error); //Informe de error
    }
}

export default dbConnect;