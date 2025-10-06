// Definimos la lógica de negocio para las materias

// Módulos locales
import SubjectModel from "../models/subject";
import { Subject } from "../interfaces/subject.interface";

// Servicio de creación de materias
export const createSubject = async (data: Subject) => {
  const subject = await SubjectModel.create(data);
  return subject;
};

// Servicio para obtener materia por nombre
export const obtainSubject = async (name: string) => {
  return await SubjectModel.findOne({name});
};

// Servicio para obtener todas las materias
export const obtainAllSubjects = async () => {
  return await SubjectModel.find({});
};

// Servicio para eliminar materia por nombre
export const removeSubject = async (name: string) => {
  return await SubjectModel.findOneAndDelete({name});
};

// Servicio para modificar materia por ID
export const modifySubject = async (id: string, data: Subject) => {
  return await SubjectModel.findByIdAndUpdate(id, data, {new: true}); // Devuelve el documento actualizado
};
