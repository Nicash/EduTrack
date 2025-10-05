//Definimos los controladores para las materias
import { Request, Response } from "express";
import { createSubject, obtainAllSubjects, obtainSubject, removeSubject, modifySubject } from "../services/subject";
import { handleHttp } from "../utils/error.handle";

//Controlador agregar materias
export const addSubject = async (req: Request, res: Response) => {
  try {
    const subject = await createSubject(req.body);
    res.status(201).json(subject);
  } catch (error) {
    handleHttp(res, "ERROR_ADD_SUBJECT");
  }
};

//Controlador obtener materia
export const getSubject = async (req: Request, res: Response) => {
  try {
    const {name} = req.query;
    const subject = await obtainSubject(name as string);
    res.status(200).json(subject);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

//Controlador obtener todas las materias
export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const subjects = await obtainAllSubjects();
    res.status(200).json(subjects);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEMS'); 
  }
};

//Controlador eliminar materia
export const deleteSubject = async (req: Request, res: Response) => {
  try {
    const {name} = req.query;
    const deletedSubject = await removeSubject(name as string);

    if (!deletedSubject) {
      return res.status(404).json({ message: 'Subject not found' });
    }

    res.status(200).json({
    message: 'Subject deleted successfully',
    deletedSubject: deletedSubject
    });
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};

//Controlador modificar materia
export const updateSubject = async (req: Request, res: Response) => {
  try {

    const {id} = req.params;
    const updateData = req.body;

    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }

    const subject = await modifySubject(id, updateData);

    if (!subject) {
      return res.status(404).json({ error: 'Subject not found' });
    }

    res.status(200).json(subject);
  } catch (error) {
    handleHttp(res, 'ERROR_GET_ITEM');
  }
};