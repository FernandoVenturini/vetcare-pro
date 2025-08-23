"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
const getAppointments = async (req, res) => {
    try {
        const clinicId = req.user.id;
        const appointments = await Appointment_1.default.findAll({
            where: { clinicId },
            order: [
                ["date", "ASC"],
                ["time", "ASC"],
            ],
        });
        res.json(appointments);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar agendamentos" });
    }
};
exports.getAppointments = getAppointments;
const getAppointmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.id;
        const appointment = await Appointment_1.default.findOne({
            where: { id, clinicId },
        });
        if (!appointment) {
            res.status(404).json({ error: "Agendamento não encontrado" });
            return;
        }
        res.json(appointment);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar agendamento" });
    }
};
exports.getAppointmentById = getAppointmentById;
const createAppointment = async (req, res) => {
    try {
        const clinicId = req.user.id;
        const userId = req.user.id;
        const appointment = await Appointment_1.default.create({
            ...req.body,
            clinicId,
            userId,
        });
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao criar agendamento" });
    }
};
exports.createAppointment = createAppointment;
const updateAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.id;
        const appointment = await Appointment_1.default.findOne({
            where: { id, clinicId },
        });
        if (!appointment) {
            res.status(404).json({ error: "Agendamento não encontrado" });
            return;
        }
        await appointment.update(req.body);
        res.json(appointment);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar agendamento" });
    }
};
exports.updateAppointment = updateAppointment;
const deleteAppointment = async (req, res) => {
    try {
        const { id } = req.params;
        const clinicId = req.user.id;
        const appointment = await Appointment_1.default.findOne({
            where: { id, clinicId },
        });
        if (!appointment) {
            res.status(404).json({ error: "Agendamento não encontrado" });
            return;
        }
        await appointment.destroy();
        res.json({ message: "Agendamento excluído com sucesso" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir agendamento" });
    }
};
exports.deleteAppointment = deleteAppointment;
//# sourceMappingURL=appointmentController.js.map