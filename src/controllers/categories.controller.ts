import { Request, Response } from "express";
import {
  createCategoriesService,
  readCategoriesService,
  readRealEstateByCategoriesService,
} from "../service/categories.service";
import { ICategoriesRead } from "../interface/categories.interface";

export const createCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories = await createCategoriesService(req.body);
  return res.status(201).json(categories);
};

export const readCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: ICategoriesRead = await readCategoriesService();
  return res.status(200).json(categories);
};

export const readRealEstateByCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoryId = Number(req.params.id);
  const categories = await readRealEstateByCategoriesService(categoryId);
  return res.status(200).json(categories);
};
