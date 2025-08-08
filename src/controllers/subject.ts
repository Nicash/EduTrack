//Definimos los controladores para las materias
import { Request, Response } from "express";
import { createSubject, getSubjects } from "../services/subject";
import { handleHttp } from "../utils/error.handle";

export const addSubject = async (req: Request, res: Response) => {
  try {
    const subject = await createSubject(req.body);
    res.status(201).json(subject);
  } catch (error) {
    handleHttp(res, "ERROR_ADD_SUBJECT");
  }
};

export const listSubjects = async (_req: Request, res: Response) => {
  try {
    const subjects = await getSubjects();
    res.json(subjects);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS'); 
  }
};
