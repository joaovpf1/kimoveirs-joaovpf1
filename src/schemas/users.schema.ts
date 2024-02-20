import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive().int(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().optional().nullable(),
});

export const userCreateSchema = userSchema.pick({
  name: true,
  email: true,
  password: true,
  admin: true,
});

export const userWithoutAdminSchema = userCreateSchema.omit({ admin: true });

export const userUpdateSchema = userWithoutAdminSchema.partial();

export const userReturnSchema = userSchema.omit({ password: true });

export const userReadSchema = userReturnSchema.array();

export const userLoginSchema = userCreateSchema.pick({
  email: true,
  password: true,
});
