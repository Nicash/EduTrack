import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

//Crea un nuevo auto en la base de datos
const insertCar = async (item: Car) => {

    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

//Devuelve todos los autos almacenados en la base de datos
const getCars = async () => {

    const responseItem = await ItemModel.find({});
    return responseItem;
};

//Devuelve un solo auto, buscandolo por su ID
const getCar = async (id: string) => {

    const responseItem = await ItemModel.findOne({_id: id});
    return responseItem;
};

//Actualiza un auto, buscandolo por su ID
const updateCar = async (id: string, data: Car) => {

    const responseItem = await ItemModel.findOneAndUpdate (
        {_id: id}, 
        data, //Contiene los nuevos datos del auto
        {new: true} //Indica que se debe devolver el documento actualizado
    );
    return responseItem;
};

//Elimina un auto, buscandolo por su ID
const deleteCar = async (id: string) => {

    const responseItem = await ItemModel.deleteOne({_id: id});
    return responseItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };