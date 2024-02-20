import { z } from "zod";

export const schedulesSchema = z.object({
  id: z.number().positive().int(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive().int(),
  userId: z.number().positive().int(),
});

export const schedulesCreateSchema = schedulesSchema.omit({
  id: true,
  userId: true,
});

export const schedulesReadSchema = schedulesSchema.array();
