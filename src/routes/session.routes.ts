import { Router } from "express";
import { verifyBody } from "../middlewares/globals.middlewares";
import { userLoginSchema } from "../schemas/users.schema";
import { loginController } from "../controllers/sessions.controller";

export const sessionRouter: Router = Router();

sessionRouter.post("/", verifyBody(userLoginSchema), loginController);
