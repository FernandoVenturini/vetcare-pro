import { Router } from "express";
import {
  getMedicalRecords,
  getMedicalRecordById,
  createMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,
} from "../controllers/medicalRecordController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getMedicalRecords);
router.get("/:id", authenticateToken, getMedicalRecordById);
router.post("/", authenticateToken, createMedicalRecord);
router.put("/:id", authenticateToken, updateMedicalRecord);
router.delete("/:id", authenticateToken, deleteMedicalRecord);

export default router;
