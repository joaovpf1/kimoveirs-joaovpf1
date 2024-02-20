import { Router } from "express";
import {
  verifyAdmin,
  verifyBody,
  verifyPermission,
  verifyToken,
} from "../middlewares/globals.middlewares";
import {
  verifyUniqueUser,
  verifyUserExists,
} from "../middlewares/users.middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas/users.schema";
import {
  createUserController,
  deleteUserController,
  readUserController,
  updateUserController,
} from "../controllers/user.controller";

export const usersRouter: Router = Router();

usersRouter.post(
  "/",
  verifyBody(userCreateSchema),
  verifyUniqueUser,
  createUserController
);
usersRouter.get("/", verifyToken, verifyAdmin, readUserController);
usersRouter.patch(
  "/:id",
  verifyBody(userUpdateSchema),
  verifyToken,
  verifyUserExists,
  verifyPermission,
  updateUserController
);
usersRouter.delete(
  "/:id",
  verifyToken,
  verifyUserExists,
  verifyPermission,
  verifyAdmin,
  deleteUserController
);
