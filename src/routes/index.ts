import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; //Representa la ruta del directorio actual donde se encuentra este archivo
const router = Router();

//Funcion para limpiar el nombre del archivo
//Elimina la extension del archivo
const clearFileName = (fileName: string) => {
  return fileName.split(".").shift();
};

//Funcion para leer los archivos del directorio y cargarlos dinámicamente
//Lee todos los archivos del directorio actual y filtra para obtener solo los archivos
readdirSync(PATH_ROUTER).forEach((fileName) => {

    const clearName = clearFileName(fileName); //Obtenemos el nombre de los archivos sin extension
    //Descartamos el nombre de index, ya que no lo necesitamos
    if (clearName !== "index") {

        //Se importa dinamimcamente el archivo como modulo
        import(`./${clearName}`).then((moduleRouter) => {

            console.log(`Loading route: ${clearName}`); //Mostramos la ruta con el nombre sin extension
            router.use(`/${clearName}`, moduleRouter.router); //Se monta la ruta en express
        });
    }
});

export { router };