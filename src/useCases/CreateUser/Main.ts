import { PostgresUsersRepository } from "../../respositories/implementations/PostgresUsersRepostiory";
import { ValidationUser } from "../../services/ValidationUser";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";



const postgresUsersRepository = new PostgresUsersRepository()
const UserValidation = new ValidationUser()
const createUserUseCase = new CreateUserUseCase(postgresUsersRepository)
const createUserController = new CreateUserController(
    createUserUseCase,
     UserValidation
)



export { createUserUseCase, createUserController }