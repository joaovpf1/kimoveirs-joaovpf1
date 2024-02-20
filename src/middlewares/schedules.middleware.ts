import { NextFunction, Request, Response } from "express";
import { realEstateRepo, scheduleRepo } from "../repositories";
import { RealEstate, Schedule } from "../entities";
import AppError from "../errors/AppErrors.error";

export const verifyRealEstateExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId } = req.body;
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id: Number(realEstateId),
    },
  });
  if (!realEstate) throw new AppError("RealEstate not found", 404);
  return next();
};

export const verifyScheduleExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { realEstateId, hour, date } = req.body;
  const schedule = await scheduleRepo.findOne({
    where: {
      realEstate: {
        id: Number(realEstateId),
      },
      hour,
      date,
    },
  });
  if (schedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  return next();
};

export const verifyUserSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  let { sub } = res.locals.decoded;
  sub = Number(sub);
  const { hour, date } = req.body;
  const schedule: Schedule | null = await scheduleRepo.findOne({
    where: {
      user: {
        id: sub,
      },
      date,
      hour,
    },
  });
  if (schedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  return next();
};
