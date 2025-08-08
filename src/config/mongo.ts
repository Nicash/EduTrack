import "dotenv/config";
import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    try {
        await connect(DB_URI);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
}

export default dbConnect;