import { Request, Response } from "express";
import Appointment from "../models/Appointment"; // Ensure this path is correct and the model is exported properly

export const getAppointments = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.id;
    const appointments = await Appointment.findAll({
      where: { clinicId },
      order: [
        ["date", "ASC"],
        ["time", "ASC"],
      ],
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
};

export const getAppointmentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.id;

    const appointment = await Appointment.findOne({
      where: { id, clinicId },
    });

    if (!appointment) {
      res.status(404).json({ error: "Agendamento não encontrado" });
      return;
    }

    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar agendamento" });
  }
};

export const createAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.id;
    const userId = (req as any).user.id;

    const appointment = await Appointment.create({
      ...req.body,
      clinicId,
      userId,
    });

    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
};

export const updateAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.id;

    const appointment = await Appointment.findOne({
      where: { id, clinicId },
    });

    if (!appointment) {
      res.status(404).json({ error: "Agendamento não encontrado" });
      return;
    }

    await appointment.update(req.body);
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar agendamento" });
  }
};

export const deleteAppointment = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.id;

    const appointment = await Appointment.findOne({
      where: { id, clinicId },
    });

    if (!appointment) {
      res.status(404).json({ error: "Agendamento não encontrado" });
      return;
    }

    await appointment.destroy();
    res.json({ message: "Agendamento excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir agendamento" });
  }
};
