import { Request, Response } from "express";
import Client from "../models/Client";

export const getClients = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const clients = await Client.findAll({
      where: { clinicId },
      order: [["name", "ASC"]],
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar clientes" });
  }
};

export const getClientById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const client = await Client.findOne({
      where: { id, clinicId },
    });

    if (!client) {
      res.status(404).json({ error: "Cliente não encontrado" });
      return;
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar cliente" });
  }
};

export const createClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const client = await Client.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
};

export const updateClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const client = await Client.findOne({
      where: { id, clinicId },
    });

    if (!client) {
      res.status(404).json({ error: "Cliente não encontrado" });
      return;
    }

    await client.update(req.body);
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
};

export const deleteClient = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const client = await Client.findOne({
      where: { id, clinicId },
    });

    if (!client) {
      res.status(404).json({ error: "Cliente não encontrado" });
      return;
    }

    await client.destroy();
    res.json({ message: "Cliente excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir cliente" });
  }
};
