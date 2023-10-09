import { PostgresProfileRepository } from "../../respositories/implementations/PostgresProfileRepository";
import { DeleteProfileController } from "./DeleteProfileController";
import { DeleteProfileUseCase } from "./DeleteProfileUseCase";


const profileProfileRepository = new PostgresProfileRepository()

const deleteProfileUseCase = new DeleteProfileUseCase(profileProfileRepository)

const deleteProfileController = new DeleteProfileController (deleteProfileUseCase)

export { deleteProfileController, deleteProfileUseCase }