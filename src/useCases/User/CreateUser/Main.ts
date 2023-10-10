import { PostgreAuthenticationRepostitory } from "../../../respositories/implementations/PostgreAuthenticationRepostitory";
import { PostgresUsersRepository } from "../../../respositories/implementations/PostgresUsersRepostiory";
import { ValidationUser } from "../../../services/validations/UserValitadion/ValidationUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const postgresUsersRepository = new PostgresUsersRepository()
const UserValidation = new ValidationUser()
const postgreAuahtenticationRepository = new PostgreAuthenticationRepostitory()
const createUserUseCase = new CreateUserUseCase(postgresUsersRepository, postgreAuahtenticationRepository)
const createUserController = new CreateUserController(
    createUserUseCase,
    UserValidation
)



export { createUserUseCase, createUserController }