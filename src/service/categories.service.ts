import AppError from "../errors/AppErrors.error";
import {
  ICategories,
  ICategoriesCreate,
  ICategoriesRead,
} from "../interface/categories.interface";
import { categoriesRepo } from "../repositories";

export const createCategoriesService = async (
  data: ICategoriesCreate
): Promise<ICategories> => {
  return await categoriesRepo.save(data);
};

export const readCategoriesService = async (): Promise<ICategoriesRead> => {
  return await categoriesRepo.find();
};

export const readRealEstateByCategoriesService = async (
  id: number
): Promise<ICategories> => {
  const categories: ICategories | null = await categoriesRepo.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });
  if (!categories) throw new AppError("Categorie was not found", 404);
  return categories;
};
