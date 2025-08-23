"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authenticateToken, clientController_1.getClients);
router.get("/:id", authMiddleware_1.authenticateToken, clientController_1.getClientById);
router.post("/", authMiddleware_1.authenticateToken, clientController_1.createClient);
router.put("/:id", authMiddleware_1.authenticateToken, clientController_1.updateClient);
router.delete("/:id", authMiddleware_1.authenticateToken, clientController_1.deleteClient);
exports.default = router;
//# sourceMappingURL=clientRoutes.js.map