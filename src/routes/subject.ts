import { Router } from "express";
import { addSubject, getSubject, getAllSubjects, deleteSubject, updateSubject } from "../controllers/subject";

//Rutas para las materias
const router = Router();

// POST /subjects/add
router.post("/add", addSubject);

//GET /subject/get
router.get("/get", getSubject);

// GET /subjects/list
router.get("/getAll", getAllSubjects);

// DELETE /subject/delete
router.delete("/delete", deleteSubject);

// UPDATE /subject/update
router.put("/update/:id", updateSubject)

export { router };