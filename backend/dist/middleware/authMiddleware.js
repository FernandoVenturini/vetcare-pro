"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            res.status(401).json({ error: "Token de acesso necessário" });
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || "secret");
        const user = await User_1.default.findByPk(decoded.id);
        if (!user || !user.isActive) {
            res.status(401).json({ error: "Usuário não encontrado ou desativado" });
            return;
        }
        req.user = {
            id: user.id,
            email: user.email,
            role: user.role,
            clinicId: user.clinicId,
        };
        next();
    }
    catch (error) {
        res.status(403).json({ error: "Token inválido" });
    }
};
exports.authenticateToken = authenticateToken;
const requireRole = (roles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!user || !roles.includes(user.role)) {
            res.status(403).json({ error: "Acesso negado" });
            return;
        }
        next();
    };
};
exports.requireRole = requireRole;
//# sourceMappingURL=authMiddleware.js.map