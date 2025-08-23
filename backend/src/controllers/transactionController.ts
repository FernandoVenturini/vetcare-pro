import { Request, Response } from "express";
import Transaction from "../models/Transaction";

export const getTransactions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const transactions = await Transaction.findAll({
      where: { clinicId },
      order: [["createdAt", "DESC"]],
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transações" });
  }
};

export const getTransactionById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const transaction = await Transaction.findOne({
      where: { id, clinicId },
    });

    if (!transaction) {
      res.status(404).json({ error: "Transação não encontrado" });
      return;
    }

    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar transação" });
  }
};

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const clinicId = (req as any).user.clinicId;
    const transaction = await Transaction.create({
      ...req.body,
      clinicId,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar transação" });
  }
};

export const updateTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const transaction = await Transaction.findOne({
      where: { id, clinicId },
    });

    if (!transaction) {
      res.status(404).json({ error: "Transação não encontrado" });
      return;
    }

    await transaction.update(req.body);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar transação" });
  }
};

export const deleteTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const clinicId = (req as any).user.clinicId;

    const transaction = await Transaction.findOne({
      where: { id, clinicId },
    });

    if (!transaction) {
      res.status(404).json({ error: "Transação não encontrado" });
      return;
    }

    await transaction.destroy();
    res.json({ message: "Transação excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir transação" });
  }
};
