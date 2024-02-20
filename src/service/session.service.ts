import { compare } from "bcryptjs";
import { ILoginReturn, IUser, IUserLogin } from "../interface/users.interface";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppErrors.error";

export const loginService = async (data: IUserLogin): Promise<ILoginReturn> => {
  const { email } = data;
  const user: IUser | null = await userRepo.findOneBy({ email });
  if (!user) throw new AppError("Invalid credentials", 401);
  const comparePass = await compare(data.password, user.password);
  if (!comparePass) throw new AppError("Invalid credentials", 401);
  const token: string = sign(
    { email: user.email, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );
  return { token };
};
