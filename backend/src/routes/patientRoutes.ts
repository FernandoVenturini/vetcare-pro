import { Router } from "express";
import {
  getPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patientController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getPatients);
router.get("/:id", authenticateToken, getPatientById);
router.post("/", authenticateToken, createPatient);
router.put("/:id", authenticateToken, updatePatient);
router.delete("/:id", authenticateToken, deletePatient);

export default router;
