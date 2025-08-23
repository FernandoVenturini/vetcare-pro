"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getServices = void 0;
const Service_1 = __importDefault(require("../models/Service"));
const getServices = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const services = await Service_1.default.findAll({
            where: { clinicId },
            order: [["name", "ASC"]],
        });
        res.json(services);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar serviços" });
    }
};
exports.getServices = getServices;
const getServiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const service = await Service_1.default.findOne({
            where: { id, clinicId },
        });
        if (!service) {
            res.status(404).json({ error: "Serviço não encontrado" });
            return;
        }
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar serviço" });
    }
};
exports.getServiceById = getServiceById;
const createService = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const service = await Service_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(service);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar serviço" });
    }
};
exports.createService = createService;
const updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const service = await Service_1.default.findOne({
            where: { id, clinicId },
        });
        if (!service) {
            res.status(404).json({ error: "Serviço não encontrado" });
            return;
        }
        await service.update(req.body);
        res.json(service);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar serviço" });
    }
};
exports.updateService = updateService;
const deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const service = await Service_1.default.findOne({
            where: { id, clinicId },
        });
        if (!service) {
            res.status(404).json({ error: "Serviço não encontrado" });
            return;
        }
        await service.destroy();
        res.json({ message: "Serviço excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir serviço" });
    }
};
exports.deleteService = deleteService;
//# sourceMappingURL=serviceController.js.map