//Definimos la lógica de negocio para las materias

import SubjectModel from "../models/subject";
import { Subject } from "../interfaces/subject.interface";

//Servicio de creacion de materias
export const createSubject = async (data: Subject) => {
  const subject = await SubjectModel.create(data);
  return subject;
};

//Servicio obtener materias
export const getSubjects = async () => {
  return await SubjectModel.find();
};
