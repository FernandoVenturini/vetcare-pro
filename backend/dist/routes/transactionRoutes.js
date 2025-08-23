"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = require("../controllers/transactionController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authenticateToken, transactionController_1.getTransactions);
router.get("/:id", authMiddleware_1.authenticateToken, transactionController_1.getTransactionById);
router.post("/", authMiddleware_1.authenticateToken, transactionController_1.createTransaction);
router.put("/:id", authMiddleware_1.authenticateToken, transactionController_1.updateTransaction);
router.delete("/:id", authMiddleware_1.authenticateToken, transactionController_1.deleteTransaction);
exports.default = router;
//# sourceMappingURL=transactionRoutes.js.map