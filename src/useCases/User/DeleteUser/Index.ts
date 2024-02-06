import { PostgresUsersRepository } from "../../../respositories/implementations/PostgresUsersRepostiory";
import { RedisRepository } from "../../../respositories/implementations/RedisRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";


const postgreUserRepository = new PostgresUsersRepository()
const redisRespository = new RedisRepository ()

const deleteUserUseCase = new DeleteUserUseCase(postgreUserRepository,redisRespository)

const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }