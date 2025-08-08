import { Schema, Types, model, Model} from "mongoose";
import { Car } from "../interfaces/car.interface";

//Schema define la estructura de los documentos
//Model crea el modelo a partir del Schema

//Se crea un nuevo Schema y se tipa con la interfaz de Car
//required hace que el dato sea obligatorio
const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    },

    {
        timestamps: true,  //Agrega la fecha y hora en la que se creo el documento y cuando se actualice 
        versionKey: false, //Desactiva el control de versiones por defecto de moongose
    }
);

//Se crea el modelo ItemModel, que representa la colección de items en la base de datos
//Ahora se puede hacer ItemModel.find() y ItemModel.create()
const ItemModel = model("items", ItemSchema);

export default ItemModel