//Definimos el esquema de datos para las materias

import { Schema, model } from "mongoose";
import { Subject } from "../interfaces/subject.interface";

const SubjectSchema = new Schema<Subject>({
  name: { type: String, required: true },
  year: { type: Number, required: true }
}, {
  timestamps: true,
  versionKey: false
});

const SubjectModel = model("subjects", SubjectSchema);
export default SubjectModel;
