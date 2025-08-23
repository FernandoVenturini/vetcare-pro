import { Router } from "express";
import {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from "../controllers/serviceController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getServices);
router.get("/:id", authenticateToken, getServiceById);
router.post("/", authenticateToken, createService);
router.put("/:id", authenticateToken, updateService);
router.delete("/:id", authenticateToken, deleteService);

export default router;
