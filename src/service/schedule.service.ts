import { RealEstate, User } from "../entities";
import AppError from "../errors/AppErrors.error";
import { ISchedulesCreate } from "../interface/schedules.schema";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

export const createScheduleService = async (
  data: ISchedulesCreate,
  userId: number
): Promise<void> => {
  const newData = new Date(data.date).getDay();
  if (newData == 0 || newData == 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);
  const time = Number(data.hour.toString().split(":")[0]);
  if (time < 8 || time > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({
    id: data.realEstateId,
  });
  const user: User | null = await userRepo.findOneBy({ id: userId });
  await scheduleRepo.save({ ...data, realEstate: realEstate!, user: user! });
};

export const readAllScheduleService = async (
  id: number
): Promise<RealEstate> => {
  const realEstate: RealEstate | null = await realEstateRepo.findOne({
    where: {
      id,
    },
    relations: {
      schedules: {
        user: true,
      },
      address: true,
      category: true,
    },
  });
  if (!realEstate) throw new AppError("RealEstate not found", 404);
  return realEstate;
};
