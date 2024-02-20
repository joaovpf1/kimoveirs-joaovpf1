import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../repositories";
import { Address } from "../entities";
import AppError from "../errors/AppErrors.error";

export const verifyAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { address } = req.body;
  const addressExists: Address | null = await addressRepo.findOne({
    where: {
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    },
  });
  if (addressExists) throw new AppError("Address already exists", 409);
  return next();
};
