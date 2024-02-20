import { Repository } from "typeorm"
import { AppDataSource } from "./data-source"
import { User, Address, RealEstate, Category, Schedule } from "./entities"

export const userRepo: Repository<User> = AppDataSource.getRepository(User)
export const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
export const realEstateRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
export const categoriesRepo: Repository<Category> = AppDataSource.getRepository(Category)
export const scheduleRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule)