import { PostgreAuthenticationRepostitory } from "../../../respositories/implementations/PostgreAuthenticationRepostitory";
import { PostgresUsersRepository } from "../../../respositories/implementations/PostgresUsersRepostiory";
import { RedisRepository } from "../../../respositories/implementations/RedisRepository";
import { ValidationUser } from "../../../services/validations/UserValitadion/ValidationUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const postgresUsersRepository = new PostgresUsersRepository()
const UserValidation = new ValidationUser()
const redisRepository = new RedisRepository ()
const postgreAuahtenticationRepository = new PostgreAuthenticationRepostitory()
const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, postgreAuahtenticationRepository,redisRepository)
const createUserController = new CreateUserController(
    createUserUseCase,
    UserValidation
)



export { createUserUseCase, createUserController }