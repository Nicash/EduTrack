//Schema sirve para definir la estructura de los documentos en una coleccion de MongoDB
//Model convierte un Schema en un modelo, que es el que permite interactura con la base de datos
import { Schema, model } from "mongoose";
import { Subject } from "../interfaces/subject.interface";

//Creacion el Schema de la materia
const SubjectSchema = new Schema<Subject>({
  name: { type: String, required: true },
  year: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey: false
});

//Creacion del modelo de materia 
const SubjectModel = model("subjects", SubjectSchema);
export default SubjectModel;
