import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { handleHttp } from "../utils/error.handle";
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../services/item";

//Controlador de getICar
const getItem = async ({ params }: Request, res: Response) => {
    try {

        const {id} = params;
        const response = await getCar(id);
        const data = response ? response : "NOT_FOUND"; //Condicional simple
        res.send(data);
    } catch (e) {

        handleHttp(res, 'ERROR_GET_ITEM');    
    }
};

//Controlador de getCars
const getItems = async (req: Request, res: Response) => {
    try {

        const response = await getCars();
        res.send(response);
    } catch (e) {

        handleHttp(res, 'ERROR_GET_ITEMS');    
    }
};

//Controlador de updateCar
const updateItem = async ({params, body}: Request, res: Response) => {
    try {

        const {id} = params;
        const response = await updateCar(id, body);
        res.send(response);
    } catch (e) {

        handleHttp(res, 'ERROR_UPDATE_ITEM');    
    }
};

//Controlador de insertCar()
const postItem = async ({body}: Request, res: Response) => {
    try {

        const responseItem = await insertCar(body);
        res.send(responseItem);
    } catch (e) {

        handleHttp(res, 'ERROR_POST_ITEM', e);    
    }
};

//Controlador de deleteCar()
const deleteItem = async ({params}: Request, res: Response) => {
    try {

        const {id} = params;
        const response = await deleteCar(id);
        res.send(response);
    } catch (e) {

        handleHttp(res, 'ERROR_DELETE_ITEM');    
    }
};

export { getItem, getItems, updateItem, postItem, deleteItem };