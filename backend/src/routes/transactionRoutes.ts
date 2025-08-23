import { Router } from "express";
import {
  getTransactions,
  getTransactionById,
  createTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getTransactions);
router.get("/:id", authenticateToken, getTransactionById);
router.post("/", authenticateToken, createTransaction);
router.put("/:id", authenticateToken, updateTransaction);
router.delete("/:id", authenticateToken, deleteTransaction);

export default router;
