"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInventoryItem = exports.updateInventoryItem = exports.createInventoryItem = exports.getInventoryItemById = exports.getInventoryItems = void 0;
const InventoryItem_1 = __importDefault(require("../models/InventoryItem"));
const getInventoryItems = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const items = await InventoryItem_1.default.findAll({
            where: { clinicId },
            order: [["name", "ASC"]],
        });
        res.json(items);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar itens do inventário" });
    }
};
exports.getInventoryItems = getInventoryItems;
const getInventoryItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const item = await InventoryItem_1.default.findOne({
            where: { id, clinicId },
        });
        if (!item) {
            res.status(404).json({ error: "Item não encontrado" });
            return;
        }
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar item" });
    }
};
exports.getInventoryItemById = getInventoryItemById;
const createInventoryItem = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const item = await InventoryItem_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(item);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar item" });
    }
};
exports.createInventoryItem = createInventoryItem;
const updateInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const item = await InventoryItem_1.default.findOne({
            where: { id, clinicId },
        });
        if (!item) {
            res.status(404).json({ error: "Item não encontrado" });
            return;
        }
        await item.update(req.body);
        res.json(item);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar item" });
    }
};
exports.updateInventoryItem = updateInventoryItem;
const deleteInventoryItem = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const item = await InventoryItem_1.default.findOne({
            where: { id, clinicId },
        });
        if (!item) {
            res.status(404).json({ error: "Item não encontrado" });
            return;
        }
        await item.destroy();
        res.json({ message: "Item excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir item" });
    }
};
exports.deleteInventoryItem = deleteInventoryItem;
//# sourceMappingURL=inventoryController.js.map