import { Request, Response } from "express";
import Service from "../models/Service";

export const getServices = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const services = await Service.findAll({
      where: { clinicId },
      order: [["name", "ASC"]],
    });
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar serviços" });
  }
};

export const getServiceById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const service = await Service.findOne({
      where: { id, clinicId },
    });

    if (!service) {
      res.status(404).json({ error: "Serviço não encontrado" });
      return;
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar serviço" });
  }
};

export const createService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const service = await Service.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar serviço" });
  }
};

export const updateService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const service = await Service.findOne({
      where: { id, clinicId },
    });

    if (!service) {
      res.status(404).json({ error: "Serviço não encontrado" });
      return;
    }

    await service.update(req.body);
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar serviço" });
  }
};

export const deleteService = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const service = await Service.findOne({
      where: { id, clinicId },
    });

    if (!service) {
      res.status(404).json({ error: "Serviço não encontrado" });
      return;
    }

    await service.destroy();
    res.json({ message: "Serviço excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir serviço" });
  }
};
