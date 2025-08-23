"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.authenticateToken, appointmentController_1.getAppointments);
router.get('/:id', authMiddleware_1.authenticateToken, appointmentController_1.getAppointmentById);
router.post('/', authMiddleware_1.authenticateToken, appointmentController_1.createAppointment);
router.put('/:id', authMiddleware_1.authenticateToken, appointmentController_1.updateAppointment);
router.delete('/:id', authMiddleware_1.authenticateToken, appointmentController_1.deleteAppointment);
exports.default = router;
//# sourceMappingURL=appointmentRoutes.js.map