import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      res.status(401).json({ error: "Token de acesso necessário" });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secret"
    ) as any;

    const user = await User.findByPk(decoded.id);
    if (!user || !user.isActive) {
      res.status(401).json({ error: "Usuário não encontrado ou desativado" });
      return;
    }

    (req as any).user = {
      id: user.id,
      email: user.email,
      role: user.role,
      clinicId: user.clinicId,
    };

    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido" });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user || !roles.includes(user.role)) {
      res.status(403).json({ error: "Acesso negado" });
      return;
    }

    next();
  };
};
