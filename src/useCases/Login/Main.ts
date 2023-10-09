import { PostgreAuthenticationRepostitory } from "../../respositories/implementations/PostgreAuthenticationRepostitory";
import { PostgresUsersRepository } from "../../respositories/implementations/PostgresUsersRepostiory";
import { RedisRepository } from "../../respositories/implementations/RedisRepository";
import { ValidationLogin } from "../../services/ValidationLogin";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";


const postgresUsersRepository = new PostgresUsersRepository()
const redisRepository = new RedisRepository()
const TokenRepository = new PostgreAuthenticationRepostitory ()
const loginUseCase = new LoginUseCase(postgresUsersRepository, redisRepository, TokenRepository)
const validationLogin = new ValidationLogin()
const loginController = new LoginController(loginUseCase, validationLogin)

export { loginUseCase, loginController }