"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClientById = exports.getClients = void 0;
const Client_1 = __importDefault(require("../models/Client"));
const getClients = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const clients = await Client_1.default.findAll({
            where: { clinicId },
            order: [["name", "ASC"]],
        });
        res.json(clients);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar clientes" });
    }
};
exports.getClients = getClients;
const getClientById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const client = await Client_1.default.findOne({
            where: { id, clinicId },
        });
        if (!client) {
            res.status(404).json({ error: "Cliente não encontrado" });
            return;
        }
        res.json(client);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar cliente" });
    }
};
exports.getClientById = getClientById;
const createClient = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const client = await Client_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(client);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar cliente" });
    }
};
exports.createClient = createClient;
const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const client = await Client_1.default.findOne({
            where: { id, clinicId },
        });
        if (!client) {
            res.status(404).json({ error: "Cliente não encontrado" });
            return;
        }
        await client.update(req.body);
        res.json(client);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar cliente" });
    }
};
exports.updateClient = updateClient;
const deleteClient = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const client = await Client_1.default.findOne({
            where: { id, clinicId },
        });
        if (!client) {
            res.status(404).json({ error: "Cliente não encontrado" });
            return;
        }
        await client.destroy();
        res.json({ message: "Cliente excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir cliente" });
    }
};
exports.deleteClient = deleteClient;
//# sourceMappingURL=clientController.js.map