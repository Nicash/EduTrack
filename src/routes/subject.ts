import { Router } from "express";
import { addSubject, listSubjects } from "../controllers/subject";

//Rutas para las materias
const router = Router();

// POST /subjects
router.post("/", addSubject);

// GET /subjects
router.get("/", listSubjects);

export { router };
