import { Router } from "express";
import { verify } from "jsonwebtoken";
import {
  verifyAdmin,
  verifyBody,
  verifyToken,
} from "../middlewares/globals.middlewares";
import {
  verifyRealEstateExists,
  verifyScheduleExist,
  verifyUserSchedule,
} from "../middlewares/schedules.middleware";
import { schedulesCreateSchema } from "../schemas/schedules.schema";
import {
  createScheduleController,
  readAllScheduleController,
} from "../controllers/schedules.controller";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "/",
  verifyToken,
  verifyBody(schedulesCreateSchema),
  verifyRealEstateExists,
  verifyScheduleExist,
  verifyUserSchedule,
  createScheduleController
);
scheduleRouter.get(
  "/realEstate/:id",
  verifyToken,
  verifyAdmin,
  readAllScheduleController
);
