import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { User } from "../entities";
import AppError from "../errors/AppErrors.error";

export const verifyUniqueUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const emailBody = req.body.email;
  const userEmail: User | null = await userRepo.findOne({
    where: { email: emailBody },
  });

  if (userEmail) {
    throw new AppError("Email already exists", 409);
  }
  return next();
};

export const verifyUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { id } = req.params;
  const user: User | null = await userRepo.findOneBy({ id: Number(id) });
  if (!user) throw new AppError("User not found", 404);
  res.locals = { ...res.locals, user };
  return next();
};
