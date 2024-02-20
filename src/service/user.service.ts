import {
  IUser,
  IUserRead,
  IUserReturn,
  IUserUpdate,
} from "../interface/users.interface";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (data: IUser): Promise<IUserReturn> => {
  const userData = userRepo.create(data);
  await userRepo.save(userData);
  return userReturnSchema.parse(userData);
};

export const readUserService = async (): Promise<IUserRead> => {
  const readData = await userRepo.find();
  return userReadSchema.parse(readData);
};

export const updateUserService = async (
  data: IUserUpdate,
  user: IUser
): Promise<IUserReturn> => {
  const userData: IUser = userRepo.create({ ...user, ...data });
  const updateUser = await userRepo.save(userData);
  return userReturnSchema.parse(updateUser);
};

export const deleteUserService = async (user: IUser): Promise<void> => {
  await userRepo.softRemove(user);
};
