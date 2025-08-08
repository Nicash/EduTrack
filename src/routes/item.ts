import { Router } from "express";
import { getItem, getItems, updateItem, postItem, deleteItem } from "../controllers/item";
import { LogMiddleware } from "../middleware/log";

const router = Router(); //Instancia de Router 

//Ruta para obtener un solo item por ID
router.get("/:id", LogMiddleware, getItem);

//Ruta para obtener todos los items
router.get("/", getItems);

//Ruta para actualizar un item por su ID
router.put("/:id", updateItem);

//Ruta para crear un nuevo item
router.post("/", postItem);

//Ruta para eliminar un item por su ID
router.delete("/:id", deleteItem);

export { router };