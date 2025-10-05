//Definimos la lógica de negocio para las materias

import SubjectModel from "../models/subject";
import { Subject } from "../interfaces/subject.interface";

//Servicio de creacion de materias
export const createSubject = async (data: Subject) => {
  const subject = await SubjectModel.create(data);
  return subject;
};

//Servicio obtener materia
export const obtainSubject = async (name: string) => {
  return await SubjectModel.findOne({name});
};

//Servicio obtener materias
export const obtainAllSubjects = async () => {
  return await SubjectModel.find({});
};

//Servicio eliminar materia
export const removeSubject = async (name: string) => {
  return await SubjectModel.findOneAndDelete({name});
};

//Servicio modificar materia
export const modifySubject = async (id: string, data: Subject) => {
  return await SubjectModel.findByIdAndUpdate(id, data, {new: true}); //Devuelve el documento actualizado
};
