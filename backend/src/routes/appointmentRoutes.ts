import { Router } from 'express';
import { 
  getAppointments, 
  getAppointmentById, 
  createAppointment, 
  updateAppointment, 
  deleteAppointment 
} from '../controllers/appointmentController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.get('/', authenticateToken, getAppointments);
router.get('/:id', authenticateToken, getAppointmentById);
router.post('/', authenticateToken, createAppointment);
router.put('/:id', authenticateToken, updateAppointment);
router.delete('/:id', authenticateToken, deleteAppointment);

export default router;