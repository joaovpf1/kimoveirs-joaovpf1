import { z } from "zod";
import {
  schedulesCreateSchema,
  schedulesReadSchema,
  schedulesSchema,
} from "../schemas/schedules.schema";

export type ISchedules = z.infer<typeof schedulesSchema>;

export type ISchedulesCreate = z.infer<typeof schedulesCreateSchema>;

export type ISchedulesRead = z.infer<typeof schedulesReadSchema>;
