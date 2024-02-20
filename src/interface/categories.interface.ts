import { z } from "zod";
import {
  categoriesCreateSchema,
  categoriesReadSchema,
  categoriesSchema,
} from "../schemas/categories.schema";

export type ICategories = z.infer<typeof categoriesSchema>;

export type ICategoriesCreate = z.infer<typeof categoriesCreateSchema>;

export type ICategoriesRead = z.infer<typeof categoriesReadSchema>;
