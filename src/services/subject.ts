//Definimos la lógica de negocio para las materias

import SubjectModel from "../models/subject";
import { Subject } from "../interfaces/subject.interface";

export const createSubject = async (data: Subject) => {
  const subject = await SubjectModel.create(data);
  return subject;
};

export const getSubjects = async () => {
  return await SubjectModel.find();
};
