import { Router } from "express";
import {
  verifyAdmin,
  verifyBody,
  verifyToken,
} from "../middlewares/globals.middlewares";
import { verifyAddress } from "../middlewares/realEstate.middlewares";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";
import { readRealEstateByCategoriesController } from "../controllers/categories.controller";
import {
  createRealEstateController,
  readRealEstateController,
} from "../controllers/realEstate.controller";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "/",
  verifyToken,
  verifyAdmin,
  verifyBody(realEstateCreateSchema),
  verifyAddress,
  createRealEstateController
);
realEstateRouter.get("/", readRealEstateController);
