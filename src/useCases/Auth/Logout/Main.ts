import { PostgreAuthenticationRepostitory } from "../../../respositories/implementations/PostgreAuthenticationRepostitory";
import { RedisRepository } from "../../../respositories/implementations/RedisRepository";
import { LogoutUseCase } from "./LogoutCaseUse";
import { LogoutController } from "./LogoutController";


const redisRepository = new RedisRepository()

const logoutUseCase = new LogoutUseCase(redisRepository)

const logoutController = new LogoutController(logoutUseCase)

export { logoutController, logoutUseCase }