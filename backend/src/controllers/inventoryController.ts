import { Request, Response } from "express";
import InventoryItem from "../models/InventoryItem";

export const getInventoryItems = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const items = await InventoryItem.findAll({
      where: { clinicId },
      order: [["name", "ASC"]],
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar itens do inventário" });
  }
};

export const getInventoryItemById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const item = await InventoryItem.findOne({
      where: { id, clinicId },
    });

    if (!item) {
      res.status(404).json({ error: "Item não encontrado" });
      return;
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar item" });
  }
};

export const createInventoryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const item = await InventoryItem.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar item" });
  }
};

export const updateInventoryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const item = await InventoryItem.findOne({
      where: { id, clinicId },
    });

    if (!item) {
      res.status(404).json({ error: "Item não encontrado" });
      return;
    }

    await item.update(req.body);
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar item" });
  }
};

export const deleteInventoryItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const item = await InventoryItem.findOne({
      where: { id, clinicId },
    });

    if (!item) {
      res.status(404).json({ error: "Item não encontrado" });
      return;
    }

    await item.destroy();
    res.json({ message: "Item excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir item" });
  }
};
