// Librerías externas
import { Router } from "express";

// Módulos locales
import { addSubject, getSubject, getAllSubjects, deleteSubject, updateSubject } from "../controllers/subject";

// Rutas para las materias
const router = Router();

// POST /subject/add - Crear nueva materia
router.post("/add", addSubject);

// GET /subject/get - Obtener materia por nombre
router.get("/get", getSubject);

// GET /subject/getAll - Obtener todas las materias
router.get("/getAll", getAllSubjects);

// DELETE /subject/delete - Eliminar materia por nombre
router.delete("/delete", deleteSubject);

// PUT /subject/update/:id - Actualizar materia por ID
router.put("/update/:id", updateSubject);

export { router };