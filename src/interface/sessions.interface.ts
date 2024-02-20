import { z } from "zod";
import { userLoginSchema } from "../schemas/users.schema";

export type ILogin = z.infer<typeof userLoginSchema>;
