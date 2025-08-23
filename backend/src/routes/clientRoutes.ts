import { Router } from "express";
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clientController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getClients);
router.get("/:id", authenticateToken, getClientById);
router.post("/", authenticateToken, createClient);
router.put("/:id", authenticateToken, updateClient);
router.delete("/:id", authenticateToken, deleteClient);

export default router;
