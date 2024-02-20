import { Router } from "express";
import { usersRouter } from "./users.routes";
import { scheduleRouter } from "./schedules.routes";
import { realEstateRouter } from "./realEstate.routes";
import { categoryRouter } from "./categories.routes";
import { sessionRouter } from "./session.routes";

export const routes: Router = Router();

routes.use("/users", usersRouter);
routes.use("/schedules", scheduleRouter);
routes.use("/realEstate", realEstateRouter);
routes.use("/categories", categoryRouter);
routes.use("/login", sessionRouter);
