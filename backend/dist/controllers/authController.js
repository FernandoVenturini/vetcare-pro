"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const register = async (req, res) => {
    try {
        const { name, email, password, role, clinicId } = req.body;
        const existingUser = await User_1.default.findOne({ where: { email } });
        if (existingUser) {
            res.status(400).json({ error: "ERROR! Email já cadastrado!" });
            return;
        }
        const user = await User_1.default.create({
            name,
            email,
            password,
            role,
            clinicId,
            isActive: true,
        });
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || "secret", { expiresIn: "24h" });
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
    }
    catch (error) {
        console.error("Erro no registro:", error);
        res.status(500).json({ error: "Erro interno do servidor!" });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User_1.default.findOne({ where: { email } });
        if (!user) {
            res.status(401).json({ error: "ERROR! Credenciais inválidas!" });
            return;
        }
        const isValidPassword = await user.validatePassword(password);
        if (!isValidPassword) {
            res.status(401).json({ error: "ERROR! Credenciais inválidas!" });
            return;
        }
        if (!user.isActive) {
            res.status(401).json({ error: "ERROR! Usuário desativado!" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || "secret", { expiresIn: "24h" });
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
    }
    catch (error) {
        console.error("Erro no login:", error);
        res.status(500).json({ error: "Erro interno do servidor!" });
    }
};
exports.login = login;
//# sourceMappingURL=authController.js.map