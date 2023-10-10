import { PostgresUsersRepository } from "../../../respositories/implementations/PostgresUsersRepostiory";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


const postgreUserRepository = new PostgresUsersRepository()


const deleteUserUseCase = new DeleteUserUseCase(postgreUserRepository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }