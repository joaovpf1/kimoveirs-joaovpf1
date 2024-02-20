import { z } from "zod";

export const addressesSchema = z.object({
  id: z.number().positive().int(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.number(),
  city: z.string().max(20),
  state: z.string().max(2),
});

export const addressCreateSchema = addressesSchema.omit({ id: true });
