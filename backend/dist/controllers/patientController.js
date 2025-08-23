"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.createPatient = exports.getPatientById = exports.getPatients = void 0;
const Patient_1 = __importDefault(require("../models/Patient"));
const getPatients = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const patients = await Patient_1.default.findAll({
            where: { clinicId },
            order: [["name", "ASC"]],
        });
        res.json(patients);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar pacientes" });
    }
};
exports.getPatients = getPatients;
const getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const patient = await Patient_1.default.findOne({
            where: { id, clinicId },
        });
        if (!patient) {
            res.status(404).json({ error: "Paciente não encontrado" });
            return;
        }
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar paciente" });
    }
};
exports.getPatientById = getPatientById;
const createPatient = async (req, res) => {
    try {
        const clinicId = req.user.clinicId;
        const patient = await Patient_1.default.create({
            ...req.body,
            clinicId,
        });
        res.status(201).json(patient);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar paciente" });
    }
};
exports.createPatient = createPatient;
const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const patient = await Patient_1.default.findOne({
            where: { id, clinicId },
        });
        if (!patient) {
            res.status(404).json({ error: "Paciente não encontrado" });
            return;
        }
        await patient.update(req.body);
        res.json(patient);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar paciente" });
    }
};
exports.updatePatient = updatePatient;
const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.clinicId;
        const patient = await Patient_1.default.findOne({
            where: { id, clinicId },
        });
        if (!patient) {
            res.status(404).json({ error: "Paciente não encontrado" });
            return;
        }
        await patient.destroy();
        res.json({ message: "Paciente excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir paciente" });
    }
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patientController.js.map