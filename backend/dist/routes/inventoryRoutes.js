"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventoryController_1 = require("../controllers/inventoryController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authenticateToken, inventoryController_1.getInventoryItems);
router.get("/:id", authMiddleware_1.authenticateToken, inventoryController_1.getInventoryItemById);
router.post("/", authMiddleware_1.authenticateToken, inventoryController_1.createInventoryItem);
router.put("/:id", authMiddleware_1.authenticateToken, inventoryController_1.updateInventoryItem);
router.delete("/:id", authMiddleware_1.authenticateToken, inventoryController_1.deleteInventoryItem);
exports.default = router;
//# sourceMappingURL=inventoryRoutes.js.map