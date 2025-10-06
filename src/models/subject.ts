// Schema sirve para definir la estructura de los documentos en una colección de MongoDB
// Model convierte un Schema en un modelo, que es el que permite interactuar con la base de datos

// Librerías externas
import { Schema, model } from "mongoose";

// Módulos locales
import { Subject } from "../interfaces/subject.interface";

// Creación del Schema de la materia
const SubjectSchema = new Schema<Subject>({
  name: { type: String, required: true, unique: true },
  objective: { type: String, required: true },
  content: {type: String, required: true}
},
{
  timestamps: true,
  versionKey: false
});

// Creación del modelo de materia 
const SubjectModel = model("subjects", SubjectSchema);
export default SubjectModel;
