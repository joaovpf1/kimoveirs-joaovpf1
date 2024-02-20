import { z } from "zod";
import { addressesSchema, addressCreateSchema } from "./addresses.schema";
import { categoriesSchema } from "./categories.schema";

export const realEstateSchema = z.object({
  id: z.number().positive().int(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressesSchema,
  category: categoriesSchema,
});

export const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    createdAt: true,
    updatedAt: true,
    address: true,
    category: true,
  })
  .extend({ address: addressCreateSchema })
  .extend({ categoryId: z.number() });

export const realEstateReadSchema = realEstateSchema.array();
