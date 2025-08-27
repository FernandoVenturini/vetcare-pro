import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role, clinicId } = req.body;

    // Verificar se usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: "ERROR! Email já cadastrado!" });
      return;
    }

    // Criar novo usuário
    const user = await User.create({
      name,
      email,
      password,
      role,
      clinicId,
      isActive: true,
    });

    // Gerar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "24h" }
    );

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        clinicId: user.clinicId,
      },
      token,
    });
  } catch (error) {
    console.error("Erro no registro:", error);
    res.status(500).json({ error: "Erro interno do servidor!" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Encontrar usuário
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ error: "ERROR! Credenciais inválidas!" });
      return;
    }

    // Verificar senha
    const isValidPassword = await user.validatePassword(password);
    if (!isValidPassword) {
      res.status(401).json({ error: "ERROR! Credenciais inválidas!" });
      return;
    }

    // Verificar se usuário está ativo
    if (!user.isActive) {
      res.status(401).json({ error: "ERROR! Usuário desativado!" });
      return;
    }

    // Gerar token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "secret",
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login realizado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        clinicId: user.clinicId,
      },
      token,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ error: "Erro interno do servidor!" });
  }
};
