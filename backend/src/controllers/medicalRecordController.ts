import { Request, Response } from "express";
import MedicalRecord from "../models/MedicalRecord";

export const getMedicalRecords = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const records = await MedicalRecord.findAll({
      where: { clinicId },
      order: [["createdAt", "DESC"]],
    });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar prontuários" });
  }
};

export const getMedicalRecordById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const record = await MedicalRecord.findOne({
      where: { id, clinicId },
    });

    if (!record) {
      res.status(404).json({ error: "Prontuário não encontrado" });
      return;
    }

    res.json(record);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar prontuário" });
  }
};

export const createMedicalRecord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const record = await MedicalRecord.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar prontuário" });
  }
};

export const updateMedicalRecord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const record = await MedicalRecord.findOne({
      where: { id, clinicId },
    });

    if (!record) {
      res.status(404).json({ error: "Prontuário não encontrado" });
      return;
    }

    await record.update(req.body);
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar prontuário" });
  }
};

export const deleteMedicalRecord = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const record = await MedicalRecord.findOne({
      where: { id, clinicId },
    });

    if (!record) {
      res.status(404).json({ error: "Prontuário não encontrado" });
      return;
    }

    await record.destroy();
    res.json({ message: "Prontuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir prontuário" });
  }
};
