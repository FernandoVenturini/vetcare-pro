"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMedicalRecord = exports.updateMedicalRecord = exports.createMedicalRecord = exports.getMedicalRecordById = exports.getMedicalRecords = void 0;
const MedicalRecord_1 = __importDefault(require("../models/MedicalRecord"));
const getMedicalRecords = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const records = await MedicalRecord_1.default.findAll({
            where: { clinicId },
            order: [["createdAt", "DESC"]],
        });
        res.json(records);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar prontuários" });
    }
};
exports.getMedicalRecords = getMedicalRecords;
const getMedicalRecordById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const record = await MedicalRecord_1.default.findOne({
            where: { id, clinicId },
        });
        if (!record) {
            res.status(404).json({ error: "Prontuário não encontrado" });
            return;
        }
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar prontuário" });
    }
};
exports.getMedicalRecordById = getMedicalRecordById;
const createMedicalRecord = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const record = await MedicalRecord_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(record);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar prontuário" });
    }
};
exports.createMedicalRecord = createMedicalRecord;
const updateMedicalRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const record = await MedicalRecord_1.default.findOne({
            where: { id, clinicId },
        });
        if (!record) {
            res.status(404).json({ error: "Prontuário não encontrado" });
            return;
        }
        await record.update(req.body);
        res.json(record);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar prontuário" });
    }
};
exports.updateMedicalRecord = updateMedicalRecord;
const deleteMedicalRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const record = await MedicalRecord_1.default.findOne({
            where: { id, clinicId },
        });
        if (!record) {
            res.status(404).json({ error: "Prontuário não encontrado" });
            return;
        }
        await record.destroy();
        res.json({ message: "Prontuário excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir prontuário" });
    }
};
exports.deleteMedicalRecord = deleteMedicalRecord;
//# sourceMappingURL=medicalRecordController.js.map