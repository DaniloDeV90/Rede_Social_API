import { PostgresUsersRepository } from "../../../respositories/implementations/PostgresUsersRepostiory";
import { FindUserController } from "./findUserController";
import { FindUserUseCase } from "./findUserUseCase";

const userRepository = new PostgresUsersRepository()
const findUserCase = new FindUserUseCase(userRepository)

const findUserController = new FindUserController(findUserCase)

export { findUserController, findUserCase }