import { z } from "zod";
import {
  realEstateCreateSchema,
  realEstateReadSchema,
  realEstateSchema,
} from "../schemas/realEstate.schema";

export type IRealEstate = z.infer<typeof realEstateSchema>;

export type IRealEstateCreate = z.infer<typeof realEstateCreateSchema>;

export type IRealEstateRead = z.infer<typeof realEstateReadSchema>;
