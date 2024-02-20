import { z } from "zod";
import {
  userCreateSchema,
  userLoginSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/users.schema";
import { DeepPartial } from "typeorm";

export type IUser = z.infer<typeof userSchema>;

export type IUserCreate = Omit<typeof userCreateSchema, "admin">;

export type IUserRead = z.infer<typeof userReadSchema>;

export type IUserUpdate = DeepPartial<typeof userUpdateSchema>;

export type IUserReturn = z.infer<typeof userReturnSchema>;

export type IUserLogin = z.infer<typeof userLoginSchema>;

export type ILoginReturn = { token: string };
