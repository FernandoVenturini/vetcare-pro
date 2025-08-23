import { Request, Response } from "express";
import Patient from "../models/Patient";

export const getPatients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const patients = await Patient.findAll({
      where: { clinicId },
      order: [["name", "ASC"]],
    });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pacientes" });
  }
};

export const getPatientById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const patient = await Patient.findOne({
      where: { id, clinicId },
    });

    if (!patient) {
      res.status(404).json({ error: "Paciente não encontrado" });
      return;
    }

    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar paciente" });
  }
};

export const createPatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const patient = await Patient.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(patient);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar paciente" });
  }
};

export const updatePatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const patient = await Patient.findOne({
      where: { id, clinicId },
    });

    if (!patient) {
      res.status(404).json({ error: "Paciente não encontrado" });
      return;
    }

    await patient.update(req.body);
    res.json(patient);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar paciente" });
  }
};

export const deletePatient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const patient = await Patient.findOne({
      where: { id, clinicId },
    });

    if (!patient) {
      res.status(404).json({ error: "Paciente não encontrado" });
      return;
    }

    await patient.destroy();
    res.json({ message: "Paciente excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir paciente" });
  }
};
