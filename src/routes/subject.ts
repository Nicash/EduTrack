import { Router } from "express";
import { addSubject, listSubjects } from "../controllers/subject";

const router = Router();

// POST /subjects
router.post("/", addSubject);

// GET /subjects
router.get("/", listSubjects);

export { router };
