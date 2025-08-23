import { Router } from "express";
import {
  getInventoryItems,
  getInventoryItemById,
  createInventoryItem,
  updateInventoryItem,
  deleteInventoryItem,
} from "../controllers/inventoryController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getInventoryItems);
router.get("/:id", authenticateToken, getInventoryItemById);
router.post("/", authenticateToken, createInventoryItem);
router.put("/:id", authenticateToken, updateInventoryItem);
router.delete("/:id", authenticateToken, deleteInventoryItem);

export default router;
