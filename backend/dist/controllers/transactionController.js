"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.getTransactionById = exports.getTransactions = void 0;
const Transaction_1 = __importDefault(require("../models/Transaction"));
const getTransactions = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const transactions = await Transaction_1.default.findAll({
            where: { clinicId },
            order: [["createdAt", "DESC"]],
        });
        res.json(transactions);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar transações" });
    }
};
exports.getTransactions = getTransactions;
const getTransactionById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const transaction = await Transaction_1.default.findOne({
            where: { id, clinicId },
        });
        if (!transaction) {
            res.status(404).json({ error: "Transação não encontrado" });
            return;
        }
        res.json(transaction);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar transação" });
    }
};
exports.getTransactionById = getTransactionById;
const createTransaction = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const transaction = await Transaction_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(transaction);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar transação" });
    }
};
exports.createTransaction = createTransaction;
const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const transaction = await Transaction_1.default.findOne({
            where: { id, clinicId },
        });
        if (!transaction) {
            res.status(404).json({ error: "Transação não encontrado" });
            return;
        }
        await transaction.update(req.body);
        res.json(transaction);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar transação" });
    }
};
exports.updateTransaction = updateTransaction;
const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const transaction = await Transaction_1.default.findOne({
            where: { id, clinicId },
        });
        if (!transaction) {
            res.status(404).json({ error: "Transação não encontrado" });
            return;
        }
        await transaction.destroy();
        res.json({ message: "Transação excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir transação" });
    }
};
exports.deleteTransaction = deleteTransaction;
//# sourceMappingURL=transactionController.js.map