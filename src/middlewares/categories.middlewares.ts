import { NextFunction, Request, Response } from "express";
import { categoriesRepo } from "../repositories";
import { Category } from "../entities";
import AppError from "../errors/AppErrors.error";

export const verifyUniqueCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;
  const category: Category | null = await categoriesRepo.findOneBy({ name });
  if (category) throw new AppError("Category already exists", 409);
  return next();
};

export const verifyCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const category: Category | null = await categoriesRepo.findOneBy({
    id: Number(id),
  });
  if (!category) throw new AppError("Category not found", 404);
  return next();
};
