//Schema sirve para definir la estructura de los documentos en una coleccion de MongoDB
//Model convierte un Schema en un modelo, que es el que permite interactura con la base de datos
import { Schema, Types, model, Model} from "mongoose";
import { User } from "../interfaces/user.interface";

//Creacion del Schema del usuario
const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            default: "---",
        }
    },

    {
        timestamps: true,
        versionKey: false,
    }
);

//Creacion del modelo de usuario
const UserModel = model("users", UserSchema);

export default UserModel
