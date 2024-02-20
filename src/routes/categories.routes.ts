import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middlewares";
import { verifyUniqueUser } from "../middlewares/users.middlewares";
import {
  verifyCategoryExists,
  verifyUniqueCategory,
} from "../middlewares/categories.middlewares";
import {
  createCategoriesController,
  readCategoriesController,
  readRealEstateByCategoriesController,
} from "../controllers/categories.controller";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "/",
  verifyToken,
  verifyUniqueCategory,
  verifyUniqueUser,
  verifyAdmin,
  createCategoriesController
);
categoryRouter.get("/", readCategoriesController);
categoryRouter.get(
  "/:id/realEstate",
  verifyCategoryExists,
  readRealEstateByCategoriesController
);
