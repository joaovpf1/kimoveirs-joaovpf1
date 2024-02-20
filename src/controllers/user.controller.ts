import { Request, Response } from "express";
import { IUser, IUserRead, IUserReturn } from "../interface/users.interface";
import {
  createUserService,
  deleteUserService,
  readUserService,
  updateUserService,
} from "../service/user.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: IUserReturn = await createUserService(req.body);
  return res.status(201).json(user);
};

export const readUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: IUserRead = await readUserService();
  return res.status(200).json(user);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;
  const newInfo: IUserReturn = await updateUserService(req.body, user);
  return res.status(200).json(newInfo);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { user } = res.locals;
  await deleteUserService(user);
  return res.status(204).json();
};
