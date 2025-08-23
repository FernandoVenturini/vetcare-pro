import { Router } from "express";
import { register, login } from "../controllers/authController";
import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

// Rotas públicas
router.post("/register", register);
router.post("/login", login);

// Rota protegida para verificar token
router.get("/verify", authenticateToken, (req, res) => {
  res.json({ message: "Token válido", user: (req as any).user });
});

export default router;
