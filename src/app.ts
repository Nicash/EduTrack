import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 3001; //Puerto donde se ejecuta el servidor
const app = express(); //Instancia de express

app.use(cors()); //Uso de cors para que el servidor admita peticiones desde otros dominios
app.use(express.json()); //Permite que express interprete datos JSON
app.use(router); //Conjunto de rutas definidas en router

db().then(() => console.log("conexion Ready")); //Se conecta a la base de datos 

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);
});

//Inicia el servidor web de Express, el cual escucha (acepta conexiones) en el puerto PORT