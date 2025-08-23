"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicalRecordController_1 = require("../controllers/medicalRecordController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get("/", authMiddleware_1.authenticateToken, medicalRecordController_1.getMedicalRecords);
router.get("/:id", authMiddleware_1.authenticateToken, medicalRecordController_1.getMedicalRecordById);
router.post("/", authMiddleware_1.authenticateToken, medicalRecordController_1.createMedicalRecord);
router.put("/:id", authMiddleware_1.authenticateToken, medicalRecordController_1.updateMedicalRecord);
router.delete("/:id", authMiddleware_1.authenticateToken, medicalRecordController_1.deleteMedicalRecord);
exports.default = router;
//# sourceMappingURL=medicalRecordRoutes.js.map