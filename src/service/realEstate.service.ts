import { Address, RealEstate } from "../entities";
import AppError from "../errors/AppErrors.error";
import { ICategories } from "../interface/categories.interface";
import {
  IRealEstate,
  IRealEstateCreate,
} from "../interface/realEstate.interface";
import { addressRepo, categoriesRepo, realEstateRepo } from "../repositories";
import { realEstateSchema } from "../schemas/realEstate.schema";

export const createRealEstateService = async (
  data: IRealEstateCreate
): Promise<IRealEstate> => {
  const categorie: ICategories | null = await categoriesRepo.findOneBy({
    id: data.categoryId,
  });
  if (!categorie) throw new AppError("Category not found", 404);
  const address: Address | null = await addressRepo.save(data.address);
  const realEstate: RealEstate = await realEstateRepo.save({
    ...data,
    address,
    category: categorie!,
  });
  return realEstateSchema.parse(realEstate);
};

export const readRealEstateService = async (): Promise<IRealEstate[]> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};
