"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patientController_1 = require("../controllers/patientController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authenticateToken, patientController_1.getPatients);
router.get("/:id", authMiddleware_1.authenticateToken, patientController_1.getPatientById);
router.post("/", authMiddleware_1.authenticateToken, patientController_1.createPatient);
router.put("/:id", authMiddleware_1.authenticateToken, patientController_1.updatePatient);
router.delete("/:id", authMiddleware_1.authenticateToken, patientController_1.deletePatient);
exports.default = router;
//# sourceMappingURL=patientRoutes.js.map